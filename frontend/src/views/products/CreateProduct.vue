<template>
    <div class="form-container">
        <h2>Upload product</h2>
        <div class="insert-form">
            <b-form @submit="onSubmit">
                <b-form-group
                    label="Product Name"
                >
                    <b-form-input
                        v-model="product.productName"
                        placeholder="Product name"
                        required
                    ></b-form-input>
                </b-form-group>
                <b-form-group label="Product Description">
                    <b-form-textarea
                        v-model="product.productDescription"
                        placeholder="Product description"
                        required
                        rows="3"
                        max-rows="6"
                    ></b-form-textarea>
                </b-form-group>    
                <b-form-group
                    label="Quantity"
                >
                    <b-form-input
                        v-model="product.stock"
                        type="number"
                        placeholder="Product quantity"
                        required
                    ></b-form-input>
                </b-form-group>
                <b-form-group
                    label="Image Url"
                >
                    <b-form-input
                        v-model="product.imageUrl"
                        placeholder="Image URL"
                        required
                    ></b-form-input>
                </b-form-group>
                <b-form-group
                    label="Product Price"
                >
                    <b-form-input
                        v-model="product.productPrice"
                        type="number"
                        placeholder="Product price"
                        required
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    label="Product Category"
                >
                    <v-select multiple label="categoryName" :options="allCategories" v-model="product.selectedCategories" placeholder="Product Category"></v-select>
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
import { insertProduct } from '@/eCommerce-sdk/products.js'
export default {
    data() {
        return {
            product: {
                productName: '',
                productDescription: '',
                stock: null,
                imageUrl: '',
                productPrice: null,
                insertedBy: this.$store.state.authenticate.user.data.user.displayName,
                insertDate: null,
                selectedCategories: [],
            },
            categories: []
        }
    },
    async mounted() {
        const response = await this.$store.dispatch('fetchCategories')
        this.categories = response.data
        console.log(this.categories)
    },
    computed: {
        allCategories() {
            return this.categories
        }
    },
    methods: {
        async onSubmit() {
            const today = new Date()
            this.product.insertDate = today.toLocaleString();
            await insertProduct(this.product)
            this.resetForm()
        },

        resetForm() {
            this.product.productName = ""
            this.product.productDescription = ""
            this.product.imageUrl = ""
            this.product.stock = ""
            this.product.productPrice = ""
            this.product.selectedCategories = []
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