<template>
    <ul class="nav justify-content-center category-tab">
		<li v-for="category in categories" :key="category._id" class="nav-item py-2">
			<router-link @click="addCategory(category._id)" :to="{name: 'categoryProducts', params: {id: category._id}}" class="nav-link text-dark category-link">{{category.categoryName}}</router-link>
		</li>
	</ul>
</template>

<script>

export default {
    props: {
        categories: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            selectedCategories: []
        }
    },
    methods: {
        addCategory(category) {
            // Add the clicked category to the selected categories array
            if (!this.selectedCategories.includes(category)) {
                this.selectedCategories.push(category);
            }

            this.setCategoriesCookie()
        },
        setCategoriesCookie() {
        // Convert the selected categories array to a string separated by commas
            const categoriesString = this.selectedCategories.join(',');
            console.log(categoriesString)

            // Set the categories string as a cookie with a 7-day expiry
            document.cookie = `categories=${categoriesString}; expires=${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)}; path=/`;
        }
    }
}
</script>


<style scoped>
.category-tab {
	background: #eee;
	display: flex;
	align-items: center;
}

.category-link:hover {
	color: crimson !important;
	transition: 0.2s;
}

.category-link a.router-link-exact-active {
  color: crimson;
}
</style>