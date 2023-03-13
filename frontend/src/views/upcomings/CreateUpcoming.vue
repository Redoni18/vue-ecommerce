<template>
    <div class="form-container">
        <h2>Upload upcoming</h2>
        <div class="insert-form">
            <b-form @submit="onSubmit">
                <b-form-group
                    label="Product Name"
                >
                    <b-form-input
                        v-model="upcoming.productName"
                        placeholder="Product name"
                        required
                    ></b-form-input>
                </b-form-group>
                <b-form-group label="Product Brand">
                    <b-form-input
                        v-model="upcoming.productBrand"
                        placeholder="Product brand"
                        required
                    ></b-form-input>
                </b-form-group>    
                <b-form-group
                    label="Image Url"
                >
                    <b-form-input
                        v-model="upcoming.imageUrl"
                        placeholder="Image URL"
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
import { insertUpcoming } from '@/eCommerce-sdk/upcomings.js'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css'; 
export default {
    data() {
        return {
            upcoming: {
                productName: '',
                productBrand: '',
                imageUrl: '',
                insertedBy: this.$store.state.authenticate.user.data.displayName,
                insertDate: null,
            },
        
        }
    },
    
    methods: {
        async onSubmit() {
            const today = new Date()
            this.upcoming.insertDate = today.toLocaleString();
            try{
                await insertUpcoming(this.upcoming)
                this.resetForm()
                toast("Upcoming product uploaded successfuly", {
                    autoClose: 1000,
                });
            } catch {
                toast("Upcoming product upload failed", {
                    autoClose: 1000,
                });
            }
        },

        resetForm() {
            this.upcoming.productName = ""
            this.upcoming.productBrand = ""
            this.upcoming.imageUrl = ""
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