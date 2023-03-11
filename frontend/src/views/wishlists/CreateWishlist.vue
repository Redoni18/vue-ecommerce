<template>
    <div class="container">
    <div class="contact__wrapper shadow-lg mt-n9" style="margin-top: 148px;">
        <div class="row no-gutters">
            <div class="col-lg-5 contact-info__wrapper gradient-brand-color p-5 order-lg-2">
                
            </div>
    
            <div class="col-lg-7 contact-form__wrapper p-5 order-lg-1">
                <h4 class="h3 mb-30" style="color:crimson; margin-bottom: 50px;">Create a Wishlist!</h4>
                <form  @submit="onSubmit">
                    
                    <div class="row">
                        <div class="col-sm-12 mb-3">
                            <div class="form-group">
                                <label class="required-field" for="firstName">Product Name</label>
                                <input v-model="wishlist.productName" type="text" class="form-control"  placeholder="TV" required>
                            </div>
                        </div>
    
    
                        <div class="col-sm-6 mb-3">
                            <div class="form-group">
                                <label class="required-field" for="email">Product Brand</label>
                                <input type="text" class="form-control" v-model="wishlist.productBrand" placeholder="Samsung" required>
                            </div>
                        </div>
    
    
                        <div class="col-sm-12 mb-3">
                            <div class="form-group">
                                <label class="required-field" for="message">Write a description about product?</label>
                                <textarea class="form-control" v-model="wishlist.productDescription" rows="4" placeholder="Hi there, I would like to....." required></textarea>
                            </div>
                        </div>
    
                        <div class="d-grid gap-2">
                                <button type="submit" class="btn btn-theme" style="background-color: crimson;color:white">Submit</button>
                              </div>
    
                    </div>
                </form>
            </div>
            <!-- End Contact Form Wrapper -->
    
        </div>
    </div>
</div>


</template>

<script>

import { insertWishlist } from '@/eCommerce-sdk/wishlists.js'
export default {
    data() {
        return {
            wishlist: {
                productName: '',
                productBrand: '',
                productDescription: '',
                
            },
           
        }
    },
    
    
    methods: {
        async onSubmit() {
            await insertWishlist(this.wishlist)
            this.resetForm()
        },

        resetForm() {
            this.wishlist.productName = ""
            this.wishlist.productBrand = ""
            this.wishlist.productDescription = ""
            
        }
    }
}
</script>


<style scoped lang="scss">
body{
    margin-top:20px;
    background:#eee;
}
.gradient-brand-color {
    background-image: -webkit-linear-gradient(0deg, #376be6 0%, #6470ef 100%);
    background-image: -ms-linear-gradient(0deg, #376be6 0%, #6470ef 100%);
    color: #fff;
}
.contact-info__wrapper {
    overflow: hidden;
    border-radius: .625rem .625rem 0 0
}

@media (min-width: 1024px) {
    .contact-info__wrapper {
        border-radius: 0 .625rem .625rem 0;
        padding: 5rem !important
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
// .card-container {
//   padding: 2%;
//   box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
//   border-radius: 8px;
//   background: #fcfcfc;
// }

// .account-block {
//     background-image: url(../../assets/sign-in.svg);
//     background-repeat: no-repeat;
//     background-size: contain;
//     height: 100%;
//     position: relative;
// }

// .text-theme {
//     color: crimson !important;
// }
// .btn-theme {
//     background-color: crimson;
//     border-color: crimson;
//     color: #fff;
// }

// .login-link:hover {
//   cursor: pointer;
// }

</style>