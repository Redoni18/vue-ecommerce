<template>
    <div class="form-container">
        <h2>New Payment Method</h2>
        <div class="insert-form">
            <b-form @submit="onSubmit">
                <b-form-group
                    label="Payment Method Name"
                >
                    <b-form-input
                        v-model="paymentMethod.name"
                        placeholder="Payment Method Name"
                        required
                    ></b-form-input>
                </b-form-group>
                
                <div class="d-flex gap-2 justify-content-center">
                    <b-button type="submit" variant="primary">Upload</b-button>

                    <b-button @click="resetForm" variant="danger">Reset</b-button>
                </div>
            </b-form>
        </div>
    </div>
</template>

<script>
import { insertPayMethod } from '@/eCommerce-sdk/payMethod.js'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css'; 
export default {
    data() {
        return {
            paymentMethod: {
                name: '',
                insertedBy: this.$store.state.authenticate.user.data.displayName,
                insertDate: null,
            },
        }
    },
    methods: {
        async onSubmit() {
            const today = new Date()
            this.paymentMethod.insertDate = today.toLocaleString();
            try{
                await insertPayMethod(this.paymentMethod)
                this.resetForm()
                toast("Payment method uploaded successfuly", {
                    autoClose: 1000,
                });
            } catch {
                toast("Payment method upload failed", {
                    autoClose: 1000,
                });
            }
        },

        resetForm() {
            this.paymentMethod.name = ""
        }
    }
}
</script>

<style lang="scss" scoped>

.form-container {
    width: 600px;
    padding: 3% 0;
    margin: 0 auto;
}

</style>