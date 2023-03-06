<template>
    <b-modal @ok="onSubmit" size="lg">
        <template v-slot:header>
            <div class="d-flex justify-content-between w-100">
                <h4>Edit Payment Method</h4>
                <div class="d-flex flex-column text-secondary">
                    <small>Created by: {{paymentMethod.insertedBy}}</small>
                    <small>Date created: {{paymentMethod.insertDate}}</small>
                </div>
            </div>
        </template>
        <div v-if="showModal" class="insert-form">
            <b-form>
                <b-form-group
                    label="Payment Method Name"
                >
                    <b-form-input
                        v-model="paymentMethod.name"
                        placeholder="Payment Method name"
                        required
                    ></b-form-input>
                </b-form-group>
            </b-form>
        </div>
    </b-modal>
</template>
  
<script>
    import { editPayMethod } from '@/eCommerce-sdk/payMethod.js'
    export default {
        props: {
            showModal: {
                type: Boolean,
                default: false,
            },
            paymentMethod: {
                type: Object,
                default: null,
            }
        },
        methods: {
            async onSubmit() {
                await editPayMethod(this.paymentMethod)
            }
        }
    }
</script>
  
  <style>
  
  </style>