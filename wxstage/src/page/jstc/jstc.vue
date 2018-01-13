<template>
	 <transition name="fade" mode="in-out">
  <div class="jutc">
  	<el-row class="borb">
	  	<el-col :span="11" :offset="1" class="mrt">当前提现金：<span style="color:#20A0FF">{{cnts}}</span></el-col>
	  	<el-col :span="11" :offset="1" class="mrt"><el-button class="flr" type="primary" size='mini' @click="getmoney">提现</el-button></el-col>
 	</el-row>
 	<el-col :span="22" :offset="1" class="mrt">提现记录</el-col>
 	 <el-col :span="10" :offset="1" class="mrt">
	  	<div class="block">
	    <el-date-picker
	      v-model="value1"
	      type="date"
	      placeholder="选择日期"
	      style="width: 100%;"
	      >
	    </el-date-picker>
	  </div>
	</el-col>
	<el-col :span="10" :offset="2" class="mrt">
	  <div class="block">
	    <el-date-picker
	      v-model="value2"
	      align="right"
	      type="date"
	      style="width: 100%;"
	      placeholder="选择日期"
	     >
	    </el-date-picker>	
	  </div>
	</el-col>
	<el-col :span="22" :offset="1" class="search mrt mrb"><el-button type="primary" class="btn" @click="submit">查询</el-button></el-col>
	 <el-table
	 :height="tableH"
	 align="center"
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="dateline"
      align="center"
       min-width="100"
      label="日期">
    </el-table-column>
    <el-table-column
      prop="starlight"
      align="center"
      label="提现金额"
      min-width="100">
    </el-table-column>
    <el-table-column
      prop="status"
      align="center"
      label="状态">
    </el-table-column>
  </el-table>
  <div class="borbg" v-show="showbg" @click="showbgs"></div>
  <div class="borbd" v-show="showbg">
  	 <el-col :span="22" :offset="1" class="mrtop" ><el-input type="number" @change="nowvalue" v-model="vales" placeholder="请输入提取金额"></el-input></el-col>
  	 <el-col :span="5" :offset="4" class="mrtop" ><el-button  @click="showbgs">取消</el-button></el-col>
  	 <el-col :span="5" :offset="7" class="mrtop" ><el-button type="primary" @click="postreq">确定</el-button></el-col>
  </div>
  <div class="more" @click="lookmore">{{moreOrelse}}</div>
  <div class="bor5" v-show="show5" @click="sure5"></div>
  <div class="brd5" v-show="show5">
  <h5>注：推广奖励问题咨询请联系官方客服，客服微信：{{weixin}}</h5>
   <h5> 1、推广员将获取直属会员充值的45%和二级团队充值10%的返利。</h5>
   <h5> 2、根据国家相关规定，通过推广机制获取的收益需要按照4%来征收个人所得税，目前为鼓励广大推广员暂不收取，10月1日起正式执行，请大家知晓。</h5>
   <h5> 3、推广返利随时可以通过本后台进行提取，<span style="color:red">每周限提一次，周二和周五为审核期，</span>审核通过后会直接打款至推广员当前所在微信钱包，请注意查收</h5>
    <el-col :span="22" :offset="1"><el-button type="primary" @click="sure5">确认</el-button></el-col>
  </div>
  <div class="el-icon-fa el-icon-fa-question-circle-o fa-5x questions" @click="help"></div>
  </div>
</transition>
</template>

