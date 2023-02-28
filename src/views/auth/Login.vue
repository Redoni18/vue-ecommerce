<template>
  <div class="registration">
      <b-alert 
        variant="danger" 
        class="alert-error" 
        v-if="errorMessage" 
        v-model="autoDismissingAlert"
        :interval="autoDismissingAlertInterval"
        @close-countdown="autoDismissingAlertCountdown = $event" 
        fade
      >
        {{errorMessage}} <b>&rArr;</b>
      </b-alert>
      <div class="mt-4 register-card">
        <h2>Login</h2>
        <b-form @submit="signin" class="mt-4">
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
            <p class="redirect-link">Don't have an account? <span @click="goToSignUp">Sign Up!</span></p>


            <b-button type="submit" variant="light" class="mt-2">Login</b-button>
          </b-form>
      </div>
      <!-- <small class="text-center w-50 mt-2 text-danger" v-if="errorMessage">{{errorMessage}}</small> -->
    </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
      errorMessage: null,
      autoDismissingAlert: 5000,
      autoDismissingAlertInterval: 1000,
      autoDismissingAlertCountdown: 0
    }
  },
  methods: {
    async signin() {
      try {
        await this.$store.dispatch('loginUser', {
          email: this.email,
          password: this.password,
        })

        this.$router.push({ name: 'home'})
      } catch (error) {
        this.errorMessage = error.message
      }

    },
    
    goToSignUp() {
      this.$router.push({ path: "/register"})
    }
  },
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

  .alert-error {
    width: 30%;
    position: fixed;
    top: 10px;
    right: 10px;
    font-size: 14px;
  }
}
</style>