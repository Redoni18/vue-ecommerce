<template>
    <div class="container justify-content-left filters-sidebar">

        <div class="filters-sidebar filters-sidebar__list">
            <h4 class="filter-title">Filter Products</h4>

            <div v-for="brand in brands" :key="brand._id" class="checkbox">
                <label><input type="checkbox" class="icheck"> {{brand.brandName}}</label>
            </div>
        </div>
    </div>
</template>

<script>
import {getCategory} from '@/eCommerce-sdk/categories.js'
export default {
    data() {
        return {
            brands: null,
        }
    },
    watch: {
        '$route.params.id' : function(){
            this.fetchData()
        },
    },
    mounted() {
        this.fetchData()
    },
    methods: {
        async fetchData() {
            this.categoryId = this.$route.params.id
            const response = await getCategory(this.categoryId)
            this.brands = response.data.categoryBrand
        },
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