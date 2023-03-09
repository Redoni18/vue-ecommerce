<template>
    <div class="container justify-content-left filters-sidebar">
    <br/>
        <div class="searchbar row justify-content-left">
            <div class="col-12 col-md-11 col-lg-11">
                <form class="card card-sm">
                    <div class="card-body row no-gutters align-items-center" style="height:50px">
                        
                        <div class="col p-0">
                            <input class="form-control form-control-lg form-control-borderless px-2 search-input" type="search" placeholder="Search Products" style="margin-top: -15px;">
                        </div>
                </div>
                </form> 
            </div>
        </div>

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
            brands: null
        }
    },
    watch: {
        '$route.params.id' : function(){
            this.fetchData()
        }
    },
    mounted() {
        this.fetchData()
    },
    computed: {

    },
    methods: {
        async fetchData() {
            this.categoryId = this.$route.params.id
            const response = await getCategory(this.categoryId)
            this.brands = response.data.categoryBrand
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

    .searchbar {
        width: 100%;
    }
}

.searchbar {
    width: 300px;
}


.form-control-borderless {
    border: none;
    outline: none;
}

.form-control-borderless:hover, .form-control-borderless:active, .form-control-borderless:focus {
    border: none;
    outline: none;
    box-shadow: none;
}

.search-input{
    font-size: 18px;
    display: flex;
    align-items: center;
}

</style>