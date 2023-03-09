<template>
<div class="row justify-content-center align-items-center mt-4">
  <div class="col-8">
    <div class="card card-container border-0">
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
      </div>
      <p class="text-muted text-center mt-3 mb-0 cursor-pointer">Already have an account? <span class="text-primary ml-1 login-link" @click="goToSignIn">Login!</span></p>
  </div>
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

.card-container {
  padding: 2%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 8px;
  background: #fcfcfc;
}

.account-block {
    background-image: url(../../assets/sign-in.svg);
    background-repeat: no-repeat;
    background-size: contain;
    height: 100%;
    position: relative;
}

.text-theme {
    color: crimson !important;
}
.btn-theme {
    background-color: crimson;
    border-color: crimson;
    color: #fff;
}

.login-link:hover {
  cursor: pointer;
}

</style>