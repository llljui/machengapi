<template>
<transition name="fade" mode="in-out">
  <div class="commission"   v-loading="loading">
  	<el-col :span="11" :offset="1">
		<div class="brb">
			累计提现
			<h5 class="member" v-html="members"></h5>
		</div>
	</el-col>
	<el-col :span="11" ><div class="brb brrl">
			当前可提现
			<h5 class="member" v-html="agent"></h5>
		</div></el-col>
  	<el-col :span="10" :offset="1" class="mart">
        <el-date-picker type="date" placeholder="选择日期" v-model="date1" style="width: 100%;"></el-date-picker>
    </el-col>
     <el-col :span="2" class="mart">－</el-col>
    <el-col :span="10" class="mart tablet">
        <el-date-picker type="date" placeholder="选择日期" v-model="date2" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col :span="22" :offset="1" class="searchbtn"><div @click="searchinfo" class="searchbtn">查询</div></el-col>
	<el-table
		:key="tabheight"
		:height="tabH"
		class="mart"
	    :data="tableData"
	    border
	    style="width: 100%">
	    <el-table-column
	    align="center"
	      prop="nickname"
	      label="昵称">
	    </el-table-column>
	    <el-table-column
	      align="center"
	      prop="amount"
	      label="金额">
	    </el-table-column>
	    <el-table-column
	      align="center"
	      prop="amountBonus"
	      label="奖金">
	    </el-table-column>
	     <el-table-column
	      align="center"
	      prop="money"
	      label="总金额">
	    </el-table-column>
      <el-table-column label="状态" align="center" prop="status"  sortable  min-width="110">
      <template slot-scope="scope"  align="center">
        <el-button
         align="center"
          size="small"
          @click="handleEdit(scope.$index, scope.row)" :disabled="statusable" :style="{color:btncolor}" :type="btnStatus">{{scope.row.status}}</el-button>
      </template>
    </el-table-column>
  	</el-table>
     <div class="more" @click="lookmore" >{{moreOrelse}}</div>
  	 <!-- <div class="block">
  	 	 	<el-pagination
  	 	 	  class="pagetab"
  	 	 	  small
  	 	      @size-change="handleSizeChange"
  	 	      @current-change="handleCurrentChange"
  	 	      :current-page.sync="currentPage3"
  	 	      :page-size="100"
  	 	      layout="prev,next, jumper"
  	 	      :total="1000">
  	 	    </el-pagination>
  	 	  </div> -->
        <div class="borbg" @click="hshow" v-show="showbor"></div>
        <div class="bor" v-show="showbor">
          <el-col :span="22" :offset="1" class="aaddss">
           <el-input type="number" placeholder="请输入验证码" v-model="checkcode" @change="forinit" :value="myvalues"></el-input>
           <el-button  @click="hpost" type="primary" class="btn">确认</el-button>
            <el-button @click="hshow" class="btn">取消</el-button>
          </el-col>
        </div>
  </div>
