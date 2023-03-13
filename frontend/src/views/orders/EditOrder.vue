<template>
  <b-modal @ok="onSubmit" size="lg" ok-title="Save Changes">
        <template v-slot:header>
            <div class="d-flex justify-content-between w-100">
                <h4>Edit Product</h4>
                <p v-if="userData && userData?.isAdmin" class="fw-bold">Order Status: <span :class="{'text-danger': !order.isCompleted, 'text-success': order.isCompleted}">{{order.isCompleted ? 'Completed' : 'Pending' }}</span></p>
            </div>
        </template>
        <div class="insert-form">
            <b-form>
                <b-form-group
                    label="First Name"
                >
                    <b-form-input
                        v-model="order.firstName"
                        disabled
                    ></b-form-input>
                </b-form-group>
                <b-form-group
                    label="Last Name"
                >
                    <b-form-input
                        v-model="order.lastName"
                        disabled
                    ></b-form-input>
                </b-form-group>   
                <b-form-group
                    label="Email Address"
                >
                    <b-form-input
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
                    label="Product Name"
                >
                    <b-form-input
                        v-model="order.productName"
                        disabled
                    ></b-form-input>
                </b-form-group>

                 <b-form-group
                    label="Product ID"
                >
                    <b-form-input
                        v-model="order.productId"
                        disabled
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    label="Order Price"
                >
                    <b-form-input
                        v-model="order.orderPrice"
                        disabled
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    v-if="userData && userData?.isDelivery"
                    label="Order Status"
                >
                    <b-form-checkbox
                        v-model="order.isCompleted"
                    >Is Completed?</b-form-checkbox>
                </b-form-group>

            </b-form>
        </div>
    </b-modal>
</template>

<script>
import { editOrder } from '@/eCommerce-sdk/orders.js'
import { getUser } from '@/eCommerce-sdk/user.js'
import { mapGetters } from 'vuex'
export default {
    props: {
        order: {
            type: Object,
            default: null,
        },
        showModal: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            userData: null
        }
    },
    computed: {
        ...mapGetters({
            user: 'getUser'
        }),
    },
    watch: {
        async showModal() {
            if(this.showModal) {
                const response = await getUser(this.user.data.uid)
                this.userData = response.data
            }
        }
    },
    methods: {
        async onSubmit() {
            await editOrder(this.order)
        }
    }
}
</script>

<style>

</style>