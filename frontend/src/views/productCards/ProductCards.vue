<template>
<div class="home-view" :style="getStyleObject()">

	<CategoryNav :categories="categories" />

	<div class="search-input">
		<input v-model="searchTerm" class="form-control form-control-lg form-control-borderless px-2" type="search" placeholder="Search...">
	</div>

    <div class="category-products__page category-products m-auto">
        <div class="products-grid">
            <div v-for="product in allProducts" :key="product._id">
              <router-link :to="{name: 'productDetails', params: {id: product._id}}" class="text-decoration-none"><ProductCard :product="product" /></router-link>
            </div>

        </div>
		<h3 class="recommended-products__title text-align-left">Recommended For You</h3>

		<div class="products-grid">
            <div v-for="product in recommendedProducts" :key="product._id">
              <router-link :to="{name: 'productDetails', params: {id: product._id}}" class="text-decoration-none"><ProductCard :product="product" /></router-link>
            </div>

        </div>
    </div>
</div>
</template>

<script>
import FilterProducts from './FilterProducts.vue'
import ProductCard from '@/components/ProductCard.vue'
import { filterProducts, getProductsBasedOnCookies } from '@/eCommerce-sdk/products.js'
import CategoryNav from '../../components/CategoryNav.vue'
export default {
    components: {
        ProductCard,
        FilterProducts,
		CategoryNav
    },
	data() {
		return {
			searchTerm: null,
			allProducts: null,
			timeoutId: null,
			userLocalStorage: localStorage.getItem('user'),
			recommendedProducts: []
		}
	},	
    async mounted() {
        await this.$store.dispatch('fetchProducts') 
		await this.$store.dispatch('fetchCategories')
		const shuffledList = this.$store.state.products.products.sort(() => 0.5 - Math.random());
		this.allProducts = shuffledList.slice(0, 5);

		this.fetchRecommendedProducts()
    },
    computed: {

		categories() {
            return this.$store.state.categories.categories
        }
    },
	watch: {
        'searchTerm': async function() {
            if(this.timeoutId){
                clearTimeout(this.timeoutId)
            }
            this.timeoutId = setTimeout(() => {
                this.searchProducts()
                this.timeoutId = null
            }, 500)
        }
    },
	methods: {
		async searchProducts() {
            const response = await filterProducts(this.searchTerm)
            this.allProducts = response.data
        },
		getStyleObject() {
			if (!this.userLocalStorage) {
				return {
					paddingTop: '106px'
				}
			} else {
				return {
					paddingTop: '0'
				}
			}
		},
		async fetchRecommendedProducts() {
			const categoriesCookie = document.cookie
			.split('; ')
			.find(row => row.startsWith('categories='))
			.split('=')[1];

			const response = await getProductsBasedOnCookies(categoriesCookie)
			this.recommendedProducts = response.data.sort(() => 0.5 - Math.random());
		}
	}

}
</script>

<style lang="scss" scoped>

.home-view {
	height: 90%;
}

.category-products{
	width: 90%;
}

.products-grid{
    padding: 0 1%;
    display: flex;
    flex-wrap: wrap;
	justify-content: flex-start;
	gap: 1%;
	margin-left: 5%;
	margin-bottom: 5%;
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

@media only screen and (max-width: 820px) {
    .products-grid{
		margin-left: 15%;
	}
}

@media only screen and (max-width: 515px) {
    .products-grid{
		margin-left: 22%;
	}
}
</style>
