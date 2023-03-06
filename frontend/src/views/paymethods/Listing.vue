<template>
    <div class="books-list">
        <vue-good-table
            styleClass="vgt-table condensed"
            :columns="columns"
            :rows="categories"
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
                <span v-if="props.column.field == 'moreOptions'" class="more-options__btn text-right">
                    <b-dropdown right no-caret variant="default">
                        <template #button-content>
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                        </template>
                        <b-dropdown-item @click="editPayMethod(props.row)">Edit</b-dropdown-item>
                        <b-dropdown-item @click="toggleDeleteModal(props.row)">Delete</b-dropdown-item>
                    </b-dropdown>
                </span>
            </template>
        </vue-good-table>
        
        <EditModal v-model="showModal" :showModal="showModal" :paymethod="paymethod" />
        <DeleteModal v-model="showDeleteModal" :itemName="paymethod.paymethodname" :itemId="paymethod._id" @deleteItem="deletePayMethod"/>
    </div>
  
</template>

<script>
import EditModal from './EditPayMethod.vue'
import { removePayMethod } from '@/eCommerce-sdk/payMethod.js'
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
            columns: [
                {
                    label: 'Name',
                    field: 'paymethodName',
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
        await this.$store.dispatch('fetchpaymethods')
        
    },
    computed: {
        paymethods() {
            return this.$store.state.paymethods.paymethods
        }
    },
    methods: {
        editPaymethod(data) {
            this.showModal = true;
            this.paymethods = data
        },

        toggleDeleteModal(data) {
            console.log(data)
            this.showDeleteModal = true;
            this.paymethods = data;
        },

        async deletePaymethod(paymethodId) {
            try{
                await removeCategory(paymethodId)
            } catch (err) {
                console.log(err)
            } finally {
                await this.$store.dispatch('fetchpaymethods')
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