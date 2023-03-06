<template>
    <div class="registration">
      <div class="mt-4 register-card">
        <h2>Register below</h2>
        <b-form class="mt-4" @submit="registerUser">
          <b-form-group
            id="input-group-1"
            label="Full Name:"
            label-cols-sm="4"
            label-cols-lg="2"
            content-cols-sm
            content-cols-lg="10"
            label-align="start"
          >
            <b-form-input
              v-model="fullname"
              placeholder="Full Name"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-1"
            label="Email:"
            label-cols-sm="4"
            label-cols-lg="2"
            content-cols="10"
            label-align="start"
          >
            <b-form-input
              v-model="email"
              type="email"
              placeholder="Enter your email"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-1"
            label="Password:"
            label-cols-sm="4"
            label-cols-lg="2"
            content-cols-sm
            content-cols-lg="10"
            label-align="start"
          >
            <b-form-input
              v-model="password"
              type="password"
              placeholder="Enter your password"
              required
            ></b-form-input>
          </b-form-group>
          <p class="redirect-link">Already have an account? <span @click="goToSignIn">Sign In!</span></p>


          <b-button type="submit" variant="light" class="mt-2">Register</b-button>
        </b-form>
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

.registration {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #A7BFE8;  /* fallback for old browsers */
  
  .register-card {
    padding: 3%;
    width: 50%;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #bbd1f7;
  }

  .redirect-link{
    text-align: center;
    font-size: 12px;
    color: #575656;

    span {
      color: #030303;
      cursor: pointer;
    }
  }
}
</style>