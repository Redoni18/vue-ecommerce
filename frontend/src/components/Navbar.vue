<template>
    <nav class="navbar">
        <div class="header-links__first">
            <div class="logo">
                <img src="../assets/logo.png" alt="">
            </div>
            <div class="action-paths">
                <router-link :to="{path: '/'}">
                    Home
                </router-link>

                <router-link :to="{path: '/about'}">
                    About
                </router-link>
            </div>
        </div>

        <div class="auth-paths">
            <router-link :to="{path: '/register'}">
                Register
            </router-link>

            <router-link :to="{path: '/login'}">
                Login
            </router-link>
        </div>
    </nav>
</template>

<script>
export default {
}
</script>

<style lang="scss">

// .navbar{
//     // height: 80px;
//     // margin: 0;
//     // padding: 20px !important;
//     // background: #fafafa;

//     .header-links__first{
//         display: flex;
//         align-items: center;
//         width: 70%;
//         gap: 4%;
//     }

//     .logo img{
//         height: 40px;
//     }

//     .action-paths {
//         display: flex;
//         gap: 20px;
//         a {
//             text-decoration: none;
//             color: #727372;
//         }
//     }

//     .auth-paths {
//         display: flex;
//         gap: 20px;
//         a {
//             text-decoration: none;
//             color: #727372;
//         }
//     }
// }




</style>