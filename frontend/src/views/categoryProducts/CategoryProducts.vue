<template>
<div class="category-products__page">
	<ul class="nav justify-content-center category-tab">
		<li v-for="category in categories" :key="category._id" class="nav-item py-2">
			<router-link :to="{name: 'categoryProducts', params: {id: category._id}}" class="nav-link text-dark category-link">{{category.categoryName}}</router-link>
		</li>
	</ul>

    <div class="category-products__page category-products">
        <div class="products-filter">
            <FilterProducts />
        </div>
        <div class="products-grid">
            <div v-for="product in productsByCategory" :key="product._id">
                <ProductCard :product="product"/>
            </div>
        </div>
    </div>

    <!-- <div class="shop-items">
      <div class="container-fluid">    
        <FilterProducts />
        <div class="row">
          <div v-for="product in productsByCategory" :key="product._id" class="col-md-4 col-sm-6">
            <ProductCard :product="product"/>
          </div>
        </div>
      </div>
    </div> -->
</div>
</template>

<script>
import FilterProducts from '../productCards/FilterProducts.vue'
import ProductCard from '@/components/ProductCard.vue'
export default {
    components: {
        ProductCard,
        FilterProducts
    },
    data() {
        return {
            categoryProducts: null,
            categoryId: null
        }
    },
    watch: {
        '$route.params.id' : function(){
            this.fetchData()
        }
    },
    async mounted() {
        await this.$store.dispatch('fetchProducts') 
		await this.$store.dispatch('fetchCategories')
        this.categoryId = this.$route.params.id
    },
    computed: {
        products() {
            return this.$store.state.products.products
        },

		categories() {
            return this.$store.state.categories.categories
        },

        productsByCategory() {
            this.categoryProducts = this.products.filter(product => product.productCategory[0]._id === this.categoryId)
            return this.categoryProducts
        }
    },
    methods: {
        async fetchData() {
            await this.$store.dispatch('fetchProducts') 
            await this.$store.dispatch('fetchCategories')
            this.categoryId = this.$route.params.id
        }
    }
}
</script>

<style lang="scss" scoped>

.category-products__page{
    height: 100%;
}

.category-products{
	max-width: 90%;
	margin: 20px auto;
	padding:0px 20px;
	height: 100%;
    display: flex;
    justify-content: space-between;
    padding: 2%;
}

.products-grid{
    width: 80%;
    padding: 0 1%;
    display: flex;
    flex-wrap: wrap;
    gap: 1%;
}

@media only screen and (max-width: 900px) {
    .category-products {
        display: flex;
		align-items: center;
        flex-direction: column;
        gap: 2%;
    }

    .products-grid{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 1%;
    }
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