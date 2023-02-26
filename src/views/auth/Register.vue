<template>
  <div>
    <div class="container register-card">
      <h1>Register</h1>
      <div class="row justify-content-center">
        <div class="w-100">
          <b-form @submit="registerUser">
            <label for="text-name" class="label-text mt-3 w-100">Your Name:</label>
            <b-form-input
              id="text-name"
              required
              type="text"
              placeholder="Fullname"
              v-model="fullname"
            />
            <label for="text-email" class="label-text mt-3 w-100">Your Email:</label>
            <b-form-input
              id="text-email"
              required
              type="email"
              placeholder="Email"
              v-model="email"
            />
            <label for="text-password" class="label-text mt-3 w-100">Your Password:</label>
            <b-form-input
              id="text-password"
              type="password"
              required
              placeholder="Password"
              v-model="password"
            />
            <b-button type="submit" variant="primary" class="mt-4">Register</b-button>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
export default {
  data() {
    return {
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
      }
    }
  }
}
</script>

<style scoped lang="scss">
div {
  display: flex;
  align-items: center;
  .register-card{
    flex-direction: column;
    width: 50%;
    padding: 3% 10%;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    border-radius: 20px;
    .label-text{
      text-align: left;
    }
  }
}
</style>