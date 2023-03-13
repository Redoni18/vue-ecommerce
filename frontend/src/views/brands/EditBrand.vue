<template>
  <b-modal @ok="onSubmit" size="lg" ok-title="Save Changes">
        <template v-slot:header>
            <div class="d-flex justify-content-between w-100">
                <h4>Edit Brand</h4>
                <div class="d-flex flex-column text-secondary">
                    <small>Created by: {{brand.insertedBy}}</small>
                    <small>Date created: {{brand.insertDate}}</small>
                </div>
            </div>
        </template>
        <div v-if="showModal" class="insert-form">
            <b-form>
                <b-form-group
                    label="Brand Name"
                >
                    <b-form-input
                        v-model="brand.brandName"
                        placeholder="Brand name"
                        required
                    ></b-form-input>
                </b-form-group>
            </b-form>
        </div>
    </b-modal>
</template>

<script>
import { editBrand } from '@/eCommerce-sdk/brands.js'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css'; 
export default {
    props: {
        showModal: {
            type: Boolean,
            default: false,
        },
        brand: {
            type: Object,
            default: null,
        }
    },
    methods: {
        async onSubmit() {
            try {
                await editBrand(this.brand)
                toast("Brand edited successfuly", {
                    autoClose: 1000,
                });
            } catch {
                toast("Brand edit failed", {
                    autoClose: 1000,
                });
            }
        }
    }
}
</script>

<style>

</style>