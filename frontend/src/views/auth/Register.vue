<template>
  <div id="main-wrapper" class="container">
    <div class="row justify-content-center">
        <div class="col-xl-10">
            <div class="card border-0">
                <div class="card-body p-0">
                    <div class="row no-gutters">
                        <div class="col-lg-6">
                            <div class="p-5">
                                <h4 class="h3 mb-30" style="color:crimson">Register</h4>
                                <br>
                                <form @submit="registerUser">
                                    <div class="form-group">
                                        <label for="yourName">Your name</label>
                                        <input type="text" class="form-control" id="yourName" v-model="fullname" required/>
                                    </div>
                                    <br>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" v-model="email" required/>
                                    </div>
                                    <br>
                                    <div class="form-group mb-5">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" v-model="password" required/>
                                    </div>
                                    <!-- <button type="submit" class="btn btn-theme">Register</button> -->
                                    <div class="d-grid gap-2">
                                      <button type="submit" class="btn btn-theme">Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-6 d-none d-lg-inline-block">
                            <div class="account-block rounded-right">
                                <div class="overlay rounded-right"></div>
                                <div class="account-testimonial">
                                    <!-- <img src="" alt=""> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end card-body -->
            </div>
            <!-- end card -->
                 <p class="text-muted text-center mt-3 mb-0">Already have an account? <span class="text-primary ml-1" @click="goToSignIn">Login!</span></p>
            <!-- end row -->
        </div>
        <!-- end col -->
    </div>
    <!-- Row -->
</div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { insertUser } from '@/eCommerce-sdk/user.js'
export default {
  data() {
    return {
      uid: null,
      fullname: null,
      email: null,
      password: null,
    }
  },
  methods: {
    async registerUser() {
      const auth = getAuth();
      try{
        const response = await createUserWithEmailAndPassword(auth, this.email, this.password)
        await updateProfile(auth.currentUser, {displayName: this.fullname})
        this.$router.push({ path: "/login" })
      } catch(err) {
        console.log(err)
      } finally {
        this.registerUserWithRole({uid: auth.currentUser.uid, fullname: this.fullname, email: this.email})
      }
    },
    async registerUserWithRole(user) {
      await insertUser(user)
    },
    goToSignIn() {
      this.$router.push({ path: "/login"})
    }
  }
}
</script>

<style scoped lang="scss">
.justify-content-center{
  margin-top: 185px;;
}

body {
    margin-top: 20px;
    background: #f6f9fc;
}
.account-block {
    padding: 0;
    background-image: url(https://www.bootdey.com/image/500x500/FFB6C1/000000);
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    position: relative;
}
.account-block .overlay {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: crimson;
}
.account-block .account-testimonial {
    text-align: center;
    color: #fff;
    position: absolute;
    margin: 0 auto;
    padding: 0 1.75rem;
    bottom: 3rem;
    left: 0;
    right: 0;
}
.text-theme {
    color: crimson !important;
}
.btn-theme {
    background-color: crimson;
    border-color: crimson;
    color: #fff;
}

</style>