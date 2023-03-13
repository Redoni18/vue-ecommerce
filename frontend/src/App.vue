<template>
    <Sidebar v-if="user.authenticated && currentUser && (currentUser.isAdmin || currentUser.isDelivery)" />
    <Navbar class="position-absolute top-0 left-0 w-100" v-else/>
    <router-view class="root" :class="{'root2': currentUser && !(currentUser.isAdmin || currentUser.isDelivery) }"/>
    <Footer v-if="user.authenticated && currentUser && !(currentUser.isAdmin || currentUser.isDelivery)"/>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { mapGetters } from 'vuex'
import { getUser } from './eCommerce-sdk/user'
export default {
  components: {
    Sidebar,
    Navbar,
    Footer
  },
  data() {
    return {
      currentUser: null,
      displayProperty: '',
    }
  },
  async mounted() {
    document.documentElement.style.setProperty('--display-property', this.displayProperty);
  },
  computed: {
    ...mapGetters({
        user: 'getUser'
    }),
  },
  watch: {
    '$store.state.authenticate.user.data.uid': async function() {
      if(this.user?.data?.uid) {
        const response = await getUser(this.user.data.uid)
        this.currentUser = response.data
      }

      if(this.user.authenticated && this.currentUser && !(this.currentUser.isAdmin || this.currentUser.isDelivery)) {
        this.displayProperty = 'block'
      } else {
        this.displayProperty = 'flex'
      }

      document.documentElement.style.setProperty('--display-property', this.displayProperty);
    },
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
  height: 100%;
  display: var(--display-property);
}
.root{
  height: 100vh;
  width: 100vw;
}

.root2{
  margin-top: 100px;
  height: 100vh;
}
</style>
