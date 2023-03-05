<template>
    <div class="books-list">
        <vue-good-table
            styleClass="vgt-table condensed"
            :columns="columns"
            :rows="brands"
            theme="polar-bear"
            :sort-options="{
                enabled: false, 
            }"
            :search-options="{
                enabled: true,
                skipDiacritics: true,
                placeholder: 'Search...',
            }"
            :pagination-options="{
                enabled: true,
                mode: 'records',
                perPage: 7,
                position: 'bottom',
                perPageDropdown: [3, 7, 9],
                dropdownAllowAll: false,
                nextLabel: 'Next',
                prevLabel: 'Previous',
                rowsPerPageLabel: 'Rows per page',
            }"
            :line-numbers="true"
        >
            <template v-slot:table-row="props">
                <span v-if="props.column.field == 'imageUrl'" class="image-cell">
                    <img :src="props.row.imageUrl" alt="product-image" class="product-image">
                </span>

                <!-- <span v-if="props.column.field == 'productPrice'">
                    <span>{{props.row.productPrice.toFixed(2)}} &euro;</span>
                </span> -->

                <span v-if="props.column.field == 'moreOptions'" class="more-options__btn text-right">
                    <b-dropdown right no-caret variant="default">
                        <template #button-content>
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                        </template>
                        <b-dropdown-item @click="editProduct(props.row)">Edit</b-dropdown-item>
                        <b-dropdown-item @click="toggleDeleteModal(props.row)">Delete</b-dropdown-item>
                    </b-dropdown>
                </span>
            </template>
        </vue-good-table>
        
        <EditModal v-model="showModal" :showModal="showModal" :brand="brand" />
        <DeleteModal v-model="showDeleteModal" :itemName="brand.brandName" :itemId="brand._id" @deleteItem="deleteBrand"/>
    </div>
  
</template>

<script>
import EditModal from './EditBrand.vue'
import { removeBrand, getBrands } from '@/eCommerce-sdk/brands.js'
import DeleteModal from '../../components/DeleteModal.vue'
export default {
    components: {
        EditModal,
        DeleteModal
    },
    data() {
        return {
            showModal: false,
            showDeleteModal: false,
            brand: {},
            brandsList: [],
            columns: [
                {
                    label: 'Name',
                    field: 'brandName',
                },
                {
                    label: '',
                    field: 'moreOptions',
                     width: '20px',
                },
            ],
        }
    },
    async mounted() {
        const response = await getBrands()
        this.brandsList = response.data
    },
    computed: {
        brands() {
            return this.brandsList
        }
    },
    methods: {
        editProduct(data) {
            this.showModal = true;
            this.brand = data
        },

        toggleDeleteModal(data) {
            console.log(data)
            this.showDeleteModal = true;
            this.brand = data;
        },

        async deleteBrand(productId) {
            console.log(productId)
            try{
                await removeBrand(productId)
            } catch (err) {
                console.log(err)
            } finally {
                const response = await getBrands()
                this.brandsList = response.data
            }
        }

    }
}
</script>

<style lang="scss" scoped>
.books-list {
    width: 900px;
    padding:  3% 0;
    margin: auto;

    .image-cell {
        display: block;
        width: 40px;
        height: 40px;
        margin: auto;
    }

    .product-image{
        width: 100%;
    }

    .more-options__btn{
        .btn-group, .btn{
            background: transparent;
            border: none;
            outline: none;

            :focus {
                border: none;
            }

        }
    }
}

</style>