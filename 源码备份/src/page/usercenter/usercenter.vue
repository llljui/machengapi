<template>
	<transition name="fade" mode="in-out">
  <div class="usercenter">
  	<el-row class="bgrow">
	  	<el-col :span="10" :offset="1" class="brb">用户ID</el-col>
	  	<el-col :span="11" class="alig brb textpri" v-html="uids"></el-col>
	</el-row>
	<el-row class="bgrow">
	  	<el-col :span="10" :offset="1" class="brb">我的邀请码</el-col>
	  	<el-col :span="11" class="alig brb textpri">{{ucode}}</el-col>
	</el-row>
	<el-row class="bgrow">
	  	<el-col :span="10" :offset="1" class="brb">剩余钻石</el-col>
	  	<el-col :span="11" class="alig brb textpri">{{diamond}}</el-col>
	</el-row>
<!--   <el-row class="bgdiamondrow">
    <el-col :span="10" :offset="1" class="brb"><div @click="changegame">切换游戏</div></el-col>
    <el-col :span="11" class="alig brb"><div  @click="changegame"><i class="el-icon-arrow-right"></i></div></el-col>
</el-row>-->
<el-row class="bgrow">
    <el-col :span="10" :offset="1" class="brb"><div  @click="bindtel">绑定手机号</div></el-col>
    <el-col :span="11" class="alig brb"><div  @click="bindtel"><i class="el-icon-arrow-right"></i></div></el-col>
</el-row> 
	<el-row class="bgrow">
	  	<el-col :span="10" :offset="1" class="brb"><div  @click="userdetail">查看个人资料</div></el-col>
	  	<el-col :span="11" class="alig brb"><div  @click="userdetail"><i class="el-icon-arrow-right"></i></div></el-col>
	</el-row>
  </div>
</transition>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
export default {
  name: 'usercenter',
  data () {
    return {
      diamond:null,
      uids:null,
      ucode:null
    }
  },
  methods:{
  	changegame:function () {
  		console.log(22);
  	},
  	userdetail:function () {
  		    var self =this;
  			this.$router.push({path: '/userdetail'});
  	},
  	bindtel:function () {
  			var self =this;
  			this.$router.push({path: '/bindtel'});
  	}
  },
  mounted(){
    var self =this;
    axios.get('http://pay.queyoujia.com/user/info',{params:{cid:sessionStorage.cid,channel:sessionStorage.channel}}).then(function (res) {
      console.log(res.data.data);
      self.uids=res.data.data.uid;
      self.ucode=res.data.data.no;
      self.diamond=res.data.data.rich.diamond;
      sessionStorage.myuid=res.data.data.uid;
    }).catch(function (err) {
      console.log(err)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.alig{text-align: right;font-family:'微软雅黑';color: #8492A6;}
.bgrow{background-color:white;height: 3vh;margin-top: 1vh;padding-bottom: 2vh;height: 7vh;}
.brb{border-bottom: 1px solid #dddddd;padding-bottom: 1vh;padding-left: 2vw;padding-right: 2vw;height: 7vh;line-height: 7vh;color:#1F2D3D; }
.textpri{color: #48576a;font-weight: lighter;font-size: 0.9rem;}
.bgrow:active{background-color: #cFF2F7;}
.fade-enter-active, .fade-leave-active {
          transition: opacity .5s
        }
        .fade-enter, .fade-leave-active {
          opacity: 0
        }
</style>