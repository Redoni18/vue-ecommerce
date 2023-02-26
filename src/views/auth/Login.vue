<template>
  <div>
    <div class="container register-card">
      <h1>Login</h1>
      <div class="row justify-content-center">
        <div class="w-100">
          <b-form @submit="signin">
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
            <b-button type="submit" variant="primary" class="mt-4">Login</b-button>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
    }
  },
  methods: {
    async signin() {
      try{
        await this.$store.dispatch('loginUser', {
          email: this.email,
          password: this.password,
        })
        await this.$router.push({name: 'home'})
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