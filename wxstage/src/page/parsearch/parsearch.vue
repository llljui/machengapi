<template>
  <transition name="fade" mode="in-out">
  <div class="parsearch" v-loading="loading2">
  	<el-row>
	  	<el-col :span="11" :offset="1" class="mart">
	  		<h5>总推广代理</h5>
	  		<span>{{promoterNumber}}</span>
	  	</el-col>
	  	<el-col :span="11"  class="mart">
	  		<h5>总用户</h5>
	  		<span>{{bindNumber}}</span>
	  	</el-col>
	</el-row>
	<el-row class="marb">
	  	<el-col :span="11" :offset="1" class="mart">
	  		<h5>总充值</h5>
	  		<span>{{charge}}</span>
	  	</el-col>
	  	<el-col :span="11"  class="mart">
	  		<h5>净利润</h5>
	  		<span>{{reward}}</span>
	  	</el-col>
	</el-row>
  <el-col :span="22" :offset="1"><hr class="hrs"></el-col>
  <el-row>
  <el-col :span="10" :offset="1" class="mart">
        <el-date-picker type="date" placeholder="选择日期" v-model="date1" style="width: 100%;" @change="picktime(1)"></el-date-picker>
    </el-col>
     <el-col :span="2" class="mart">-</el-col>
    <el-col :span="10" class="mart tablet">
        <el-date-picker type="date" placeholder="选择日期" v-model="date2" style="width: 100%;" @change="picktime(2)"></el-date-picker>
    </el-col>
  </el-row>
  <el-row>
      <el-col :span="11" :offset="1" class="mart">
        <h5>今日充值</h5>
        <span>{{trecharge}}</span>
      </el-col>
      <el-col :span="11"  class="mart">
        <h5>今日净利润</h5>
        <span>{{treward}}</span>
      </el-col>
  </el-row>
  <el-row class="marb">
      <el-col :span="11" :offset="1" class="mart">
        <h5>今新增代理</h5>
        <span>{{tmumber}}</span>
      </el-col>
      <el-col :span="11"  class="mart">
        <h5>今新增用户</h5>
        <span>{{tadduser}}</span>
      </el-col>
  </el-row>
  <el-col :span="22" :offset="1"><hr class="hrs"></el-col>
   <el-col :span="22" :offset="1" class="search"><el-button @click="searchinfo" type="primary">明细查询</el-button></el-col>
 </div>
