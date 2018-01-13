<template>
  <div class="tips">
  	<div class="wxts">
  	<el-col :span="24">温馨提示</el-col>
  	您当前还不是代理，如果您有意申请平台代理，<br>
    <span>直接回复公众号联系客服</span>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'tips',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tips{overflow: hidden;}
.wxts{width: 100%;background-color: #50bfff;color: white;padding:3vw;line-height: 25px;box-shadow:0 0 10px #333}
</style>
