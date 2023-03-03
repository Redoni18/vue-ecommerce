<template>
    <b-modal ok-title="Delete" ok-variant="danger" @ok="onDelete">
         <template v-slot:header>
            <h4>Delete Item</h4>
        </template>
        <p class="text-danger">Are you sure you want to delete {{itemName}} </p>
    </b-modal>
</template>

<script>
export default {
    props: {
        itemName : {
            type: String,
            required: true,
        },
        itemId : {
            type: Number,
            required: true,
        }
    },
    methods: {
        onDelete() {
            console.log(this.itemId)
            this.$emit('deleteItem', this.itemId)
        }
    }
}
</script>

<style>

</style>