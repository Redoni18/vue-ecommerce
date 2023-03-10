<template>
    <div class="container" v-if="currentUser">
    <div class="main-body mt-5">
    
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150">
                    <div class="mt-3">
                      <h4>{{currentUser.displayName}}</h4>
                    </div>
                  </div>
                </div>
              </div>  
            </div>
            <div class="col-md-8">
            <b-form @submit="updateUser">
                <div class="card mb-3">
                    <div class="card-body">
                    <div class="row">
                        <div class="col-sm-3">
                        <h6 class="mb-0">Full Name</h6>
                        </div>
                        <div class="col-sm-9">
                            <b-form-input
                                v-model="currentUser.displayName"
                                type="text"
                                placeholder="Full Name"
                                required
                                :disabled="edit"
                            ></b-form-input>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-sm-3">
                        <h6 class="mb-0">Email</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            <b-form-input
                                v-model="currentUser.email"
                                type="email"
                                placeholder="Email"
                                required
                                disabled
                            ></b-form-input>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-sm-3">
                        <h6 class="mb-0">Phone</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            <b-form-input
                                v-model="currentUser.phoneNumber"
                                type="text"
                                placeholder="Not provided "
                                required
                                disabled
                            ></b-form-input>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-sm-12">
                        <a class="btn btn-info " target="__blank" @click="editForm" v-if="edit === true">Edit</a>
                        <a class="btn btn-info " target="__blank" @click="updateUser" v-if="edit !== true" >Update</a>
                        </div>
                    </div>
                    </div>
                </div>
            </b-form>
              
            </div>
          </div>

        </div>
    </div>
</template>

<script>

import { mapGetters } from 'vuex'
import { getAuth, updateProfile } from "firebase/auth";
export default {
    name: 'UserProfile',
    components: {
    },
    data() {
    return {
        currentUser : null,
        edit : true,
        }
    },
    computed: {
    ...mapGetters({
        user: 'getUser'
    }),
  },
  mounted(){
    this.currentUser = this.user.data.providerData[0]
  },
  methods: {
    editForm(){
        this.edit = !this.edit
        console.log(this.edit)
    },
    async updateUser(){
        this.edit = !this.edit
        const auth = getAuth();

        const updatedProfile = await updateProfile(auth.currentUser, {displayName: this.currentUser.displayName})
        .then((response) => console.log(response))
        .catch((err) => console.log(err))

        this.$store.dispatch('updateUser')
        
        console.log('eeeej '+ updatedProfile)
        this.$router.push({ path: "/profile" })
    }
  }
  }

</script>

<style scoped>

.container{
  width: 65%;
}

</style>