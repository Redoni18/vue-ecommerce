<template>
<div id="nav">
    <nav class="navbar navbar-expand-lg navbar-light px-5">
        <div class="container-fluid z-3">
            <a class="navbar-brand" href="#"><img src="../assets/logo.png" class="logo-img" alt=""></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" :class="{'d-flex justify-content-between': width > 995}" id="navbarTogglerDemo02">
                    <div class="navbar-nav ml-4">
                        <router-link to="/" class="nav-item nav-link w-50 m-auto">Home</router-link>
                        <router-link to="/about" class="nav-item nav-link w-50 m-auto">About</router-link>
                        <router-link to="/contacts/insert" class="nav-link w-100 m-auto">Contact Us!</router-link>
                    </div>
                    <div v-if="user.authenticated" class="navbar-nav">
                        <router-link to="/profile" class="nav-link w-50 m-auto">Profile</router-link>
                        <router-link to="/login" @click="signOut" class="nav-link w-50 m-auto">Logout</router-link>
                    </div>
                    <div v-else class="navbar-nav">
                        <router-link to="/register" class="nav-link w-100 m-auto">Register</router-link>
                        <router-link to="/login" class="nav-link w-100 m-auto">Sign In</router-link>
                    </div>
                </div>
        </div>
    </nav>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            width: null
        }
    },
    computed: {
        getSize(){
            return this.width
        },
        ...mapGetters({
            user: 'getUser'
        }),
    },
    mounted(){
        this.onResize()
        this.$nextTick(() => {
          window.addEventListener('resize', this.onResize);
        })
    },
    beforeDestroy() { 
      window.removeEventListener('resize', this.onResize); 
    },
    methods: {
        onResize() {
            this.width = window.innerWidth
        },
        async signOut(){
            try {
                await this.$store.dispatch('logout')
                this.$router.push({ path: "/login" })
            } catch (err) {
                console.log(err)
            }
        },
    }

}
</script>

<style lang="scss">

#nav{
background: whitesmoke;
z-index: 1;
}
#nav {
  padding: 20px;
  text-align: center;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: whitesmoke;
  background: crimson;
  border-radius: .5rem;
}

.logo-img {
    width: 40px;
}

</style>