</transition>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
export default {
  name: 'commission',
  data () {
    return {
      myvalues:null,
      members:null,
      agent:null,
      date1:null,
      date2:null,
      currentPage3: 5,
	    tableData: [],
	    tabH:null,
      moreOrelse:null,
      loading:false,
      nowpage:'1',
      canable:false,
      yesdate:null,
      todaydate:null,
      amountBonus:[],
      btnStatus:null,
      btncolor:null,
      statusable:null,
      pagesize:null,
      checkcode:null,
      showbor:false,
      newparams:null
    }
  },
  methods:{
    forinit:function () {
      var self=this;
      //self.checkcode=self.myvalues;
      console.log(self.checkcode);
    },
    postinfo:function () {
      var self =this;
      self.showbor=true;
    },
    hpost:function () {
     var self =this;
      axios.post(sessionStorage.weburl+'/user/startlight/exchangeInfo',qs.stringify(self.newparams),{headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then(function (res) {
                    if (res.data.code==0) {
                       self.$message({
                      type: 'success',
                      message: '提现申请成功'
                    });
                    }else{
                      self.$message({
                      type: 'info',
                      message: res.data.message
                    });
                    }
                    }).catch(function () {
                      console.log(err);
                    })
      self.showbor=false;
    },
    hshow:function () {
      var self =this;
      self.showbor=false;
    },
  	searchinfo:function () {
  		console.log(222);
  		var self =this ;
      self.nowpage=1;
      if (self.date2>=self.date1&&((self.date2-self.date1)/86400000)<20) {
         var params={cid:sessionStorage.cid,channel:sessionStorage.channel,startTime:Date.parse(self.date1)/1000,endTime:Date.parse(self.date2)/1000}
           axios.post(sessionStorage.weburl+'/user/startlight/exchangeInfo',qs.stringify(params),{headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then(function (res) {
                           console.log(res);
                           self.nowpage=1;
                           self.tableData=[];
                           self.amountBonus=[];
                           self.tableData=res.data.data.list;
                           res.data.data.list.forEach(function (item,index) {
                           self.tableData[index].amountBonus=item.amountBonus*item.amount;
                           self.tableData[index].money=item.amountBonus*item.amount+item.amount;
                         });
                         setTimeout(function () {
                            self.loading=false;
                          },300)
                         if (self.nowpage<res.data.data.totalPage) {
                             if (res.data.data.list.length<10) {
                             self.moreOrelse='无更多数据'
                             }else{
                              self.moreOrelse='查看更多'
                             }
                          }else{
                            self.moreOrelse='无更多数据'
                          }
                        }).catch(function (err) {
                          console.log(err);
                        })
      }else{
        self.$message({
          title: '警告',
          message: '结束时间不能不开始时间早,且时间间隔不大于20天',
          type: 'warning'
        });
      }
	  	},
      searchinfo2:function () {
      //console.log(222);
       setTimeout(function () {
                              self.loading=false;
                            },300);
      var self =this ;
      var params={cid:sessionStorage.cid,channel:sessionStorage.channel,startTime:Date.parse(self.date1)/1000,endTime:Date.parse(self.date2)/1000,page:self.nowpage};
      axios.post(sessionStorage.weburl+'/user/startlight/exchangeInfo',qs.stringify(params),{headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then(function (res) {
                           console.log(res);
                           var tabletemp=[];
                           tabletemp=res.data.data.list;
                           res.data.data.list.forEach(function (item,index) {
                           tabletemp[index].amountBonus=item.amountBonus*item.amount;
                           tabletemp[index].money=item.amountBonus*item.amount+item.amount;
                         });
                            tabletemp.forEach(function (item,index) {
                                self.tableData.push(item);
                            }) ;
                            setTimeout(function () {
                              self.loading=false;
                            },300);
                          if (self.nowpage<res.data.data.totalPage) {
                             if (res.data.data.list.length<10) {
                             self.moreOrelse='无更多数据'
                             }else{
                              self.moreOrelse='查看更多'
                             }
                          }else{
                            self.moreOrelse='无更多数据'
                          }
                        }).catch(function (err) {
                          console.log(err);
                        })
      },
	  	handleSizeChange(val) {
	        console.log(`每页 ${val} 条`);
	      },
	      handleCurrentChange(val) {
	        console.log(`当前页: ${val}`);
	      },
      lookmore:function () {
         var self =this;
        if (self.moreOrelse=='无更多数据') {
          self.loading=false;
        }else{
          console.log(self.nowpage);
          self.loading=true;
          self.nowpage++;
          self.searchinfo2();
        }
      },
      handleEdit(index, row) {
        var self =this;
        if (row.status=="等待审批") {
            self.showbor=true;
            console.log(row);
            var params={uid:row.uid,status:row.status,orderId:row.orderId,code:self.checkcode,reason:row.reason}
            self.newparams=params;
        }else{
          return;
        }
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
  },
  computed:{
  	tabheight(){
  		var self =this;
  		var device_type = navigator.userAgent;
  		console.log(window.screen.availHeight);
  		if (device_type.indexOf('Nexus')!=-1) {
  			console.log('Nexus');
  			self.tabH=(window.screen.availHeight-500+(560/window.screen.availHeight)*70);
  			console.log(self.tabH);
  		}else{
  			if (window.screen.availHeight<570) {
  				self.tabH='220';
  			}else{
  				self.tabH=(window.screen.availHeight-500+((560/window.screen.availHeight)*110));
  				console.log(device_type);
  			}
  		}

  	}
  },
  mounted(){
  	var self =this ;
      var now = new Date();
      now.setHours('00', '00', '00', '0');
      self.yesdate=now.getTime()/1000-86400;
      self.todaydate=now.getTime()/1000;//获取凌晨时间
    var params={cid:sessionStorage.cid,channel:sessionStorage.channel,/*,sid:'9c8104987b3e7c170121412bb6afd439',toid:'1218482',token:'vk92SYb6349245',uid:'2061160',*/startTime:self.yesdate,endTime:self.todaydate}
    axios.post(sessionStorage.weburl+'/user/startlight/exchangeInfo',qs.stringify(params),{headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then(function (res) {
                           console.log(res);
                           self.tableData=[];
                           self.amountBonus=[];
                           self.tableData=res.data.data.list;
                           self.members=res.data.data.totalSum;
                           self.agent=res.data.data.totalSumNow;
                           res.data.data.list.forEach(function (item,index) {
                           self.tableData[index].amountBonus=item.amountBonus*item.amount;
                           self.tableData[index].money=item.amountBonus*item.amount+item.amount;
                         });
                         setTimeout(function () {
                            self.loading=false;
                          },100)
                          if (self.nowpage<res.data.data.totalPage) {
                             if (res.data.data.list.length<10) {
                             self.moreOrelse='无更多数据'
                             }else{
                              self.moreOrelse='查看更多'
                             }
                          }else{
                            self.moreOrelse='无更多数据'
                          }
                      }).catch(function (err) {
                        console.log(err);
                      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sharecode{margin:2vh 5vw;height: 5vh;border:1px solid #C0CCDA;background: #EFF2F7;border-radius: 3px;text-align: center;color:#1f2d3d;font-family: '微软雅黑';font-weight: lighter;line-height: 5vh; border-radius: 12px;}
.brb{border-bottom: 1px solid #dddddd;margin-top: 1vh;height: 10vh;color:#1F2D3D;font-size: 1rem;font-weight: bold;font-family: '微软雅黑';text-align: center;}
.brrl{ border-left:1px solid #dddddd;}
.member{margin-top: 1vh;width: 100%;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;color: #20A0FF;font-weight: normal;color: #20A0FF;font-size: 1rem;}
.mart{margin-top: 2vh;text-align: center;}
.tablet{margin-bottom: 2vh;color: #1F2D3D;font-size: 0.9rem;font-weight: bold;}
.search{color: #fff;background-color: #50bfff;border-color: #20a0ff;padding: 7px 9px;font-size: 14px;border-radius: 4px;margin-bottom: 2vh;}
.search:active{background-color: #58B7FF;}
.detailbtn{color:#50bfff;border:1px solid #50bfff;}
.searchbtn{text-align:center;background-color: #58B7FF;height: 6vh;color: white;line-height: 6vh;border-radius: 5px;margin-bottom: 2vh;}
.searchbtn:active{background-color: #20A0FF;}
.pagetab{position: absolute;bottom:10vh;}
/* .el-pagination{margin-left: -2.8vw;} */
.tablesc{width: 100%;}
.fade-enter-active, .fade-leave-active {
          transition: opacity .8s
        }
        .fade-enter, .fade-leave-active {
          opacity: 0
        }
.more{text-align: center;cursor: pointer;color: #5e7382}
.more:active{color: #58B7FF;}
.borbg{opacity: 0.6;position: fixed;top: 0;right: 0;left: 0;bottom:0;margin: auto;z-index: 8888;width:100%;height: 100%;background-color: black;}
.bor{position: fixed;top: 0;right: 0;left: 0;bottom:0;margin: auto;z-index: 9888;width:90%;height:30vh;background-color: white;border-radius: 5px;}
.aaddss{padding-top: 8vh;}
.btn{margin-top: 5vh;float: right;margin-right:15vw;}
</style>