</transition>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
export default {
  name: 'parsearch',
  data () {
    return {
      msg: 'p',
      date1:null,
      date2:null,
      tableData: [],
        currentPage3: 1,
        btns:[1,2,3,4,5,6,7,8,9],
        lastp:null,
        nowp:null,
        wpage:null,
        tabH:null,
        promoterNumber:null,
        bindNumber:null,
        charge:null,
        reward:null,
        loading2:false,
        yesdate:null,
        todaydate:null,
        tadduser:null,
        tmumber:null,
        treward:null,
        trecharge:null
    }
  },
  methods:{
  	searchinfo:function () {
  		var self =this ;
      self.$router.push({path:'/perdetail'})
  	},
  	handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      go:function (index) {
      	console.log(index);
      },
      scrolltab:function () {
        console.log(222);
      },
      picktime:function (val) {
        var self = this;
        //console.log(val);
       if (self.date1&&self.date2) {
          if (self.date2>=self.date1) {
          var params={cid:sessionStorage.cid,channel:sessionStorage.channel,/*sid:'9c8104987b3e7c170121412bb6afd439',toid:'1218482',token:'vk92SYb6349245',*/startTime:Date.parse(self.date1)/1000,endTime:Date.parse(self.date2)/1000}
                    axios.post('      http://pay.queyoujia.com/user/team/infoPartner',qs.stringify(params),{headers: {
                                            'Content-Type': 'application/x-www-form-urlencoded'
                        }}).then(function (res) {
                           self.treward=res.data.data.charge-res.data.data.reward;
                           self.trecharge=res.data.data.charge;
                           self.tmumber=res.data.data.bindNumber;
                           self.tadduser=res.data.data.promoterNumber;
                           if (!self.treward) {
                            self.treward=0;
                           }if (!self.trecharge) {
                             self.trecharge=0;
                           }
                           if (!self.tmumber) {
                            self.tmumber=0;
                           }if (!self.tadduser) {
                             self.tadduser=0;
                           }
                          setTimeout(function () {
                            self.loading2=true;
                          },100);
                          setTimeout(function () {
                            self.loading2=false;
                          },1000);
                          console.log(res);

                        }).catch(function (err) {
                          console.log(err);
                        })
          }else{
             self.$message({
              showClose: true,
              message: '结束时间不能比开始时间早',
              type: 'warning'
        });
          }
       }else{
        return;
       }
      }
  },
  mounted(){
  	var self =this;
  /*	self.lastp=self.btns.length;*/
     var now = new Date();
     now.setHours('00', '00', '00', '0');
     self.yesdate=now.getTime()/1000-86400;
     self.todaydate=now.getTime()/1000;//获取凌晨时间
     var params={startTime:self.yesdate,page:'1',cid:sessionStorage.cid,channel:sessionStorage.channel,sid:'9c8104987b3e7c170121412bb6afd439',toid:'1218482',token:'vk92SYb6349245',endTime: self.todaydate}//当天的
     var params2={page:'1',cid:'2',channel:"fuyang",sid:'9c8104987b3e7c170121412bb6afd439',toid:'1218482',token:'vk92SYb6349245'}//总的

     axios.post('http://pay.queyoujia.com/user/team/infoPartner',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
     console.log(res);
     self.treward=res.data.data.charge-res.data.data.reward;
     self.trecharge=res.data.data.charge;
     self.tmumber=res.data.data.bindNumber;
     self.tadduser=res.data.data.promoterNumber;
     if (!self.treward) {
      self.treward=0;
     }if (!self.trecharge) {
       self.trecharge=0;
     }
     if (!self.tmumber) {
      self.tmumber=0;
     }if (!self.tadduser) {
       self.tadduser=0;
     }
    }).catch(function (err) {
     console.log(err);
    });

    axios.post('http://pay.queyoujia.com/user/team/teamPartner',qs.stringify(params2),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
     console.log(res);
     self.reward=res.data.data.charge-res.data.data.reward;
     self.charge=res.data.data.charge;
     self.bindNumber=res.data.data.bindNumber;
     self.promoterNumber=res.data.data.promoterNumber;
     if (!self.reward) {
      self.reward=0;
     }if (!self.charge) {
       self.charge=0;
     }
     if (!self.bindNumber) {
      self.bindNumber=0;
     }if (!self.promoterNumber) {
       self.promoterNumber=0;
     }
    }).catch(function (err) {
     console.log(err);
    })

  },
  computed:{
  	tabheight(){
  		var self =this;
  		var device_type = navigator.userAgent;
  		console.log(window.screen.availHeight);
  		if (device_type.indexOf('Nexus')!=-1) {
  			console.log('Nexus');
  			self.tabH=(window.screen.availHeight-500-(560/window.screen.availHeight)*40);
  		}else{
  			if (window.screen.availHeight<570) {
  				self.tabH='350';
  			}else{
  				self.tabH=(window.screen.availHeight-500+((560/window.screen.availHeight)*30));		
  				console.log(device_type);
  			}
  		}	
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mart{text-align: center;margin-top: 3vh;}
.mart span{color: #58B7FF;}
.mart h5{color: #485769;}
.search button{width: 100%;margin-top: 2vh;}
.block{margin-top:1vh;}
.block ul li button{display: inline-block;float: left;margin-left: 1vw;}
.block ul li:active{background-color: blue;}
.gopage{font-size: 0.8rem;line-height: 200%;float: right;}
.goes{display: inline-block;width:10vw;margin-left: 3vw;border: 1px solid #50bfff;border-radius: 3px;margin-right:1vw;}
.goes[data-v-f5c28124] input{width:2vw;height:3vh!important;}
/* .el-pagination{margin-left: -2vw;} */
.pagetab{position: absolute;bottom:10vh;}
.tablesc{width: 100%;}
.marb{margin-bottom: 5px;}
.borr{border-right: 1px solid #ddd;}
.hrs{border:0;border-bottom:1px solid #ddd;}
.fade-enter-active, .fade-leave-active {
          transition: opacity .5s
        }
        .fade-enter, .fade-leave-active {
          opacity: 0
        }
</style>