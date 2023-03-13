<template>
    <div class="reviews" v-if="product">
        <div>
            <h2>Reviews for {{ product.productName }}</h2>
            <a><router-link :to="{name: 'productDetails', params: {id: product._id}}" class="text-decoration-none">Go back to product details</router-link></a>
        </div>
       
        <div class="row flex-column justify-content-center">
            <div class="item col-md-6 col-sm-12 m-auto" v-for="review in allReviews"  :key="review._id" >
                <ReviewCard  :review="review" />
            </div>
        </div>
    </div>
</template>

<script>
import {getProduct} from '@/eCommerce-sdk/products'
import ReviewCard from '@/components/ReviewCard.vue'
import {getReviewsByProductId } from '@/eCommerce-sdk/reviews.js'

export default {
    name: 'Reviews',
    components: {
        ReviewCard,
    },
    data() {
        return{
            allReviews: [],
            product : null,
            productId : null,
        }
    },
    async mounted() {
        this.productId = this.$route.params.id
        const response = await getProduct(this.productId)
        this.product = response.data

		const reviewsResponse = await getReviewsByProductId(this.productId)
        this.allReviews = reviewsResponse.data

    },
    methods: {

    }
}
</script>

<style scoped>

.reviews {
    padding: 50px 0;
    height: 100%;
}

.item{
    padding: 5px;
}
</style>