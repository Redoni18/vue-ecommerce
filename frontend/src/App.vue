<template>
    <Sidebar v-if="user.authenticated && currentUser && (currentUser.isAdmin || currentUser.isDelivery)" />
    <Navbar v-else-if="user.authenticated" />
    <router-view class="root"/>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'
import { mapGetters } from 'vuex'
import { getUser } from './eCommerce-sdk/user'
export default {
  components: {
    Sidebar,
    Navbar
  },
  computed: {
    ...mapGetters({
        user: 'getUser'
    }),
  },
  data() {
    return {
      currentUser: null
    }
  },
  watch: {
    '$store.state.authenticate.user.data.user.uid': async function() {
      if(this.user.data.user.uid) {
        const response = await getUser(this.user.data.user.uid)
        this.currentUser = response.data
      }
    }
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'Ubuntu';
  src: url('./assets/Ubuntu-Regular.ttf');
}
#app {
  font-family: Ubuntu, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  background: #fafafa;
  height: 100vh;
  display: flex;
}
.root{
  height: 100vh;
  width: calc(100vw + 290px);
}
</style>
