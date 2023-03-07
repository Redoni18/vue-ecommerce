<template>
 <div id="nav">
    <nav class="container navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#"><img src="../assets/logo.png" class="logo-img" alt=""></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" :class="{'d-flex justify-content-between': width > 995}" id="navbarSupportedContent">
                <div class="navbar-nav ml-2">
                    <router-link to="/" class="nav-item nav-link">Home</router-link>
                    <router-link to="/About" class="nav-item nav-link">About</router-link>
                    <router-link to="/Careers" class="nav-link">Careers</router-link>
                    <router-link to="/Contact" class="nav-link">Contact</router-link>
                </div>
                <div class="navbar-nav">
                    <router-link to="/Careers" class="nav-link">Profile</router-link>
                    <router-link to="/Contact" class="nav-link">Logout</router-link>
                </div>
                <!-- <div class="d-flex justify-content-between w-100 items-center">
                    <form class="w-75 d-flex justify-content-start">
                        <input class="form-control w-50 me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div> -->
            </div>
    </nav>
</div>
</template>

<script>
export default {
    data() {
        return {
            width: null
        }
    },
    computed: {
        getSize(){
            return this.width
        }
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
        }
    }

}
</script>

<style lang="scss">

#nav{
background: whitesmoke;
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