<template>
<transition name="fade" mode="in-out">
  <div class="perdetail"   v-loading="loading">
	    <el-col :span="10" :offset="1" class="mart">
        <el-date-picker type="date" placeholder="选择日期" v-model="date1" style="width: 100%;"></el-date-picker>
    </el-col>
     <el-col :span="2" class="mart">-</el-col>
    <el-col :span="10" class="mart tablet">
        <el-date-picker type="date" placeholder="选择日期" v-model="date2" style="width: 100%;"></el-date-picker>
    </el-col>
	    <el-col :span="22" :offset="1"><el-button type="primary" @click="onSubmit" class="btnser mart">查找</el-button></el-col>
	<el-table
    :data="tableData"
    :height="tableH"
    border
    style="width: 100%">
    <el-table-column
      prop="nickName"
      label="昵称">
    </el-table-column>
    <el-table-column
      prop="number"
      width="120"
      label="绑定玩家数">
    </el-table-column>
    <el-table-column
      prop="charge"
      label="总充值">
    </el-table-column>
    <el-table-column
      prop="pNickName"
      width="100"
      label="上级代理">
    </el-table-column>
  </el-table>
  <div class="more" @click="lookmore">{{moreOrelse}}</div>
  </div>
  </transition>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
export default {
  name: 'perdetail',
  data () {
    return {
      value6:'',
      date1:null,
      date2:null,
      tableData:[],
      tableH:null,
      moreOrelse:null,
      loading:false,
      pagesize:null,
      pagenow:1
    }
  },
  methods:{
  	  onSubmit() {
        var self =this ;
        self.pagenow=1;
        var params={cid:'2',channel:"fuyang",'page':1,startTime:Date.parse(self.date1)/1000,endTime:Date.parse(self.date2)/1000}
        axios.post('      http://pay.queyoujia.com/user/team/infoPartner',qs.stringify(params),{headers: {
                              'Content-Type': 'application/x-www-form-urlencoded'
                        }}).then(function (res) {
                          console.log(res);
                          self.tableData=[];
                          self.tableData=res.data.data.list;
                          if (self.pagesize<res.data.data.total) {
                            self.moreOrelse='查看更多'
                          }else{
                            self.moreOrelse='无更多数据'
                          }
                        }).catch(function (err) {
                          console.log(err);
                        })
      },
       onSubmit2() {
        var self =this ;
        var params={cid:sessionStorage.cid,channel:sessionStorage.channel,'page':self.pagenow,startTime:Date.parse(self.date1)/1000,endTime:Date.parse(self.date2)/1000,page:self.pagenow}
        axios.post('http://pay.queyoujia.com/user/team/infoPartner',qs.stringify(params),{headers: {
                              'Content-Type': 'application/x-www-form-urlencoded'
                        }}).then(function (res) {
                          console.log(res);
                          tabletemp=res.data.data.list;
                          tabletemp.forEach(function (item,index) {
                            self.tableData.push(item);
                          })
                          if (self.pagesize<res.data.data.total) {
                            self.moreOrelse='查看更多'
                          }else{
                            self.moreOrelse='无更多数据'
                          }
                        }).catch(function (err) {
                          console.log(err);
                        })
      },
      lookmore:function () {
         var self =this;
        console.log(22);
        if (self.moreOrelse=='无更多数据') {
          self.loading=false
        }else{
          self.pagenow++;
          self.loading=true;
          self.onSubmit2();
        }
        setTimeout(function () {
          self.loading=false;
        },1000)
      }
  },
  mounted(){
     /* var self =this ;
      var now = new Date();
      now.setHours('00', '00', '00', '0');*/
      /*self.yesdate=now.getTime()/1000-86400;
      self.todaydate=now.getTime()/1000;//获取凌晨时间*/
      var self=this;
      self.pagesize=1;
      var params={cid:sessionStorage.cid,channel:sessionStorage.channel,'page':1}
      axios.post('http://pay.queyoujia.com/user/team/infoPartner',qs.stringify(params),{headers: {
                              'Content-Type': 'application/x-www-form-urlencoded'
                        }}).then(function (res) {
                          console.log(res);
                          self.tableData=[];
                          self.tableData=res.data.data.list;
                          if (self.pagesize<res.data.data.total) {
                            self.moreOrelse='查看更多'
                          }else{
                            self.moreOrelse='无更多数据'
                          }
                        }).catch(function (err) {
                          console.log(err);
                        });
    self.tableH=window.screen.availHeight/2.1;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btnser{width: 100%;margin-bottom: 2vh;}
.mart{margin-top: 2vh;text-align: center}
.fade-enter-active, .fade-leave-active {
          transition: opacity .5s
        }
        .fade-enter, .fade-leave-active {
          opacity: 0
        }
.more{text-align: center;cursor: pointer;color: #5e7382;}
.more:active{color: #58B7FF;}
</style>
