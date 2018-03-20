<template>
  <div class="authorize">
  	<el-col :span="14" :offset="1"><el-input placeholder="输入推广员ID/邀请码" type="number" v-model="uids" class="mrt" @change="inputin"></el-input></el-col>
  	<el-col :span="7"  :offset="1"><el-button class="mrt btnw" type="primary" @click="searchinfo">查询</el-button></el-col>
  	<el-col :span="22" :offset="1" class="bgtext mrt">{{nickname}}</el-col>
  	<el-col :span="22" :offset="1" class="sq mrt"><div class="sq" @click="promoter">授权</div></el-col>
  </div>
</template>

<script>
import axios from "axios";
import qs from "qs";
export default {
  name: 'authorize',
  data () {
    return {
      nickname:'--',
      uids:null
    }
  },
  methods:{
  	promoter:function () {
  		console.log(454);
  		var self =this;
  		var params={hz:'hz',uid:self.uids,cid:sessionStorage.cid,channel:sessionStorage.channel}
  		axios.post('http://pay.queyoujia.com/user/promoter/auth',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
                        if (res.data.code==0) {
                             self.$message({
                            message: '授权成功',
                            type: 'success'
                          });
                          }else{
                             self.$message({
                            message: res.data.message,
                            type: 'warning'
                          });
                        }

                      }).catch(function (err) {
                        console.log(err);
                      }); 
  	},
  	inputin:function (val) {
  		var self =this;
  		console.log(val);
  		self.uids=val;
  	},
  	searchinfo:function () {
  		var self =this;
  		axios.get('http://pay.queyoujia.com/user/check',{params:{hz:'hz',uid:self.uids,cid:sessionStorage.cid,channel:sessionStorage.channel}}).then(function (res) {
                 if (res.data.code==0) {
                           self.nickname=res.data.data.nickname;
                        }else{
                           self.nickname=res.data.message;
                        }
                        //self.uids=res.data.data;
                      }).catch(function (err) {
                        console.log(err);
                      }); 
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mrt{margin-top:2vh;}
.btnw{width: 100%;}
.bgtext{background-color: #EdF2F7;height: 5vh;text-align: center;line-height: 5vh;color: #324057;font-family: "Times New Roman";border-radius: 5px;font-weight:bold;font-size: 1rem;}
.sq{background-color: #20A0FF;color: white;text-align: center;height: 7vh;line-height: 7vh;border-radius: 5px;}
.sq:active{background-color: #58B7FF;}
</style>
