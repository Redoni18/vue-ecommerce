<template>
    <div class="item">
        <b-card>
            <div class="d-flex gap-2">
                <b-avatar variant="info" :src="user?.data?.photoURL" class="mr-3" size="3rem"></b-avatar>
                <div class="d-flex flex-column">
                    <small class="fw-bold">{{ review.insertedBy }}</small>
                    <small class="fw-thin">{{ review.insertDate }}</small>
                </div>
            </div>
            <b-card-text class="mt-2 text-wrap">
                {{ review.review }}
            </b-card-text>
        </b-card>
        
      </div>
  </template>
  
<script>
import {mapGetters} from 'vuex'
export default {
    props: {
        review: {
            type: Object,
            required: true
    }
    },
    computed: {
        ...mapGetters({
            user: 'getUser'
        }),
    },

}
</script>