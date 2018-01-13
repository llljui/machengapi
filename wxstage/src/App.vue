<template>
  <div id="wxstage">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'wxstage'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{margin:0;padding: 0;list-style: none;text-decoration: none;font-family: '微软雅黑';}
body{width: 101%;overflow-x: hidden;}
</style>
