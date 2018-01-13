<template>
  <transition name="fade" mode="in-out">
  <div class="teamrechanger">
  	<el-col :span="22" class="sharecode" v-html="yqcode"></el-col>
	<el-col :span="8" >
		<div class="brb">
			直属会员
			<h5 class="member" v-html="members"></h5>
		</div>
	</el-col>
	<el-col :span="8" ><div class="brb brrl">
			下级推广员
			<h5 class="member" v-html="agent"></h5>
		</div></el-col>
	<el-col :span="8" ><div class="brb">
			返利总额
			<h5 class="member" v-html="rewardall"></h5>
	</div>
	</el-col>
    <el-col :span="10" :offset="1" class="mart">
        <el-date-picker :default-value="yesdate" type="date"  placeholder="选择日期" v-model="date1" style="width: 100%;"></el-date-picker>
    </el-col>
     <el-col :span="2" class="mart">-</el-col>
    <el-col :span="10" class="mart tablet">
        <el-date-picker :default-value="todaydate" type="date"  placeholder="选择日期"  v-model="date2" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col :span="22" :offset="1" class="search"><el-button width="100%" @click="searchinfo" type="primary">查询</el-button></el-col>
    <el-col :span="10" :offset="1" class="tablet">充值总额：<span>{{rechargeall}}</span>元</el-col>
    <el-col :span="10" :offset="2" class="tablet">返现总额：<span>{{returnall}}</span>元</el-col>
     <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
    align="center"
    width="95"
      label="代理级别">
      <template slot-scope="scope">
      {{scope.row.name}}返({{scope.row.percent}}%)
      </template>
    </el-table-column>
    <el-table-column
      label="充值总额"
      width="100"
      align="center">
      <template slot-scope="scope">
       {{scope.row.charge}}<br>返({{scope.row.reward}})
      </template>
    </el-table-column>
    <el-table-column
    align="center"
    width="95"
      label="钻石消耗">
      <template slot-scope="scope">
          {{scope.row.consume}}
      </template>
    </el-table-column>
    <el-table-column label="操作" align="center">
      <template slot-scope="scope">
        <el-button
        align="left"
          class="detailbtn"
          size="small"
          @click="handleEdit(scope.$index, scope.row)">明细</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</transition>
</template>

<script>
import axios from "axios";
import qs from "qs";
export default {
  name: 'teamrechanger',
  data () {
    return {
      input1:null,
      yqcode:null,
      date1:'',
      date2:'',
      tableData: [],
      members:null,
      rewardall:null,
      agent:null,
      rechargeall:null,
      returnall:null,
      yesdate:null,
      todaydate:null
    }
  },
  methods:{
  	  handleEdit(index, row) {
        var self = this;
        if (index==0) {
          this.$router.push({path: '/teamdetail'});
        }else if(index==1){
          this.$router.push({path: '/secdetail'});
        }else{return}
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      searchinfo:function () {
        var self =this ;
        console.log(self.date1);
        if (self.date1&&self.date2) {
          if (self.date2>=self.date1) {
            var params={startTime:self.date1,endTime:self.date2,cid:sessionStorage.cid,channel:sessionStorage.channel}
          axios.post('http://pay.queyoujia.com/user/team/info',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
                        console.log(res.data.data);
                        self.tableData=[];
                        self.yqcode="邀请码："+res.data.data.no;
                        self.tableData=res.data.data.list;
                        self.rechargeall=res.data.data.chargeTotal;
                        self.members=res.data.data.member;
                        self.rewardall=res.data.data.starlight;
                        self.agent=res.data.data.agent;
                        self.returnall=res.data.data.rewardTotal;
                      }).catch(function (err) {
                        console.log(err);
                      })
                    }
                  else{
                     self.$message({
                      title: '警告',
                      message: '结束时间不能不开始时间早',
                      type: 'warning'
                    });
                  }    
        }else{
          self.$message({
          title: '警告',
          message: '请核实输入时间',
          type: 'warning'
        });
        }}
        
},
mounted:function () {
  var self =this;
  var params={startTime:self.date1,endTime:self.date2,cid:sessionStorage.cid,channel:sessionStorage.channel};
  axios.post('http://pay.queyoujia.com/user/team/info',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
                       // console.log(res.data.data);
                        self.yqcode="邀请码："+res.data.data.no;
                        self.tableData=res.data.data.list;
                        self.members=res.data.data.member;
                        self.rewardall=res.data.data.starlight;
                        self.agent=res.data.data.agent;
                        self.rechargeall=res.data.data.chargeTotal;
                        self.returnall=res.data.data.rewardTotal;
                      }).catch(function (err) {
                        console.log(err);
                      }); 
                      /*var now = new Date();
                      now.setHours('00', '00', '00', '0');
                      self.yesdate=now.getTime()/1000-86400;
                      self.todaydate=now.getTime()/1000;*///获取凌晨时间
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{text-align: center;}
.sharecode{margin:2vh 5vw;height: 5vh;border:1px solid #C0CCDA;background: #EFF2F7;border-radius: 3px;text-align: center;color:#1f2d3d;font-family: '微软雅黑';font-weight: lighter;line-height: 5vh; border-radius: 12px;}
.brb{border-bottom: 1px solid #dddddd;margin-top: 1vh;height: 8vh;color:#1F2D3D;font-size: 0.9rem;font-weight: bold;font-family: '微软雅黑';}
.brrl{border-right:1px solid #dddddd; border-left:1px solid #dddddd;}
.member{margin-top: 1vh;width: 100%;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;color: #20A0FF;font-weight: normal;}
.mart{margin-top: 2vh;}
.tablet{margin-bottom: 2vh;color: #1F2D3D;font-size: 0.9rem;font-weight: bold;}
.search{border-color: #20a0ff;padding: 7px 9px;font-size: 14px;border-radius: 4px;margin-bottom: 2vh;}
.search button{width: 100%;}
.detailbtn{color:#50bfff;border:1px solid #50bfff;}
.detailbtn[data-v-5213ce80]{margin-left: -2vw;}
.fade-enter-active, .fade-leave-active {
          transition: opacity .5s
        }
        .fade-enter, .fade-leave-active {
          opacity: 0
        }
</style>