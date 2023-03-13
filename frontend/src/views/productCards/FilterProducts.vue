<template>
    <div class="container justify-content-left filters-sidebar">

        <div class="filters-sidebar filters-sidebar__list">
            <h4 class="filter-title">Filter Products</h4>

            <div v-for="brand in brands" :key="brand._id" class="checkbox">
                <label><input type="radio" :value="brand._id" v-model="selectedBrand"> {{brand.brandName}}</label>
            </div>

            <button class="btn btn-theme w-auto mt-2" @click="clearFilters" style="background-color: crimson;color:white">Clear Filters</button>
        </div>
    </div>
</template>

<script>
import {getCategory} from '@/eCommerce-sdk/categories.js'
export default {
    data() {
        return {
            brands: null,
            selectedBrand: null,
        }
    },
    watch: {
        '$route.params.id' : function(){
            this.fetchData()
        },
        async selectedBrand() {
            this.$emit('fetchFilteredProducts', this.selectedBrand)
        }
    },
    mounted() {
        this.fetchData()
    },
    methods: {
        async fetchData() {
            this.categoryId = this.$route.params.id
            const response = await getCategory(this.categoryId)
            this.brands = response.data.categoryBrand
            this.selectedBrand = null
        },
        clearFilters() {
            this.selectedBrand = null
            console.log(this.selectedBrand)
            this.$emit('fetchData')
        }
    }

}
</script>

<style lang="scss" scoped >

.filters-sidebar {
    width: 300px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .filters-sidebar__list {
        padding: 25px 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }

    .filter-title{
        text-align: left;
        border-bottom: 1px solid #d4d0d0;
        padding-bottom: 10px;
        width: 250px;
    }
}



@media only screen and (max-width: 900px) {
    .filters-sidebar {
        width: 100%;
        margin: auto;
    }
}

</style>