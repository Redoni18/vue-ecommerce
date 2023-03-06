<template>
    <b-modal @ok="onSubmit" size="lg">
          <template v-slot:header>
              <div class="d-flex justify-content-between w-100">
                <h4>Edit Upcoming Product</h4>
                <div class="d-flex flex-column text-secondary">
                    <small>Created by: {{upcoming.insertedBy}}</small>
                    <small>Date created: {{upcoming.insertDate}}</small>
                </div>
            </div>
          </template>
          <div v-if="showModal" class="insert-form">
              <b-form>
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
              </b-form>
          </div>
      </b-modal>
  </template>
  
  <script>
  import { editUpcoming } from '@/eCommerce-sdk/upcomings.js'
  export default {
      props: {
          showModal: {
              type: Boolean,
              default: false,
          },
          upcoming: {
              type: Object,
              default: null,
          }
      },
      methods: {
          async onSubmit() {
              await editUpcoming(this.upcoming)
          }
      }
  }
  </script>
  
  <style>
  
  </style>