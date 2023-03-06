<template>
  <b-modal @ok="onSubmit" size="lg">
        <template v-slot:header>
            <div class="d-flex justify-content-between w-100">
                <h4>Edit Product</h4>
                <div class="d-flex flex-column text-secondary">
                    <small>Created by: {{product.insertedBy}}</small>
                    <small>Date created: {{product.insertDate}}</small>
                </div>
            </div>
        </template>
        <div v-if="showModal" class="insert-form">
            <b-form>
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
                    <v-select :close-on-select="false" searchable multiple label="categoryName" :options="allCategories" v-model="product.productCategory" placeholder="Product Category"></v-select>
                </b-form-group>
            </b-form>
        </div>
    </b-modal>
</template>

<script>
import { editProduct } from '@/eCommerce-sdk/products.js'
export default {
    props: {
        showModal: {
            type: Boolean,
            default: false,
        },
        product: {
            type: Object,
            default: null,
        }
    },
    data() {
        return {
            categories: []
        }
    },
    watch: {
        async showModal() {
            if(this.showModal) {
                const response = await this.$store.dispatch('fetchCategories')
                this.categories = response.data
            }
        }
    },
    computed: {
        allCategories() {
            return this.categories
        }
    },
    methods: {
        async onSubmit() {
            await editProduct(this.product)
        }
    }
}
</script>

<style>

</style>