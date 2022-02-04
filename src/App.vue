<template>

    <div id="nav">

    <router-link :to="{ name: 'DailyCalorie' }">DailyCalorie</router-link>
    <router-link :to="{ name: 'Imc' }">Imc</router-link>
    <router-view/>
  </div>


<!--  <Imc/>-->
<!--  <DailyCalorie/>-->
</template>

<script>

import Imc from "./components/Imc";
import DailyCalorie from "./components/DailyCalorie";

export default {
  name: 'App',
  components: {DailyCalorie, Imc}
}
</script>

<style>



#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}
#nav a.router-link-exact-active {
  color: white;
  background: crimson;
}




#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  margin: 0;
  background: #eee;
}
</style>
