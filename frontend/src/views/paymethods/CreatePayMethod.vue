<template>
    <div class="form-container">
        <h2>Upload PayMethod</h2>
        <div class="insert-form">
            <b-form @submit="onSubmit">
                <b-form-group
                    label="PayMethod Name"
                >
                    <b-form-input
                        v-model="PayMethod.paymethodname"
                        placeholder="PayMethod name"
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
import { insertPayMethod } from '@/eCommerce-sdk/products.js'
export default {
    data() {
        return {
            payMethod: {
                name: '',
                insertedBy: this.$store.state.authenticate.user.data.user.displayName,
                insertDate: null,
            },
        }
    },
    methods: {
        async onSubmit() {
            const today = new Date()
            this.payMethod.insertDate = today.toLocaleString();
            await insertPayMethod(this.product)
            this.resetForm()
        },

        resetForm() {
            this.payMethod.paymethodname = ""
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