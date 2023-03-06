<template>
    <div class="books-list">
        <vue-good-table
            styleClass="vgt-table condensed"
            :columns="columns"
            :rows="payments"
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
        
        <EditModal v-model="showModal" :showModal="showModal" :paymentMethod="payment" />
        <DeleteModal v-model="showDeleteModal" :itemName="payment.name" :itemId="payment._id" @deleteItem="deletePayment"/>
    </div>
  
</template>

<script>
import EditModal from './EditPayMethod.vue'
import { getPaymethods, removePaymethod} from '@/eCommerce-sdk/payMethod.js'
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
            payment: {},
            paymentsList: [],
            columns: [
                {
                    label: 'Name',
                    field: 'name',
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
        const response = await getPaymethods()
        this.paymentsList = response.data
    },
    computed: {
        payments() {
            return this.paymentsList
        }
    },
    methods: {
        editProduct(data) {
            this.showModal = true;
            this.payment = data
        },

        toggleDeleteModal(data) {
            console.log(data)
            this.showDeleteModal = true;
            this.payment = data;
        },

        async deletePayment(paymentId) {
            console.log(paymentId)
            try{
                await removePaymethod(paymentId)
            } catch (err) {
                console.log(err)
            } finally {
                const response = await getPaymethods()
                this.paymentsList = response.data
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