<script>
import axios from "axios";
import qs from 'qs';//queyou999
export default {
  name: 'jutc',
  data () {
    return {
      weixin:null,
      show5:true,
      showbg:false,
      cnts:null,
      value1:'',
      value2:'',
      tableH:null,
      moreOrelse:null,
      tableData: [],
      isVerify:null,
      vales:null,
      centerDialogVisible: true
    }
  },
  methods:{
  	postreq:function (argument) {
  		var self =this;
  		axios.get('http://pay.queyoujia.com/user/startlight/exchange',{params:{starlight:self.vales,cid:sessionStorage.cid,channel:sessionStorage.channel}}).then(function (res) {
  				if (res.data.code==0) {
  					self.$message({
			          title: '成功',
			          message: '申请成功',
			          type: 'success'
			        });	
            console.log(self.showbg);
            self.showbg=false;
  				}else{
  					self.$message({
			          title: '警告',
			          message: res.data.message,
			          type: 'warning'
			        });	
            self.showbg=false;
            console.log(self.showbg);
  				}
  			}).catch(function (err) {
  				console.log(err)
  			})
  	},
  	nowvalue:function (val) {
  		var self =this;
  		val=Number(val);
  		if (val>self.cnts) {
  			setTimeout(function () {
  				self.vales=self.cnts;
  			},50)
  		}else{console.log('there')}
  	},
  	showbgs:function (argument) {
  		var self=this;
  		self.showbg=false;
  	},
  	submit:function () {
  		var self =this;
  		self.tableData=[];
  		console.log(self.value2-self.value1)
  		if (self.value1&&self.value2&&(self.value2-self.value1)>0&&((self.value2-self.value1)/86400000)<20) {
  			axios.get('http://pay.queyoujia.com/user/startlight/history',{params:{startTime:Date.parse(self.value1)/1000,endTime:Date.parse(self.value2)/1000,cid:sessionStorage.cid,channel:sessionStorage.channel}}).then(function (res) {
		  		self.tableData=res.data.data.list;  		
		  	}).catch(function (err) {
		  		console.log(err);
  			})
  		}else{
  		self.$message({
          title: '警告',
          message:'确保时间输入正确，间隔小于20天',
          type: 'warning'
        });	
  		}  		
  	},
  	lookmore:function () {
  		console.log(22);
  		
  	},
  	getmoney:function () {
  		var self =this;
  		if (self.isVerify==0) {
  			 self.$router.push({path: '/smrz'});
  		}else if(self.isVerify==1){
  			self.showbg=true;
  		}else if(self.isVerify==2){
        self.$message({
            message: '待审核',
            type: 'warning'
          });
      }else{
         self.$message({
            message: '未知错误，请联系客服',
            type: 'warning'
          });
      }
  	},
    sure5:function () {
     var self = this;
     self.show5=false;
     sessionStorage.show5=1;
    },
    help:function () {
      var self =this;
     self.show5=true;
     console.log(22);
    }
  },
  mounted(){
  	var self =this;
    if (sessionStorage.cid==2) {
      self.weixin='queyou999';
    }else if(sessionStorage.cid==1){
      self.weixin='dagong0088';
    }else{
      self.weixin='queyou8866';
    }
    if (sessionStorage.show5==1) {
       self.show5=false;
    }
  	self.tableH=window.screen.availHeight/2.5;
  	axios.get('http://pay.queyoujia.com/user/startlight/now',{params:{cid:sessionStorage.cid,channel:sessionStorage.channel}}).then(function (res) {
  		console.log(res);
  		self.cnts=res.data.data.cnt;
  		self.isVerify=res.data.data.isVerify;
  	}).catch(function (err) {
  		console.log(err);
  	});

  }
}
</script>
<style scoped>
.bor5{background-color: black;opacity: 0.75;position: absolute;top: 0;right: 0;left: 0;bottom: 0;margin:auto;width: 105%;height:101%;z-index: 999996;}
.brd5{position: absolute;top: 0;right: 0;left: 0;bottom: 0;margin:auto;background-color: white;width: 90%;height: 90vh;z-index: 99999999;}
.mrt{margin-top: 2vh;}
.flr{float: right;margin-right: 10vw;}
.borb{border-bottom: 1px solid #ddd;padding-bottom: 1vh;}
.btn{width:100%;}
.mrb{margin-bottom: 2vh}
.fade-enter-active, .fade-leave-active {
          transition: opacity .5s
        }
        .fade-enter, .fade-leave-active {
          opacity: 0
        }
.borbg{opacity: 0.6;background-color: black;position: fixed;top: 0;bottom: 0;right: 0;left: 0;margin:auto;width: 100%;height: 100%;z-index: 99998}
.borbd{width:80%;height: 25%;background-color: white;position: fixed;top: 0;bottom: 0;right: 0;left: 0;margin:auto;opacity: 1;border-radius: 5px;z-index: 99999}
.mrtop{margin-top: 5vh}
.brd5 h5{padding:1.5vh 5vw;font-size: 5vw;font-weight: normal;color: #545454;}
.brd5 div button{width: 100%;}
.questions{position: absolute;top:2vh;right:2.5vw;color:#f7ba2a;font-size:5vw;}
.el-icon-fa-question-circle-o:before{font-size: 7vw;}
</style>
