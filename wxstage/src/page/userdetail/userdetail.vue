<template>
  <transition name="fade" mode="in-out">
  <div class="userdetail">
  	<el-row class="bgrow">
	  	<el-col :span="10" :offset="1" class="brb">姓名</el-col>
	  	<el-col :span="11" class="alig brb textpri">{{name}}</el-col>
	</el-row>
	<el-row class="bgrow">
	  	<el-col :span="10" :offset="1" class="brb">联系电话</el-col>
	  	<el-col :span="11" class="alig brb textpri">{{tel}}</el-col>
	</el-row>
	<el-row class="bgrow">
	  	<el-col :span="10" :offset="1" class="brb">加入时间</el-col>
	  	<el-col :span="11" class="alig brb textpri">{{gettime}}</el-col>
	</el-row>
	<el-row class="bgrow">
	  	<el-col :span="10" :offset="1" class="brb">我的游戏</el-col>
	  	<el-col :span="11" class="alig brb textpri">{{mygame}}</el-col>
	</el-row>
	<el-row class="bgrow">
	  	<el-col :span="10" :offset="1" class="brb">我的地区</el-col>
	  	<el-col :span="11" class="alig brb textpri">{{myzoom}}</el-col>
	</el-row>
  </div>
</transition>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
export default {
  name: 'userdetail',
  data () {
    return {
     name:null,
     tel:null,
     gettime:null,
     mygame:null,
     myzoom:null
    }
  },
  methods:{
  	
  },
  mounted(){
  	var self = this;
  	var params={cid:sessionStorage.cid,channel:sessionStorage.channel}
  	axios.post('http://pay.queyoujia.com/user/info',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
                      	console.log(res)
                        self.name=res.data.data.nickname;
                        self.tel=res.data.data.mobile;
                        self.gettime=res.data.data.dateline;
                        if (res.data.data.cid==1) {
                          self.mygame='全民大冶'
                        }else if(res.data.data.cid==2){
                          self.mygame='八道雀神'
                        }else{return}
                        if (res.data.data.channel=='hz') {
                          self.myzoom='杭州'
                        }else if(res.data.data.channel=='fuyang'){
                          self.myzoom='富阳'
                        }else{return}
                      }).catch(function (err) {
                      	console.log(err);
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
.bgrow:active{background-color: #E5E9F2;}
.fade-enter-active, .fade-leave-active {
          transition: opacity .5s
        }
        .fade-enter, .fade-leave-active {
          opacity: 0
        }
</style>