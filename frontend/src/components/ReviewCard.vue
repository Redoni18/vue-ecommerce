<template>
    <div class="item">
        <b-card>
            <b-card-title>{{ review.insertedBy }}</b-card-title>
            <b-card-text>
                {{ review.review }}
            </b-card-text>
        </b-card>
        
      </div>
  </template>
  
  <script>
  export default {
      props: {
          review: {
              type: Object,
              required: true
          }
      }
  
  }
  </script>