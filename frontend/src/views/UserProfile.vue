<template>
    <div class="container" v-if="currentUser">
    <div class="main-body mt-5">
    
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <b-avatar v-if="!img1" variant="primary" :text=initials class="mr-3" size="8rem"></b-avatar>
                    <b-avatar v-else variant="info" :src=img1 class="mr-3" size="8rem"></b-avatar>
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
                    <hr v-if="edit !== true">
                    <div class="row" v-if="edit !== true">
                        <div class="col-sm-3">
                        <h6 class="mb-0">Profile Picture:</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                          <div>
                            <a class="btn btn-info" @click="click1">choose a photo</a>
                            <input type="file" ref="input1"
                              style="display: none"
                              @change="previewImage" accept="image/*" >                
                          </div>  
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
                    <div>
                    
                  
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
import 'firebase/storage'
import { getStorage, ref, uploadBytes, getMetadata, getDownloadURL  } from "firebase/storage";
export default {
    name: 'UserProfile',
    components: {
    },
    data() {
    return {
        currentUser : null,
        edit : true,
        img1: '',
        imageData: null,
        progilePicture : null,
        initials : null,
        }
    },
    computed: {
    ...mapGetters({
        user: 'getUser'
    }),
    
  },
  mounted(){
    this.currentUser = this.user.data.providerData[0]
    this.img1 = this.currentUser.photoURL
    console.log("img1: " +this.img1)
    this.getInitials()
  },
  methods: {
    editForm(){
        this.edit = !this.edit
        console.log(this.edit)
    },
    async updateUser(){
        this.edit = !this.edit
        const auth = getAuth();
          

        if(this.img1 != auth.currentUser.photoURL){

          const storage = getStorage();
          const storageRef = ref(storage, auth.currentUser.uid + `${this.imageData.name}`);

          this.img1 = await getDownloadURL(storageRef)

          const updatedProfile = await updateProfile(auth.currentUser, {displayName: this.currentUser.displayName, photoURL: this.img1})
          .then((response) => console.log(response))
          .catch((err) => console.log(err))
        }else{
          console.log(this.currentUser.photoURL)
          this.img1 = this.currentUser.photoURL
          const updatedProfile = await updateProfile(auth.currentUser, {displayName: this.currentUser.displayName, photoURL: this.currentUser.photoURL})
          .then((response) => console.log(response))
          .catch((err) => console.log(err))
        }
        
        this.getInitials()

        this.$store.dispatch('updateUser')
        
        this.$router.push({ path: "/profile" })
    },
    click1() {
      const response = this.$refs.input1.click() 
      console.log(response)  
    },
    previewImage(event) {
      this.uploadValue=0;
      this.img1=null;
      this.imageData = event.target.files[0];
      console.log("imageData name" + this.imageData.name)
      this.onUpload()
    },
    async onUpload(){
      this.img1=null;

    
      const auth = getAuth();
      
      const storage = getStorage();
      const storageRef = ref(storage, auth.currentUser.uid + `${this.imageData.name}`);

      // 'file' comes from the Blob or File API
      uploadBytes(storageRef, this.imageData).then((snapshot) => {
        const fileReader = new FileReader()
        console.log(fileReader)
        fileReader.addEventListener('load', () => {
          this.img1 = fileReader.result
          console.log("url: " + this.img1)
        })
        fileReader.readAsDataURL(this.imageData)
        console.log('Uploaded a blob or file!');
      });
  
    },
    getInitials(){

      let name = this.currentUser.displayName
      let parts = name.split(' ')
      if(parts.length == 1) {
        let rgx = new RegExp(/(\p{L}{2})\p{L}+/, 'gu');

        this.initials = [...name.matchAll(rgx)] || [];
        this.initials = (
          (this.initials.shift()?.[1] || '') + (this.initials.pop()?.[1] || '')
        );

      console.log(this.initials.length);
      }else{
        let rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu');

        this.initials = [...name.matchAll(rgx)] || [];
        this.initials = (
          (this.initials.shift()?.[1] || '') + (this.initials.pop()?.[1] || '')
        ).toUpperCase();

        console.log(this.initials.length);
      }
      
    }
  }
  }

</script>

<style scoped>

.container{
  width: 65%;
  padding: 1% 0;
}

</style>