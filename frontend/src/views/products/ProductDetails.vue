<template>
<div class="product-details">
    <div class="container mt-5" v-if="product">
        <!-- product -->
        <div class="product-content product-wrap clearfix product-deatil">
            <div class="row gap-3 align-items-center">
                <div class="col-md-5 col-sm-12 col-xs-12">
                    <div class="product-image">
                        <img :src="!product.imageUrl.includes('http') ? 'https://www.bootdey.com/image/200x200/5F9EA0/000000' : product.imageUrl" class="image-item" alt="">
                    </div>
                </div>

                <div class="col-md-6 col-md-offset-1 col-sm-12 col-xs-12">
                    <h2 class="name mt-5">
                        {{ product.productName}}
                    </h2>
                    <p>{{ product.productBrand?.brandName ?  "Product by " + product.productBrand.brandName : "" }}</p>
                    <hr />
                    <h3 class="price-container">
                        {{ product.productPrice}}&euro;
                    </h3>
                    <div class="certified">
                        <ul>
                            <li>
                                <a>Delivery time<span>7 Working Days</span></a>
                            </li>
                            <li>
                                <a>Certified<span>Quality Assured</span></a>
                            </li>
                            <li>
                                <a>{{ product.stock }}<span>In Stock</span></a>
                            </li>
                        </ul>
                    </div>
                    <hr />
                    <div class="description">
                            <div class="description-title" style="display: flex;">
                                <h6>Description</h6>
                            </div>
                                <br />
                                
                                <p style="text-align: left;">
                                    {{ product.productDescription }}
                                </p>
                    </div>
                    <hr />
                    <div class="row" style="justify-content: center;">
                        <div class="col-sm-12 col-md-6 col-lg-6">
                            <b-button type="button" :disabled="!product.stock" @click="createOrder" class="btn btn-success btn-lg">Buy Now ({{ product.productPrice}}&euro;) </b-button>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-6">
                            <div class="btn-group pull-right">
                                <button v-if="!product.stock" @click="addToWishlist" class="btn btn-white btn-default"><i class="fa fa-star"></i> Add to wishlist</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="review-container">
                    <div class="review-form__container">
                        <h3 style="color:crimson; text-align: left;">Leave a review!</h3>
                            <form  @submit="onSubmit">
                                
                                <div class="row">
                                    <!-- <div class="col-sm-12 mb-3">
                                        <div class="form-group" style="display: flex;">
                                            <label class="required-field" for="firstName">First Name</label>
                                            <input v-model="review.insertedBy" type="text" class="form-control"  placeholder="Name" style="width:50%" required>
                                        </div>
                                    </div> -->

                                    <div class="col-sm-12 mb-3">
                                        <div class="form-group">
                                            <!-- <label class="required-field" for="message"></label> -->
                                            <textarea class="form-control" v-model="review.review"  rows="4" placeholder="My review..." required></textarea>
                                        </div>
                                    </div>

                                    <div class="d-grid gap-2">
                                        <button type="submit" class="btn btn-theme" style="background-color: crimson;color:white; width: 100px;">Submit</button>
                                        </div>

                                </div>
                            </form>
                    </div>
                        
                    <div class="category-products__page category-products m-auto">
                        <h2>Reviews</h2>
                        <div class="products-grid" >
                            <div v-for="review in allReviews.slice(0,3)"  :key="review._id" >
                                <ReviewCard  :review="review" />
                            </div>
                            <br>
                            <a style="float: right"><router-link :to="{name: 'reviews', params: {id: product._id}}" class="text-decoration-none">... show more</router-link></a>
                        </div>
                    </div>
                    
                </div>
            </div>    
        </div>
        <!-- end product -->
        <OrderProduct v-model="showModal" :showModal="showModal" :productId="product._id" :productName="product.productName" :productPrice="product.productPrice" />
    </div>
</div>
</template>

<script>
import {insertWishlist} from '@/eCommerce-sdk/wishlists'
import {getProduct, editProduct, stripeCheckoutSession} from '@/eCommerce-sdk/products'
import { insertReview, getReviewsByProductId } from '@/eCommerce-sdk/reviews.js'
import ReviewCard from '@/components/ReviewCard.vue'
import OrderProduct from './OrderProduct.vue'
export default {
    name: 'ProductDetails',
    components: {
        ReviewCard,
        OrderProduct
    },
    data() {
        return{
            allReviews: [],
            product : null,
            productId : null,
            stripe: null,
            review: {
                productId: null,
                review: '',
                insertedBy: this.$store.state.authenticate.user.data.displayName,
                insertDate: '',
            },
            showModal: false,
        }
    },
    async mounted() {
        this.productId = this.$route.params.id
        const response = await getProduct(this.productId)
        this.product = response.data
        this.stripe = Stripe(process.env.VUE_APP_STRIPE_KEY);

		    await this.getReviews()
    },
    methods: {
      async addToWishlist() {
            const product = {
                productName: this.product.productName,
                productBrand: this.product.productBrand.brandName,
                productDescription: this.product.productDescription,
                imageUrl: this.product.imageUrl,
                userId: this.$store.state.authenticate.user.data.uid
            }
            await insertWishlist(product);
           console.log(product);
        },
        async redirectToStripe() {
            const response = await stripeCheckoutSession(this.product._id)
            const session = response.data.sessionId

            const { error } = await this.stripe.redirectToCheckout({ sessionId: session });

            if (error) {
                console.error(error);
            }
        },
        async updateProductQuantity() {
            this.product.stock -= 1
            await editProduct(this.product)
        },
        async onSubmit() {
            this.review.productId = this.productId
            const today = new Date()
            this.review.insertDate = today.toLocaleString();
            try {
                await insertReview(this.review)
                this.resetForm()
            } catch (err) {
                console.log(err)
            } finally {
                await this.getReviews()
            }
        },

        async getReviews(){
            const reviewsResponse = await getReviewsByProductId(this.productId)
            this.allReviews = reviewsResponse.data
        },

        resetForm() {
            this.review.review = ""
        }
        createOrder() {
            this.showModal = true
        }
    }
}
</script>

