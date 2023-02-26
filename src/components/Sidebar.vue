<template>
  <sidebar-menu :menu="user.authenticated ? menu : menu2" :relative="relative" />
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
  }
</script>

<style scoped>
</style>