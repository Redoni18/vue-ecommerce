<template>
    <div class="container justify-content-left filters-sidebar">
    <br/>
        <div class="searchbar row justify-content-left">
            <div class="col-12 col-md-11 col-lg-11">
                <form class="card card-sm">
                    <div class="card-body row no-gutters align-items-center" style="height:50px">
                        <div class="col-auto" margin-top="-10px">
                            <i class="fas fa-search h4 text-body"></i>
                        </div>
                        
                        <div class="col">
                            <input class="form-control form-control-lg form-control-borderless" type="search" placeholder="Search Products" style="margin-top: -15px;">
                        </div>
                </div>
                </form> 
            </div>
        </div>

    <div class="filters-sidebar filters-sidebar__list">
        <h4 class="filter-title">Filter Products</h4>

        <div class="checkbox">
            <label><input type="checkbox" class="icheck"> Application</label>
        </div>
        <div class="checkbox">
            <label><input type="checkbox" class="icheck"> Design</label>
        </div>
        <div class="checkbox">
            <label><input type="checkbox" class="icheck"> Desktop</label>zz
        </div>
        <div class="checkbox">
            <label><input type="checkbox" class="icheck"> Management</label>
        </div>
        <div class="checkbox">
            <label><input type="checkbox" class="icheck"> Mobile</label>
        </div>
    </div>
</div>
</template>

<script>
export default {

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
        width: 100%;
    }
}



@media only screen and (max-width: 900px) {
    .filters-sidebar {
        width: 100%;
        margin: auto;
    }

    .searchbar {
        width: 100%;
        margin: auto;
    }
}

.searchbar {
    width: 100%;
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

</style>