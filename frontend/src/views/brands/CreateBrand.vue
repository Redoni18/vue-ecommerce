<template>
    <div class="form-container">
        <h2>Add new brand name</h2>
        <div class="insert-form">
            <b-form @submit="onSubmit">
                <b-form-group
                    label="Brand Name"
                >
                    <b-form-input
                        v-model="brand.brandName"
                        placeholder="Brand name"
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
import { insertBrand } from '@/eCommerce-sdk/brands.js'
export default {
    data() {
        return {
            brand: {
                brandName: '',
                insertedBy: this.$store.state.authenticate.user.data.user.displayName,
                insertDate: null,
            },
        }
    },
    methods: {
        async onSubmit() {
            const today = new Date()
            this.brand.insertDate = today.toLocaleString();
            await insertBrand(this.brand)
            this.resetForm()
        },

        resetForm() {
            this.brand.brandName = ""
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