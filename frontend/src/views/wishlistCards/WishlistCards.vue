<template>
    <div class="home-view">

        <div class="category-products__page category-products m-auto">
            <h3 v-if="initialMessage">{{initialMessage}}</h3>
            <div class="products-grid">
                <div v-for="product in allWishlist" :key="product._id">
                    <ProductCard @removeFromWishlist="removeFromWishlist" :isWishlist="true" :product="product" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import ProductCard from '@/components/ProductCard.vue'
import { getWishlists, removeWishlist } from '@/eCommerce-sdk/wishlists.js'

export default {
    components: {
        ProductCard,
        
    },
    data() {
        return {
            wishlistProducts: null,
            initialMessage: null
        }
    },
    computed: {
        allWishlist() {
            return this.wishlistProducts
        }
    },
    mounted() {
        this.fetchWishlist()
    },
    methods: {
        async removeFromWishlist(wishlistId) {
            try {
                await removeWishlist(wishlistId)
                this.fetchWishlist()
            } catch(err) {
                console.log(err)
            }
        },
        async fetchWishlist(){
            try {
                const response = await getWishlists()
                this.wishlistProducts = response.data
                this.wishlistProducts = this.wishlistProducts.filter(product => product.userId === this.$store.state.authenticate.user.data.uid)
                if(!this.wishlistProducts.length) {
                    this.initialMessage = "You do not have any products in your wishlist"
                }
            } catch(err) {
                console.log(err)
            }
        }
    }
}
</script>

<style lang="scss" scoped>

.home-view {
	height: 100%;
}

.category-products{
    height: 100%;
	max-width: 90%;
    display: flex;
    justify-content: center;
    padding: 3% 0 5% 0;
}

.products-grid{
    padding: 0 1%;
    display: flex;
    gap: 2%;
}


.shop-items{
	max-width: 75%;
	margin: 20px auto;
	padding:0px 20px;
}

.container-fluid {
    display: flex;
    gap: 4%;
}

.shop-items .item {
	position: relative;
	max-width: 230px;
	margin: 15px auto;
	padding: 5px;
	text-align: center;
	border-radius: 4px;
	overflow: hidden;
	border:2px solid #eee;
}
.shop-items .item:hover{	
	border:2px solid #32c8de;
}
.shop-items .item img {
	width: 100%;
	max-width: 360px;
	margin: 0 auto;
	border: 1px solid #eee;
	border-radius: 3px;
}
.shop-items .item  .item-dtls h4 {
	margin-top: 13px;
	margin-bottom: 10px;
	text-transform: uppercase;
}
.shop-items .item  .item-dtls .price {
	display: block;
	margin-bottom: 13px;
	font-size: 25px;
}
.shop-items .item  .ecom {
	position: absolute;
	top: 100%;
	left: 0;
	width: 100%;
	padding-bottom:10px;
	padding-top: 10px;
	-webkit-transition: all 0.35s ease-in;
	-moz-transition: all 0.35s ease-in;
	-ms-transition: all 0.35s ease-in;
	-o-transition: all 0.35s ease-in;
	transition: all 0.35s ease-in;
}

.shop-items .item  .ecom  a.btn{
	border:1px solid #fff;
	color:#fff;
	background:transparent;
	-webkit-transition: all 0.35s ease-in;
	-moz-transition: all 0.35s ease-in;
	-ms-transition: all 0.35s ease-in;
	-o-transition: all 0.35s ease-in;
	transition: all 0.35s ease-in;
}
.shop-items .item  .ecom  a.btn:hover{
	background:#fff;
	color:#777;
}    

.category-tab {
	background: #eee;
	display: flex;
	align-items: center;
}

.category-link:hover {
	color: crimson !important;
	transition: 0.2s;
}

.category-link a.router-link-exact-active {
  color: crimson;
}

.search-input {
	width: 50%;
	margin: 3% auto 2% auto;
}

@media only screen and (max-width: 900px) {
    .container-fluid {
        display: flex;
		align-items: center;
        flex-direction: column;
        gap: 2%;
    }

	.search-input {
		width: 70%;
		margin: 5% auto 2% auto;
	}
}
</style>
