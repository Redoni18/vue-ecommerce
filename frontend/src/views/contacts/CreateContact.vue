<template>
<div class="contact-container">
    <div class="contact-form__container">
        <h4 class="h3 mb-30" style="color:crimson; margin-bottom: 50px;">Contact Us!</h4>
            <form  @submit="onSubmit">
                
                <div class="row">
                    <div class="col-sm-12 mb-3">
                        <div class="form-group">
                            <label class="required-field" for="firstName">Full Name</label>
                            <input v-model="contact.contactName" type="text" class="form-control"  placeholder="Wendy Endy" required>
                        </div>
                    </div>


                    <div class="col-sm-6 mb-3">
                        <div class="form-group">
                            <label class="required-field" for="email">Email</label>
                            <input type="text" class="form-control" v-model="contact.contactEmail" placeholder="wendy.apple@seed.com" required>
                        </div>
                    </div>

                    <div class="col-sm-6 mb-3">
                        <div class="form-group">
                            <label for="phone">Phone Number</label>
                            <input type="tel" class="form-control" v-model="contact.contactNumber" placeholder="(021)-454-545" required>
                        </div>
                    </div>

                    <div class="col-sm-12 mb-3">
                        <div class="form-group">
                            <label class="required-field" for="message">How can we help?</label>
                            <textarea class="form-control" v-model="contact.contactDescription" rows="4" placeholder="Hi there, I would like to....." required></textarea>
                        </div>
                    </div>

                    <div class="d-grid gap-2">
                            <button type="submit" class="btn btn-theme" style="background-color: crimson;color:white">Submit</button>
                            </div>

                </div>
            </form>
        </div>
        <div class="contact-image">
            <img src="../../assets/contact.svg" alt="">
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

.contact-container{
    width: 1150px;
    padding: 2%;
    margin: auto;
    display: flex;
    align-items: center;

    .contact-form__container {
        width: 55%;
    }

    .contact-image{
        width: 60%;
        height: 450px;
        img{
            object-fit: contain;
            height: 100%;
            width: 80%;
        }
    }
}

@media only screen and (max-width: 1000px) {
    .contact-image {
        display: none;
    }

    .contact-container {
        width: 100%;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

.contact-info__list span.position-absolute {
    left: 0
}
.z-index-101 {
    z-index: 101;
}
.list-style--none {
    list-style: none;
}
.contact__wrapper {
    background-color: #fff;
    border-radius: 0 0 .625rem .625rem
}

@media (min-width: 1024px) {
    .contact__wrapper {
        border-radius: .625rem 0 .625rem .625rem
    }
}
@media (min-width: 1024px) {
    .contact-form__wrapper {
        padding: 5rem !important
    }
}
.shadow-lg, .shadow-lg--on-hover:hover {
    box-shadow: 0 1rem 3rem rgba(132,138,163,0.1) !important;
}


</style>