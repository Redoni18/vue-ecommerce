<template>
    <!-- <nav class="navbar">
        <div class="header-links__first">
            <div class="logo">
                <img src="../assets/logo.png" alt="">
            </div>
            /* <div class="action-paths">
                <router-link :to="{path: '/'}">
                    Home
                </router-link>

                <router-link :to="{path: '/about'}">
                    About
                </router-link>
            </div> */
            
               
        </div>

        <div class="searchbar">
            <input class="input" type="text" placeholder="Search" />
        </div>

        <div class="auth-paths">
            <router-link :to="{path: '/register'}">
                <i class="fa-solid fa-right-from-bracket"></i>
            </router-link>

            <router-link :to="{path: '/login'}">
                Login
            </router-link>
        </div>
    </nav> -->
    <div>
        <b-navbar  type="dark" variant="dark" style="width:100%;">
            <b-navbar-nav style="width:100%; display: flex; justify-content: space-between;" >
                <b-navbar variant="faded" type="dark" style="width:100%; display: flex; justify-content: space-between;">
                    <b-navbar-brand href="#">
                    <img src="../assets/logo.png" class="d-inline-block align-top" alt="" style="height:40px">
                    vue-commerce
                    </b-navbar-brand>
                    <b-navbar type="dark" variant="dark">
                        <b-nav-form>
                        <b-form-input class="mr-sm-2" placeholder="Search"></b-form-input>
                        <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Search</b-button>
                        </b-nav-form>
                    </b-navbar>
                    <b-nav-item href="#">Home</b-nav-item>
                    <b-nav-item-dropdown text="Lang" right>
                    <b-dropdown-item href="#">EN</b-dropdown-item>
                    <b-dropdown-item href="#">ES</b-dropdown-item>
                    <b-dropdown-item href="#">RU</b-dropdown-item>
                    <b-dropdown-item href="#">FA</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item-dropdown text="User" right>
                    <b-dropdown-item href="#">Account</b-dropdown-item>
                    <b-dropdown-item href="#">Settings</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar>    
            </b-navbar-nav>
        </b-navbar>
    </div> 
</template>

<script>
export default {
}
</script>

<style lang="scss">

// .navbar{
//     height: 80px;
//     width: 100%;
//     margin: 0;
//     padding: 20px !important;
//     background: #030212;

//     .header-links__first{
//         display: flex;
//         align-items: center;
//         // width: 70%;
//         gap: 4%;
//         order:1
//     }

//     .logo img{
//         height: 40px;
//     }
//     .searchbar {
//         display: flex;
//         gap: 20px;
//         order: 2;
//     }
//     .input{
//         width: 400px;
//         border: 1px solid #fff;
//         background: #212028;
//         padding: 10px 30px;
//         border-radius: 50px;
//         outline: none;
//         letter-spacing: 1px;
//         color: #ffffff;
//     }
//     // .action-paths {
//     //     display: flex;
//     //     gap: 20px;
//     //     a {
//     //         text-decoration: none;
//     //         color: #ffffff;
//     //     }
//     // }

//     .auth-paths {
//         display: flex;
//         gap: 20px;
//         a {
//             text-decoration: none;
//             color: #ffffff;
//         }
//         order: 3;
//     }
// }




</style>