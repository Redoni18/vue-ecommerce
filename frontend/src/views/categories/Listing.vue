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
                        <b-dropdown-item @click="editCategory(props.row)">Edit</b-dropdown-item>
                        <b-dropdown-item @click="toggleDeleteModal(props.row)">Delete</b-dropdown-item>
                    </b-dropdown>
                </span>
            </template>
        </vue-good-table>
        
        <EditModal v-model="showModal" :showModal="showModal" :category="category" />
        <DeleteModal v-model="showDeleteModal" :itemName="category.categoryName" :itemId="category._id" @deleteItem="deleteCategory"/>
    </div>
  
</template>

<script>
import EditModal from './EditCategory.vue'
import { removeCategory } from '@/eCommerce-sdk/categories.js'
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
            category: {},
            columns: [
                {
                    label: 'Name',
                    field: 'categoryName',
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
        await this.$store.dispatch('fetchCategories')
        
    },
    computed: {
        categories() {
            return this.$store.state.categories.categories
        }
    },
    methods: {
        editCategory(data) {
            this.showModal = true;
            this.category = data
        },

        toggleDeleteModal(data) {
            console.log(data)
            this.showDeleteModal = true;
            this.category = data;
        },

        async deleteCategory(categoryId) {
            try{
                await removeCategory(categoryId)
            } catch (err) {
                console.log(err)
            } finally {
                await this.$store.dispatch('fetchCategories')
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