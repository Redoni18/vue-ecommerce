<template>
<div class="home-view">
	<ul class="nav justify-content-center category-tab">
		<li v-for="category in categories" :key="category._id" class="nav-item py-2">
			<router-link :to="{name: 'categoryProducts', params: {id: category._id}}" class="nav-link text-dark category-link">{{category.categoryName}}</router-link>
		</li>
	</ul>
    <div class="shop-items">
      <div class="container-fluid">    
        <!-- <FilterProducts /> -->
        <div class="row">
          <div v-for="product in products" :key="product._id" class="col-md-3 col-sm-6">
            <ProductCard :product="product"/>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import FilterProducts from './FilterProducts.vue'
import ProductCard from '@/components/ProductCard.vue'
export default {
    components: {
        ProductCard,
        FilterProducts
    },
    async mounted() {
        await this.$store.dispatch('fetchProducts') 
		await this.$store.dispatch('fetchCategories')
    },
    computed: {
        products() {
            return this.$store.state.products.products
        },

		categories() {
            return this.$store.state.categories.categories
        }
    },

}
</script>

<style lang="scss" scoped>

.home-view {
	height: 100%;
}

.shop-items{
	max-width: 90%;
	margin: 20px auto;
	padding:0px 20px;
}

.container-fluid {
    display: flex;
    gap: 4%;
}

@media only screen and (max-width: 900px) {
    .container-fluid {
        display: flex;
		align-items: center;
        flex-direction: column;
        gap: 2%;
    }
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
</style>
