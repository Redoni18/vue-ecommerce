<template>
    <div class="form-container">
        <h2>Add category</h2>
        <div class="insert-form">
            <b-form @submit="onSubmit">
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


                <div class="d-flex gap-2 justify-content-center">
                    <b-button type="submit" variant="primary">Upload</b-button>

                    <b-button @click="resetForm" variant="danger">Reset</b-button>
                </div>
            </b-form>
        </div>
    </div>
</template>

<script>
import { insertCategory } from '@/eCommerce-sdk/categories.js'
import { getBrands } from '@/eCommerce-sdk/brands.js'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css'; 
export default {
    data() {
        return {
            category: {
                categoryName: '',
                insertedBy: this.$store.state.authenticate.user.data.displayName,
                insertDate: null,
                categoryBrand: []
            },
            brands: []
        }
    },
    async mounted() {
        const response = await getBrands()
        this.brands = response.data
        console.log(this.brands)
    },
    computed: {
        allBrands() {
            return this.brands
        }
    },
    methods: {
        async onSubmit() {
            const today = new Date()
            this.category.insertDate = today.toLocaleString();
            try {
                await insertCategory(this.category)
                this.resetForm()
                toast("Category uploaded successfuly", {
                    autoClose: 1000,
                });
            }catch {
                toast("Category upload failed", {
                    autoClose: 1000,
                });
            }
        },

        resetForm() {
            this.category.categoryName = ""
            this.category.categoryBrand = []
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