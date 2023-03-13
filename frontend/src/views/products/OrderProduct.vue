<template>
  <b-modal @ok="callPropperFunction" size="md" ok-title="Purchase">
        <template v-slot:header>
            <div class="d-flex justify-content-between w-100">
                <h4>Order Product</h4>
            </div>
        </template>

        <p class="text-danger" v-if="errorMessage">{{errorMessage}}</p>
        <div class="insert-form">
            <b-form>
                <b-form-group
                    label="First Name"
                >
                    <b-form-input
                        v-model="order.firstName"
                        placeholder="First Name"
                        required
                    ></b-form-input>
                </b-form-group>
                <b-form-group
                    label="Last Name"
                >
                    <b-form-input
                        v-model="order.lastName"
                        placeholder="Last Name"
                        required
                    ></b-form-input>
                </b-form-group>  
                <b-form-group
                    label="Email Address"
                >
                    <b-form-input
                        type="email"
                        v-model="order.email"
                        placeholder="Email Address"
                        required
                    ></b-form-input>
                </b-form-group>  
                <b-form-group
                    label="Phone Number"
                >
                    <b-form-input
                        v-model="order.phoneNumber"
                        placeholder="Phone Number"
                        required
                    ></b-form-input>
                </b-form-group>
                <b-form-group
                    label="Address #1"
                >
                    <b-form-input
                        v-model="order.address1"
                        placeholder="Address #1"
                        required
                    ></b-form-input>
                </b-form-group>  
                <b-form-group
                    label="Address #2"
                >
                    <b-form-input
                        v-model="order.address2"
                        placeholder="Address #2"
                        required
                    ></b-form-input>
                </b-form-group>  

                <b-form-group
                    label="Select Payment Method"
                >
                    <div class="d-flex gap-4">
                        <b-form-radio v-for="payment in paymentMethods" :key="payment._id" v-model="paymentMethod" name="some-radios" :value="payment.name">{{payment.name}}</b-form-radio>
                    </div>
                </b-form-group>

            </b-form>
        </div>
    </b-modal>
</template>

<script>
import {getPaymethods} from '@/eCommerce-sdk/payMethod.js'
import {stripeCheckoutSession} from '@/eCommerce-sdk/products'
import {insertOrder} from '@/eCommerce-sdk/orders.js'
import {insertPendingOrder} from '@/eCommerce-sdk/pendingOrders.js'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css'; 
export default {
    props: {
        showModal: {
            type: Boolean,
            default: false
        },
        productId: {
            type: String,
            required: true
        },
        productName: {
            type: String,
            required: true
        },
        productPrice: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            order: {
                firstName: null,
                lastName: null,
                email: null,
                phoneNumber: null,
                address1: null,
                address2: null,
            },
            paymentMethods: [],
            paymentMethod: null,
            stripe: null,
            errorMessage: null
        }
    },
    watch: {
        async showModal() {
            if(this.showModal) {
                const response = await getPaymethods()
                this.paymentMethods = response.data
            }
        },
    },
    mounted(){
        this.stripe = Stripe(process.env.VUE_APP_STRIPE_KEY);
    },
    computed: {
        callPropperFunction() {
            if(this.paymentMethod === "Cash") {
                return this.createOrder
            }
            return this.redirectToStripe
        }
    },
    methods: {
        hasNullValue(obj) {
            for (let key in obj) {
                if (obj[key] === null) {
                    return true;
                }
            }
            return false;
        },
        async redirectToStripe(e) {
            if(this.hasNullValue(this.order)){
                e.preventDefault()
                this.errorMessage = "Please provide all the required information"
                return;
            }

            const response = await stripeCheckoutSession(this.productId)
            const session = response.data.sessionId

            this.order.productId = this.productId
            this.order.productName = this.productName
            this.order.orderPrice = this.productPrice
            this.order.paymentMethod = this.paymentMethod

            await insertPendingOrder(this.order)

            const { error } = await this.stripe.redirectToCheckout({ sessionId: session });

            if (error) {
                console.error(error);
            }
            
        },
        async createOrder() {
            if(this.hasNullValue(this.order)){
                e.preventDefault()
                this.errorMessage = "Please provide all the required information"
                return;
            }

            this.order.productId = this.productId
            this.order.productName = this.productName
            this.order.orderPrice = this.productPrice
            this.order.paymentMethod = this.paymentMethod
            
            try{
                await insertOrder(this.order)
                toast("Order created successfuly", {
                    autoClose: 1000,
                });
            }catch {
                toast("Order failed", {
                    autoClose: 1000,
                });
            }

        }
    }
}
</script>

<style>

</style>