<template>
    <div class="books-list">
        <vue-good-table
            styleClass="vgt-table condensed"
            :columns="columns"
            :rows="wishlists"
            theme="polar-bear"
            :sort-options="{
                enabled: false, 
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
                        
                        <b-dropdown-item @click="toggleDeleteModal(props.row)">Delete</b-dropdown-item>
                    </b-dropdown>
                </span>
            </template>
        </vue-good-table>
        
        <EditModal v-model="showModal" :showModal="showModal" :wishlist="wishlist" />
        <DeleteModal v-model="showDeleteModal" :itemName="wishlist.productName" :itemId="wishlist._id" @deleteItem="deleteWishlist"/>
    </div>
  
</template>

<script>

import { getWishlists, removeWishlist} from '@/eCommerce-sdk/wishlists.js'
import DeleteModal from '../../components/DeleteModal.vue'
export default {
    components: {
       
        DeleteModal
    },
    data() {
        return {
            showModal: false,
            showDeleteModal: false,
            wishlist: {},
            wishlistsList: [],
            columns: [
                {
                    label: 'Product Name',
                    field: 'productName',
                },
                {
                    label: 'Product Brand',
                    field: 'productBrand',
                },
                {
                    label: 'Product Description',
                    field: 'productDescription',
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
        const response = await getWishlists()
        this.wishlistsList = response.data
    },
    computed: {
        wishlists() {
            return this.wishlistsList
        }
    },
    methods: {
       
        toggleDeleteModal(data) {
            console.log(data)
            this.showDeleteModal = true;
            this.wishlist = data;
        },

        async deleteWishlist(wishlistId) {
            console.log(wishlistId)
            try{
                await removeWishlist(wishlistId)
            } catch (err) {
                console.log(err)
            } finally {
                const response = await getWishlists()
                this.wishlistsList = response.data
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