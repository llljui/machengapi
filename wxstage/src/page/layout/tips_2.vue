<template>
  <div class="tips">
  	<div class="wxts">
  	<el-col :span="24">温馨提示</el-col>
  	 您的账户存在违规作弊行为，已被禁止登陆。
    <br>
    <span>若有疑问，直接回复公众号联系客服</span>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'tips',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tips{overflow: hidden;}
.wxts{width: 100%;background-color: #50bfff;color: white;padding:3vw;line-height: 25px;box-shadow:0 0 10px #333}
</style>
