<template>
    <b-modal @ok="onSubmit" size="lg" ok-title="Save Changes">
        <template v-slot:header>
            <div class="d-flex justify-content-between w-100">
                <h4>Edit Category</h4>
                <div class="d-flex flex-column text-secondary">
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
    import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css'; 
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
                try{
                    await editCategory(this.category)
                    toast("Category edited successfuly", {
                        autoClose: 1000,
                    });
                } catch {
                    toast("Category edit failed", {
                    autoClose: 1000,
                });
                }
            }
        }
    }
</script>
  
  <style>
  
  </style>