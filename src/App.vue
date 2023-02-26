<template>
  <Sidebar />
  <router-view class="root"/>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
export default {
  components: {
    Sidebar
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'Ubuntu';
  src: url('./assets/Ubuntu-Regular.ttf');
}
#app {
  font-family: Ubuntu, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  background: #fafafa;
  height: 100vh;
  display: flex;
}
.root{
  height: 100vh;
  width: calc(100vw + 290px);
}
</style>
