<template>
  <div id="main-wrapper" class="container">
    <div class="row justify-content-center">
        <div class="col-xl-10">
            <div class="card border-0">
                <div class="card-body p-0">
                    <div class="row no-gutters">
                        <div class="col-lg-6">
                            <div class="p-5">
                                <div class="mb-5">
                                    <h3 class="h4 font-weight-bold text-theme">Register</h3>
                                </div>
                                <h6 class="h5 mb-0">Just Do Register.</h6>
                                <p class="text-muted mt-2 mb-5">If You Really Want To Know, Look In The Register.</p>
                                <form>
                                    <div class="form-group">
                                        <label for="yourName">Your name</label>
                                        <input type="text" class="form-control" id="yourName" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" />
                                    </div>
                                    <div class="form-group mb-5">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <button type="submit" class="btn btn-theme">Register</button>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-6 d-none d-lg-inline-block">
                            <div class="account-block rounded-right">
                                <div class="overlay rounded-right"></div>
                                <div class="account-testimonial">
                                    <!-- <h4 class="text-white mb-4">This beautiful theme yours!</h4>
                                    <p class="lead text-white">"Best investment i made for a long time. Can only recommend it for other users."</p>
                                    <p>- Admin User</p> -->
                                    <img src="https://png.pngtree.com/png-clipart/20220921/original/pngtree-register-now-label-psd-png-image_8625922.png" width="460px" height="460px" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end card-body -->
            </div>
            <!-- end card -->
            <p class="text-muted text-center mt-3 mb-0">Already have an account? <a href="login.html" style="color:crimson" class="text-primary ml-1">login</a></p>
            <!-- end row -->
        </div>
        <!-- end col -->
    </div>
    <!-- Row -->
</div>
    <!-- <div class="registration">
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
    </div> -->
</template>

<script>
// import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { insertUser } from '@/eCommerce-sdk/user.js'
// export default {
//   data() {
//     return {
//       uid: null,
//       fullname: null,
//       email: null,
//       password: null,
//     }
//   },
//   methods: {
//     async registerUser() {
//       const auth = getAuth();
//       try{
//         const response = await createUserWithEmailAndPassword(auth, this.email, this.password)
//         await updateProfile(auth.currentUser, {displayName: this.fullname})
//         this.$router.push({ path: "/login" })
//       } catch(err) {
//         console.log(err)
//       } finally {
//         this.registerUserWithRole({uid: auth.currentUser.uid, fullname: this.fullname, email: this.email})
//       }
//     },
//     async registerUserWithRole(user) {
//       await insertUser(user)
//     },
//     goToSignIn() {
//       this.$router.push({ path: "/login"})
//     }
//   }
// }
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
// .registration {
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background: #A7BFE8;  /* fallback for old browsers */
  
//   .register-card {
//     padding: 3%;
//     width: 50%;
//     box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
//     border-radius: 20px;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     background: #bbd1f7;
//   }

//   .redirect-link{
//     text-align: center;
//     font-size: 12px;
//     color: #575656;

//     span {
//       color: #030303;
//       cursor: pointer;
//     }
//   }
// }
</style>