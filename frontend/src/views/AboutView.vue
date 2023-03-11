<template>
  <div class="row justify-content-center align-items-center mt-4">
    <div class="col-8">
        <div class="row no-gutters">
            <div class="col-lg-6 align-items-center justify-content-left d-flex mb-5 mb-lg-0">
                <div class="blockabout">
                    <div class="blockabout-inner text-center text-sm-start">
                        <div class="title-big pb-3 mb-3">
                            <h3>ABOUT US</h3>
                        </div>
                            <p class="description-p text-muted pe-0 pe-lg-0">
                                This application is an E-Commerce platform designed in such a way to change shopping forever.
                            </p>
                            <p class="description-p text-muted pe-0 pe-lg-0">We are glad to offer such services to our costumers, they can buy, rate and communicate with us in any time all by staying comfortable on their house.</p>
                              <div class="sosmed-horizontal pt-3 pb-3">
                                <a href="#"><i class="fa fa-facebook"></i></a>
                                <a href="#"><i class="fa fa-instagram"></i></a>
                                <a href="#"><i class="fa fa-pinterest"></i></a>
                              </div>
                            <a href="#" class="btn rey-btn mt-3">See More</a>
                        </div>
                        <div class="col-lg-6 d-none d-lg-inline-block">
                            <div class="account-block rounded-right">
                                <div class="overlay rounded-right"></div>
                                <div class="account-testimonial">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  
  <style scoped lang="scss">
  
  #about-section {
    background: rgba(32, 33, 36, 0.1);
    position: relative;
}

.blockabout {
    padding: 20px;
    background: white;
}

.blockabout-inner {
    padding: 30px;
    border: 1px solid rgba(32, 33, 36, 0.1);
}

.account-block {
    background-image: url(../assets/About-us.svg);
    background-repeat: no-repeat;
    background-size: contain;
    height: 100%;
    position: relative;
    object-fit: contain;
}

.sosmed-horizontal a i {
    border: 1px solid #070707;
    border-radius: 50%;
    color: #070707;
    display: inline-block;
    height: 30px;
    width: 30px;
    line-height: 30px;
    margin: auto 3px;
    font-size: 15px;
    text-align: center;
    transition: all 0.3s;
}

.rey-btn {
    border: 2px solid #070707;
    padding: 10px 40px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 13px;
    font-weight: 700;
    border-radius: 50px;
    transition: all 0.3s;
}
  
  </style>