<style scoped>
.product-details{
    padding-top: 1%;
    height: 100%;
}
.product-content {
    border: 1px solid #dfe5e9;
    margin-bottom: 20px;
    margin-top: 12px;
    background: #fff
}

.product-content .carousel-control.left {
    margin-left: 0
}

.product-content .product-image {
    background-color: #fff;
    display: block;
    min-height: 238px;
    overflow: hidden;
    position: relative
}
.image-item {
    max-width: 100%;
}

.product-content .product-deatil {
    border-bottom: 1px solid #dfe5e9;
    padding-bottom: 17px;
    padding-left: 16px;
    padding-top: 16px;
    position: relative;
    background: #fff
}

.product-content .product-deatil h5 a {
    color: #2f383d;
    font-size: 15px;
    line-height: 19px;
    text-decoration: none;
    padding-left: 0;
    margin-left: 0
}

.product-content .product-deatil h5 a span {
    color: #9aa7af;
    display: block;
    font-size: 13px
}

.product-content .product-deatil span.tag1 {
    border-radius: 50%;
    color: #fff;
    font-size: 15px;
    height: 50px;
    padding: 13px 0;
    position: absolute;
    right: 10px;
    text-align: center;
    top: 10px;
    width: 50px
}

.product-content .product-deatil span.sale {
    background-color: #21c2f8
}

.product-content .product-deatil span.discount {
    background-color: #71e134
}

.product-content .product-deatil span.hot {
    background-color: #fa9442
}

.product-content .description {
    font-size: 12.5px;
    line-height: 20px;
    padding: 10px 14px 16px 19px;
    background: #fff;
    display: flex;
    flex-direction: column;
}

.product-content .product-info {
    padding: 11px 19px 10px 20px
}

.product-content .product-info a.add-to-cart {
    color: #2f383d;
    font-size: 13px;
    padding-left: 16px
}

.product-content name.a {
    padding: 5px 10px;
    margin-left: 16px
}


.product-block .product-deatil p.price-container span,
.product-content .product-deatil p.price-container span,
.product-entry .product-deatil p.price-container span,
.shipping table tbody tr td p.price-container span,
.shopping-items table tbody tr td p.price-container span {
    color: #21c2f8;
    font-family: Lato, sans-serif;
    font-size: 24px;
    line-height: 20px
}



.product-wrap .product-image span.tag2 {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    padding: 10px 0;
    color: #fff;
    font-size: 11px;
    text-align: center
}

.product-wrap .product-image span.sale {
    background-color: #57889c
}

.product-wrap .product-image span.hot {
    background-color: #a90329
}


.description-tabs {
    padding: 30px 0 5px!important
}

.description-tabs .tab-content {
    padding: 10px 0
}

.product-deatil {
    padding: 30px 30px 50px
}

.product-deatil hr+.description-tabs {
    padding: 0 0 5px!important
}

.product-deatil .carousel-control.left,
.product-deatil .carousel-control.right {
    background: none!important
}

.product-deatil .glyphicon {
    color: #3276b1
}

.product-deatil .product-image {
    border-right: none!important
}

.product-deatil .name {
    margin-top: 0;
    margin-bottom: 0
}

.product-deatil .name small {
    display: block
}

.product-deatil .name a {
    margin-left: 0
}

.product-deatil .price-container {
    font-size: 24px;
    margin: 0;
    font-weight: 300
}

.product-deatil .price-container small {
    font-size: 12px
}

.product-deatil .fa-2x {
    font-size: 16px!important
}

.product-deatil .fa-2x>h5 {
    font-size: 12px;
    margin: 0
}

.product-deatil .fa-2x+a,
.product-deatil .fa-2x+a+a {
    font-size: 13px
}

.product-deatil .certified {
    margin-top: 10px
}

.product-deatil .certified ul {
    display: flex;
    justify-content: center;
    padding-left: 0
}

.product-deatil .certified ul li:not(first-child) {
    margin-left: -3px
}

.product-deatil .certified ul li {
    display: inline-block;
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    padding: 13px 19px
}

.product-deatil .certified ul li:first-child {
    border-right: none
}

.product-deatil .certified ul li a {
    text-align: left;
    font-size: 12px;
    color: #6d7a83;
    line-height: 16px;
    text-decoration: none
}

.product-deatil .certified ul li a span {
    display: block;
    color: #21c2f8;
    font-size: 13px;
    font-weight: 700;
    text-align: center
}

.product-deatil .message-text {
    width: calc(100% - 70px)
}

@media only screen and (min-width:1024px) {
    .product-content div[class*=col-md-4] {
        padding-right: 0
    }
    .product-content div[class*=col-md-8] {
        padding: 0 13px 0 0
    }
    .product-wrap div[class*=col-md-5] {
        padding-right: 0
    }
    .product-wrap div[class*=col-md-7] {
        padding: 0 13px 0 0
    }
    .product-content .product-image {
        border-right: 1px solid #dfe5e9
    }
    .product-content .product-info {
        position: relative
    }
}
.review-container{
    width: 1150px;
    padding: 2%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}


.review-form__container {
    width: 55%;
}

.products-grid {    
    width: 400px;
    text-align: -webkit-left;
    /* display: flex;
    flex-direction: column;
    align-items: flex-start; */
}


@media only screen and (max-width: 1000px) {
    .review-container {
        width: 100%;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>