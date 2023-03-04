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
export default {
    data() {
        return {
            category: {
                categoryName: ''
            }
        }
    },
    methods: {
        async onSubmit() {
            await insertCategory(this.category)
            this.resetForm()
        },

        resetForm() {
            this.category.categoryName = ""
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