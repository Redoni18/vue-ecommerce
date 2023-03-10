<template>
    <div class="row justify-content-center align-items-center mt-4">
  <div class="col-8">
    <div class="card card-container border-0">
          <div class="card-body p-0">
              <div class="row no-gutters">
                  <div class="col-lg-6">
                      <div class="p-5">
                          <h4 class="h3 mb-30" style="color:crimson">Contact Us</h4>
                          <br>
                          <form @submit="onSubmit">
                            <div class="form-group">
                                <label class="required-field" for="firstName">Full Name</label>
                                <input v-model="contact.contactName" type="text" class="form-control"   placeholder="Wendy" required>
                            </div>

                            <br>
                        
                            <div class="form-group">
                                <label class="required-field" for="email">Email</label>
                                <input v-model="contact.contactEmail" type="email" class="form-control" placeholder="wendy.apple@seed.com" required>
                            </div>
                        
                            <br>
                        
                            <div class="form-group">
                                <label for="phone">Phone Number</label>
                                <input v-model="contact.contactNumber" type="tel" class="form-control"  placeholder="(021)-454-545" required>
                            </div>
                        
                            <br>
                        
                            <div class="form-group">
                                <label class="required-field" for="message">How can we help?</label>
                                <textarea v-model="contact.contactDescription" class="form-control" rows="4" placeholder="Hi there, I would like to....." required>  </textarea>
                            </div>
                            <br>
    
                            <div class="d-grid gap-2">
                                <button type="submit" class="btn btn-theme">Submit</button>
                                
                              </div>
                    </form>
                      </div>
                  </div>
                  <div class="col-lg-6 d-none d-lg-inline-block">
                      <!-- img -->
                  </div>
              </div>
          </div>
      </div>
      
  </div>
</div>
</template>

<script>
import { insertContact } from '@/eCommerce-sdk/contacts.js'
export default {
    data() {
        return {
            contact: {
                contactName: '',
                contactEmail: '',
                contactNumber: '',
                contactDescription:'',
            },
           
        }
    },
    
    
    methods: {
        async onSubmit() {
            await insertContact(this.contact)
            this.resetForm()
        },

        resetForm() {
            this.contact.contactName = ""
            this.contact.contactEmail = ""
            this.contact.contactNumber = ""
            this.contact.contactDescription = ""
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