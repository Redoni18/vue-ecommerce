<template>
<div class="category-products__page">
	<ul class="nav justify-content-center category-tab">
		<li v-for="category in categories" :key="category._id" class="nav-item py-2">
			<router-link :to="{name: 'categoryProducts', params: {id: category._id}}" class="nav-link text-dark category-link">{{category.categoryName}}</router-link>
		</li>
	</ul>

    <div class="category-products__page category-products">
        <div class="products-filter">
            <div class="search-input">
                <input v-model="searchTerm" class="form-control form-control-lg form-control-borderless px-2" type="search" placeholder="Search...">
            </div>
            <FilterProducts />
        </div>
        <div class="products-grid">
            <div v-for="product in categoryProducts" :key="product._id">
                <ProductCard :product="product"/>
            </div>
        </div>
    </div>
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
            categoryId: null,
            searchTerm: null,
            timeoutId: null,
        }
    },
    watch: {
        '$route.params.id' : function(){
            this.fetchData()
        },
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
    async mounted() {
        this.categoryId = this.$route.params.id
        this.fetchData()

    },
    computed: {
		categories() {
            return this.$store.state.categories.categories
        },
    },
    methods: {
        async fetchData() {
            this.categoryId = this.$route.params.id
            await this.$store.dispatch('fetchProducts') 
            await this.$store.dispatch('fetchCategories')
            this.categoryProducts = this.$store.state.products.products.filter(product => product.productCategory[0]._id === this.categoryId)
        },
        async searchProducts() {
            this.categoryProducts = this.$store.state.products.products.filter(product => product.productCategory[0]._id === this.categoryId)
            this.categoryProducts = this.categoryProducts.filter(product => product.productName.includes(this.searchTerm))
            console.log(this.categoryProducts)
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

.search-input {
	width: 90%;
    margin-top: 5%;
}
</style>