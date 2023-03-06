<template>
    <b-modal @ok="onSubmit" size="lg">
        <template v-slot:header>
            <div class="d-flex justify-content-between w-100 text-secondary">
                <h4>Edit PayMethod</h4>
            </div>
        </template>
        <div v-if="showModal" class="insert-form">
            <b-form>
                <b-form-group
                    label="PayMethod Name"
                >
                    <b-form-input
                        v-model="PayMethod.paymethodname"
                        placeholder="PayMethod name"
                        required
                    ></b-form-input>
                </b-form-group>
            </b-form>
        </div>
    </b-modal>
</template>
  
<script>
    import { editPayMethod } from '@/eCommerce-sdk/categories.js'
    export default {
        props: {
            showModal: {
                type: Boolean,
                default: false,
            },
            name: {
                type: Object,
                default: null,
            }
        },
        methods: {
            async onSubmit() {
                await editPayMethod(this.paymethod)
            }
        }
    }
</script>
  
  <style>
  
  </style>