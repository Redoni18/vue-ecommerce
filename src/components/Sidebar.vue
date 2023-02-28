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