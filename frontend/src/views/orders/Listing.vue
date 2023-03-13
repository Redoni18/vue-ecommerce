<template>
    <div class="books-list">
        <vue-good-table
            styleClass="vgt-table condensed"
            :columns="columns"
            :rows="allOrders"
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
                <span v-if="props.column.field == 'isCompleted'">
                    {{props.row.isCompleted ? 'Completed' : 'Pending'}}
                </span>
                <span v-if="props.column.field == 'moreOptions'" class="more-options__btn text-right">
                    <b-dropdown right no-caret variant="default">
                        <template #button-content>
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                        </template>
                        <b-dropdown-item @click="editOrder(props.row)">Edit</b-dropdown-item>
                        <b-dropdown-item @click="toggleDeleteModal(props.row)">Delete</b-dropdown-item>
                    </b-dropdown>
                </span>
            </template>
        </vue-good-table>
        
        <EditModal v-model="showModal" :showModal="showModal" :order="order" />
        <DeleteModal v-model="showDeleteModal" :itemName="order._id" :itemId="order._id" @deleteItem="deleteOrder"/>
    </div>
  
</template>

<script>
import EditModal from './EditOrder.vue'
import { getOrders, removeOrder } from '@/eCommerce-sdk/orders.js'
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
            ordersList: [],
            order: {},
            columns: [
                {
                    label: 'First Name',
                    field: 'firstName',
                },
                {
                    label: 'Last Name',
                    field: 'lastName',
                },
                {
                    label: 'Product Name',
                    field: 'productName',
                },
                {
                    label: 'Order Price',
                    field: 'orderPrice',
                },
                {
                    label: 'Order Status',
                    field: 'isCompleted',
                },
                {
                    label: '',
                    field: 'moreOptions',
                    width: '20px',
                },
            ],
        }
    },
    mounted() {
        this.fetchOrders()
    },
    computed: {
        allOrders() {
            return this.ordersList
        }
    },
    methods: {
        editOrder(data) {
            this.showModal = true;
            this.order = data
        },

        toggleDeleteModal(data) {
            console.log(data)
            this.showDeleteModal = true;
            this.order = data;
        },

        async deleteOrder(orderId) {
            console.log(orderId)
            try{
                await removeOrder(orderId)
            } catch (err) {
                console.log(err)
            } finally {
                await this.fetchOrders()
            }
        },
        async fetchOrders(){
            const response = await getOrders()
            console.log(response)
            this.ordersList = response.data
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