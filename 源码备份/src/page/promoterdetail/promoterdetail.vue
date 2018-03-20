<template>
  <div class="promoterdetail">
    <el-col :span="11" :offset="1" class="mumbername">
      <div class="ote"><span>会员：</span><span class="ttcc">{{username}}</span></div>
    </el-col>
    <el-col :span="10" :offset="1" class="lost">
      <span>剩余钻石：</span><span>{{mydias}}</span>
    </el-col>
        <el-col :span="10" :offset="1">
            <el-date-picker type="date" placeholder="选择日期" v-model="date1" style="width: 100%;margin-top:2vh;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2" style="text-align:center;margin-top:2vh;">-</el-col>
        <el-col :span="10">
            <el-date-picker type="date" placeholder="选择时间" v-model="date2" style="width: 100%;margin-top:2vh;"></el-date-picker>
        </el-col>
    <el-col :span="22" :offset="1" class="bor1">
     <el-button class="btnsearch" type="primary" @click="searchinfo">查询</el-button>
    </el-col>
    <el-col :span="10" :offset="1">
      <h5 class="textc">团队消耗：{{consume}}</h5>
    </el-col>
    <el-col :span="10" >
      <h5 class="textc">团队充值：{{recharge}}</h5>
    </el-col>
    <el-table
      height="270"
      align="center"
      :data="tableData1"
      style="width: 100%">
      <el-table-column
        prop="consume"
        align="center"
        label="团队消耗">
      </el-table-column>
      <el-table-column
        prop="charge"
        align="center"
        label="团队充值">
      </el-table-column>
      <el-table-column
        prop="day"
        min-width="120"
        align="center"
        label="日期">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
export default {
  name: 'promoterdetail',
  data () {
    return {
      date1:null,
      date2:null,
      username:null,
      mydias:null,
      content1:true,
      content2:false,
      bg1:"#20A0FF",
      bg2:"white",
      co1:"white",
      co2:"black",
      tableData1: [],
      tableData2: [],
      consume:null,
      recharge:null
    }
  },
  mounted(){
    var self =this ;
    var params={uid:sessionStorage.promoterid,cid:sessionStorage.cid,channel:sessionStorage.channel}
    axios.post('http://pay.queyoujia.com/user/promoter/detail ',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
                        console.log(res);
                        self.tableData1=[];
                        self.tableData2=[];
                        self.username=res.data.data.nickname+'('+res.data.data.uid+')';
                        self.mydias=res.data.data.diamond;
                        self.consume=res.data.data.consume;
                        self.recharge=res.data.data.charge;
                        self.tableData1=res.data.data.list;
                        self.tableData2=res.data.data.list;
                      }).catch(function (err) {
                        console.log(err);
                      })
  },
  methods:{
    tab:function (val) {
      var self =this;
      if (val=='1') {
        self.content1=true;
        self.bg1="#20A0FF";
        self.co1="white";
        self.bg2="white";
        self.co2="black";
        self.content2=false;
      }else if(val=='2'){
        self.content1=false;
        self.bg1="white";
        self.co1="black";
        self.bg2="#20A0FF";
        self.co2="white";
        self.content2=true;
      }else{return}
    },
    searchinfo:function () {
      var self =this ;
      if (self.date1&&self.date2&&(self.date2-self.date1)>0&&((self.date2-self.date1)/86400000)<20) {
        var params={startTime:self.date1,endTime:self.date2,uid:sessionStorage.promoterid,cid:sessionStorage.cid,channel:sessionStorage.channel}
      axios.post('http://pay.queyoujia.com/user/promoter/detail',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
                        console.log(res);
                        self.tableData1=[];
                        self.tableData2=[];
                        self.username=res.data.data.nickname+'('+res.data.data.uid+')';
                        self.mydias=res.data.data.diamond;
                        self.consume=res.data.data.consume;
                        self.recharge=res.data.data.charge;
                        self.tableData1=res.data.data.list;
                        self.tableData2=res.data.data.list;
                      }).catch(function (err) {
                        console.log(err);
                      })
      }else{
        self.$message({
          title: '警告',
          message: '请核实输入时间，时间间隔不超过20天',
          type: 'warning'
        });
      }
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mumbername,.lost{
  display: block;
  height: 2vh;
  font-family: '微软雅黑';
  font-size: 1rem;
  font-weight: lighter;
  margin-top: 2vh;
  color: #324057;
}
.lost{font-family: '微软雅黑';
  font-size: 1rem;
  display: block;
  height: 2vh;
  font-weight: lighter;
  margin-top: 2vh;
  color: #324057;}
.bor1{border:1px solid #ddd;border-right: 0;height: 6vh;margin-top: 4vh;text-align: center;line-height: 6vh;}
.bor2{border:1px solid #ddd;height: 6vh;margin-top: 4vh;text-align: center;line-height: 6vh;}
.textc{font-size: 1rem;font-weight: lighter;font-family: '微软雅黑';margin-top:2vh; margin-bottom: 2vh;text-align: center;}
.ote{width: 100%;height:3.6vh;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;}
.ttcc{display: inline-block;width: 3vw;}
.btnsearch{width: 100%;}
</style>
