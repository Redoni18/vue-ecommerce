<template>
    <b-modal @ok="onSubmit" size="lg">
        <template v-slot:header>
            <div class="d-flex justify-content-between w-100 text-secondary">
                <h4>Edit Category</h4>
                <div class="d-flex flex-column">
                    <small>Created by: {{category.insertedBy}}</small>
                    <small>Date created: {{category.insertDate}}</small>
                </div>
            </div>
        </template>
        <div v-if="showModal" class="insert-form">
            <b-form>
                <b-form-group
                    label="Category Name"
                >
                    <b-form-input
                        v-model="category.categoryName"
                        placeholder="Category name"
                        required
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    label="Category Brand"
                >
                    <v-select :close-on-select="false" searchable multiple label="brandName" :options="allBrands" v-model="category.categoryBrand" placeholder="Category Brand"></v-select>
                </b-form-group>

            </b-form>
        </div>
    </b-modal>
</template>
  
<script>
    import { editCategory } from '@/eCommerce-sdk/categories.js'
    import { getBrands } from '@/eCommerce-sdk/brands.js'
    export default {
        props: {
            showModal: {
                type: Boolean,
                default: false,
            },
            category: {
                type: Object,
                default: null,
            }
        },
        data() {
            return {
                brands: []
            }
        },
        watch: {
            async showModal() {
                if(this.showModal) {
                    const response = await getBrands()
                    this.brands = response.data
                }
            }
        },
        computed: {
            allBrands() {
                return this.brands
            }
        },
        methods: {
            async onSubmit() {
                await editCategory(this.category)
            }
        }
    }
</script>
  
  <style>
  
  </style>