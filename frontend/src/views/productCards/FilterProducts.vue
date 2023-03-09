<template>
    
    <div class="filters-sidebar">
        <h4 class="filter-title">Filter Products</h4>

        <div class="checkbox">
            <label><input type="checkbox" class="icheck"> Application</label>
        </div>
        <div class="checkbox">
            <label><input type="checkbox" class="icheck"> Design</label>
        </div>
        <div class="checkbox">
            <label><input type="checkbox" class="icheck"> Desktop</label>
        </div>
        <div class="checkbox">
            <label><input type="checkbox" class="icheck"> Management</label>
        </div>
        <div class="checkbox">
            <label><input type="checkbox" class="icheck"> Mobile</label>
        </div>
    </div>
        
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped >

.filters-sidebar {
    width: 400px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 25px 0px;
    gap: 2%;

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
}

</style>