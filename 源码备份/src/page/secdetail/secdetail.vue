<template>
  <div class="secdetail"   v-loading="loading">
  	<el-col :span="10" :offset="1" class="mart">
        <el-date-picker type="date" placeholder="选择日期" v-model="date1" style="width: 100%;"></el-date-picker>
    </el-col>
     <el-col :span="2"  class="mart">-</el-col>
    <el-col :span="10" class="mart tablet">
        <el-date-picker type="date" placeholder="选择日期" v-model="date2" style="width: 100%;"></el-date-picker>
    </el-col>
      <el-col :span='22' :offset="1" class="mart">
    	<el-input placeholder="请输入游戏ID" v-model="idinfo"></el-input>
    </el-col>
     <el-col :span='22' :offset="1" class="mart serbtn">
   		<el-button @click="searchinfo" class="btnser" type="primary">查询</el-button>
	</el-col>
	<el-col :span="7" :offset="1" class="colt">
		<h5>二级推广员</h5>
		<b>{{number}}</b>
	</el-col>
	<el-col :span="7" :offset="1" class="colt">
		<h5>消耗总额</h5>
		<b>{{consumeall}}</b>
	</el-col>
	<el-col :span="7" class="colt">
		<h5>充值总额</h5>
		<b>{{chargeall}}</b>
	</el-col>
	<el-table
		    :data="tableData3"
		    :height="tableH"
		    border
		    style="width: 100%">
		    <el-table-column
		      prop="pid"
		      min-width="120"
		      align="center"
		      label="推广员">
		    </el-table-column>
		    <el-table-column
		      prop="nickname"
		      min-width="120"
		      align="center"
		      label="昵称">
		    </el-table-column>
		    <el-table-column
		      sortable
		      prop="number"
		      align="center"
		      min-width="120"
		      label="会员">
		    </el-table-column>
		    <el-table-column
		      sortable
		      prop="consume"
		      align="center"
		      min-width="120"
		      label="团队消耗">
		    </el-table-column>
		    <el-table-column
		      prop="charge"
		      align="center"
		      min-width="120"
		      label="充值总额">
		    </el-table-column>
		 </el-table>
<!--    <div class="more" @click="lookmore">{{moreOrelse}}</div> -->
  </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
export default {
  name: 'secdetail',
  data () {
    return {
      date1:null,
      date2:null,
      tableData3:[],
      number:null,
      consumeall:null,
      chargeall:null,
      idinfo:null,
      tableH:null,
      moreOrelse:null,
      loading:false
    }
  },
  methods:{
  	searchinfo:function () {
  		var self = this;
  		 if (self.date1&&self.date2) {
  		 	if (self.date2>=self.date1&&((self.date2-self.date1)/86400000)<20) {
	  	axios.get('http://pay.queyoujia.com/user/team/promoter',{params:{startTime:Date.parse(self.date1)/1000,endTime:Date.parse(self.date2)/1000,cid:sessionStorage.cid,channel:sessionStorage.channel,uid:self.idinfo}}).then(function (res) {
	                        console.log(res.data.data);
	                        self.tableData3=[];
	                        self.tableData3=res.data.data.list;
	                      }).catch(function (err) {
	                        console.log(err);
	                      });}
	                        else{
		                     self.$message({
		                      title: '警告',
		                      message: '结束时间不能不开始时间早,且时间间隔不大于20天',
		                      type: 'warning'
		                    });
                		  }    
	                  }else{
	                  	if(!self.idinfo&&!self.date1||!self.date2){ 
				  	axios.get('http://pay.queyoujia.com/user/team/promoter',{params:{startTime:Date.parse(self.date1)/1000,endTime:Date.parse(self.date2)/1000,cid:sessionStorage.cid,channel:sessionStorage.channel,uid:self.idinfo}}).then(function (res) {
				                        console.log(res.data.data);
				                        self.tableData3=[];
				                        self.tableData3=res.data.data.list;
				                      }).catch(function (err) {
	                        console.log(err);
	                      });}
	                  	else if (!self.date1||!self.date2) { self.$message({
		                      title: '警告',
		                      message: '请确认时间',
		                      type: 'warning'
		                    });}else{
	     
				     	axios.get('http://pay.queyoujia.com/user/team/promoter',{params:{startTime:Date.parse(self.date1)/1000,endTime:Date.parse(self.date2)/1000,cid:sessionStorage.cid,channel:sessionStorage.channel,uid:self.idinfo}}).then(function (res) {
				                        console.log(res.data.data);
				                        self.tableData3=[];
				                        self.tableData3=res.data.data.list;
				                      }).catch(function (err) {
	                        console.log(err);
	                      });
	                  	}
        }
  	},
  	lookmore:function () {
        var self =this;
        console.log(22);
        if (self.moreOrelse=='无更多数据') {
          self.loading=false
        }else{
          self.loading=true
        }
        setTimeout(function () {
          self.loading=false;
        },1000)
      }
  },
  mounted(){
  	var self = this;
  	var params={/*startTime:Date.parse(self.date1)/1000,endTime:Date.parse(self.date2)/1000,*/cid:sessionStorage.cid,channel:sessionStorage.channel}
  	axios.post('http://pay.queyoujia.com/user/team/promoter',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
                        console.log(res.data.data);
                        self.tableData3=[];
                        self.number=res.data.data.number;
                        self.chargeall=res.data.data.charge;
                        self.consumeall=res.data.data.consume;
                        self.tableData3=res.data.data.list;
                      }).catch(function (err) {
                        console.log(err);
                      });
                      self.tableH=window.screen.availHeight/3;
                       /*  if (true) {
                            self.moreOrelse='查看更多'
                          }else{
                            self.moreOrelse='无更多数据'
                          } */
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mart{margin-top: 2vh;text-align: center;}
.serbtn button{width: 100%;}
.serbtn{margin-bottom: 2vh;}
.colt{text-align: center;margin-bottom: 1vh;}
.colt>h5{color: #324057;}
.colt>b{color: #20A0FF;font-size: 1rem;font-weight: lighter;margin-top: 1vh;display: block;}
.more{text-align: center;cursor: pointer;color: #5e7382}
.more:active{color: #58B7FF;}
</style>