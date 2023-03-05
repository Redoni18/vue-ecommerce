<template>
  <sidebar-menu :menu="menu" :relative="relative" @item-click="onItemClick" />
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
        menu: [
          {
            header: 'eCommerce',
            hiddenOnCollapse: true
          },
          {
            href: '/',
            title: 'Home',
            icon: 'fa fa-home'
          },
          {
            title: 'Products',
            icon: 'fa-regular fa-folder',
            child: [
              {
                href: '/products',
                title: 'Products',
                icon: "fa-solid fa-list-ul"
              },
              {
                href: '/products/insert',
                title: 'Insert Product',
                icon: "fa-solid fa-plus"
              },
            ]
          },
          {
            title: 'Categories',
            icon: 'fa-solid fa-layer-group',
            child: [
              {
                href: '/categories',
                title: 'Categories',
                icon: "fa-solid fa-list-ul"
              },
              {
                href: '/categories/insert',
                title: 'Insert Category',
                icon: "fa-solid fa-plus"
              }
            ]
          },
          {
            title: 'Coming Soon',
            icon: 'fa-regular fa-clock',
            child: [
              {
                href: '/upcomings',
                title: 'Upcoming Products',
                icon: "fa-solid fa-list-ul"
              },
              {
                href: '/upcomings/insert',
                title: 'New Upcoming Product',
                icon: "fa-solid fa-plus"
              },
            ]
          },
          {
            title: 'Product Brand',
            icon: 'fa-regular fa-copyright',
            child: [
              {
                href: '/brands',
                title: 'Brands',
                icon: "fa-solid fa-list-ul"
              },
              {
                href: '/brands/insert',
                title: 'New Brand',
                icon: "fa-solid fa-plus"
              },
            ]
          },
          {
            href: '/about',
            title: 'About Us',
            icon: 'fa fa-info'
            // child: [
            //   {
            //     href: '/register',
            //     title: 'Sub Link'
            //   }
            // ]
          },
          {
            href: '/login',
            title: 'Logout',
            icon: 'fa-solid fa-right-from-bracket'
          },
        ],
        menu2: [
          {
            header: 'eCommerce',
            hiddenOnCollapse: true
          },
          {
            href: '/register',
            title: 'Register',
            icon: 'fa fa-user-plus'
          },
          {
            href: '/login',
            title:'Sign in',
            icon: 'fa-solid fa-right-to-bracket'
          }
        ],
        relative: {
          type: Boolean,
          default: true
        },
      }
    },
    computed: {
      ...mapGetters({
          user: 'getUser'
      }),
    },
    methods: {
      onItemClick(e,item) {
        if(item.title === "Logout") {
          this.signOut()
        }

      },

      async signOut(){
        try {
          await this.$store.dispatch('logout')
          this.$router.push({ path: "/login" })
        } catch (err) {
          console.log(err)
        }
      }
    }
  }
</script>

<style scoped>
</style>