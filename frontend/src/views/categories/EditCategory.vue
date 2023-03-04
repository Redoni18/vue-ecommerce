<template>
    <b-modal @ok="onSubmit" size="lg">
          <template v-slot:header>
              <h4>Edit Category</h4>
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
              </b-form>
          </div>
      </b-modal>
  </template>
  
  <script>
  import { editCategory } from '@/eCommerce-sdk/categories.js'
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
      methods: {
          async onSubmit() {
              await editCategory(this.category)
          }
      }
  }
  </script>
  
  <style>
  
  </style>