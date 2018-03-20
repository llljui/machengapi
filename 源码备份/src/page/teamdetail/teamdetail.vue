<template>
  <transition name="fade" mode="in-out">
  <div class="teamdetail" v-loading="loading" :key="tbkey"> 
    <el-col :span="10" :offset="1" class="mart">
        <el-date-picker type="date" placeholder="选择日期" v-model="date1" style="width: 100%;"></el-date-picker>
    </el-col>
     <el-col :span="2"  class="mart">-</el-col>
    <el-col :span="10" class="mart tablet">
        <el-date-picker type="date" placeholder="选择日期" v-model="date2" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col :span='22' :offset="1" class="mart">
      <el-input placeholder="请输入游戏ID" v-model="uids"></el-input>
    </el-col>
    <el-col :span='22' :offset="1" class="mart serbtn">
      <el-button @click="searchinfo" class="btnser" type="primary">查询</el-button>
  </el-col>
<el-col :span="11" :offset="1" class="cusdetail" :style="{background:tabg1,color:col1}"><div @click="tabbg(1)">钻石消耗明细</div></el-col>
<el-col :span="11" class="recdetail" :style="{background:tabg2,color:col2}"><div @click="tabbg(2)">充值明细</div></el-col>
  <div v-show='isShow1'>
    <el-col :span="11" :offset="1" class="rechargeM">充值金额<br><span class="textb">{{chargemount}}</span></el-col>
    <el-col :span="11" class="returndetail">返利总额<br><span class="textb">{{rewardmount}}</span></el-col>
     <el-table
        :data="tableData3"
        :height="TDheight"
        border
        style="width: 100%">
        <el-table-column
          prop="uid"
          min-width="100"
          align="center"
          label="游戏ID">
        </el-table-column>
        <el-table-column
          prop="nickname"
          min-width="100"
          align="center"
          label="游戏昵称">
        </el-table-column>
        <el-table-column
          prop="amount"
          min-width="100"
          align="center"
          label="充值金额">
        </el-table-column>
        <el-table-column
          prop="paidTime"
          width="110"
          align="center"
          label="充值时间">
        </el-table-column>
     </el-table>
     <div class="more" @click="lookmore" v-show="pag1">{{moreOrelse}}</div>
     <div class="more" @click="lookmore" v-show="pag2">{{pagesize}}</div>
  </div>
  <div v-show='isShow2'>
  <el-col :span="22" :offset='1' class="mart brb">钻石消耗总额：<span class="textb">{{consumeall}}颗</span></el-col>
  <el-table
        :data="tableData2"
        :height="TDheight"
        border
        style="width: 100%;">
        <el-table-column
          prop="uid"
            min-width="100"
          align="center"
          label="游戏ID">
        </el-table-column>
        <el-table-column
          prop="nickname"
           min-width="100"
          align="center"
          label="游戏昵称">
        </el-table-column>
        <el-table-column
          prop="amount"
            min-width="100"
          align="center"
          label="钻石消耗">
        </el-table-column>
        <el-table-column
          prop="dateline"
          align="center"
          width="110"
          label="消耗时间">
        </el-table-column>
     </el-table>
     <div class="more" @click="lookmore(1)" v-show="pag1">{{moreOrelse}}</div>
     <div class="more" @click="lookmore(2)" v-show="pag2">{{pagesize}}</div>
  </div>
  </div>
</transition>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'teamdetail',
  data () {
    return {
       activeName: 'second',
       date1:null,
       date2:null,
       tabg1:"#20a0ff",
       tabg2:"white",
       col1:"white",
       col2:"#20A0FF",
        tableData3: [],
        tableData2: [],
        tabbg1:true,
        tabbg2:false,
        isShow1:true,
        isShow2:false,
        classshow:true,
        classshow2:true,
        consumeall:null,
        chargemount:null,
        rewardmount:null,
        uids:null,
        loading:false,
        TDheight:null,
        moreOrelse:null,
        pagesize:null,
        pg1:1,
        pg2:1,
        pag1:true,
        pag2:false,
        total1:null,
        total2:null,
        pagechose:null
    }
  },
  methods:{
     handleClick(tab, event) {
      var self =this;
        console.log(tab, event);
      },
      lookmore:function (val) {
        var self =this;
        if (val==1) {
           if (self.moreOrelse=='无更多数据') {
              self.loading=false;
            }else{
              self.loading=true;
              self.pagechose=self.pg1++;
              self.searchinfo2();
            }
        }else if(val==2){
          if (self.pagesize=='无更多数据') {
              self.loading=false
            }else{
              self.loading=true;
              self.pagechose=self.pg2++;
              self.searchinfo2();
            }
        }else{return}
        setTimeout(function () {
          self.loading=false;
        },1000)
      },
      tabbg(val) {
        self =this;
        if (val==1) {
          console.log(self.isShow1);
          self.isShow2=true;
          self.isShow1=false;
          self.tabg1="#20A0FF";
          self.col1="white";
          self.tabg2="white";
          self.col2="#20A0FF";
          self.pag1=true;
          self.pag2=false;
          self.searchinfo();
        }else if(val==2){
          console.log(self.isShow2);
          self.isShow1=true;
          self.isShow2=false;
          self.tabg2="#20A0FF";
          self.col2="white";
          self.tabg1="white";
          self.col1="#20A0FF";
          self.pag1=false;
          self.pag2=true;
          self.searchinfo();
        }else{return;}
      },
      searchinfo2:function () {
         var self =this ;
        var temp1=self.isShow1;
        var temp2=self.isShow2;
        /*self.isShow2=true;
        self.isShow1=true;
        self.loading=true;*/
        self.pagechose=1;
        if (self.date1&&self.date2) {
           if (self.date2>=self.date1&&((self.date2-self.date1)/86400000)<20) {
            axios.get('http://pay.queyoujia.com/user/charge/member',{params:{'uid':self.uids,'startTime':Date.parse(self.date1)/1000,'endTime':Date.parse(self.date2)/1000,'cid':sessionStorage.cid,'channel':sessionStorage.channel,page:self.pagechose}}).then(function (res) {
                                var tabletemp=[];
                                tabletemp=res.data.data.charge;
                                tabletemp.forEach(function (item,index) {
                                  self.tableData3.push(item);
                                })
                                //self.consumeall=res.data.data.consumeTotal;
                                self.chargemount=res.data.data.chargeTotal;
                                self.rewardmount=res.data.data.reward;
                                self.isShow2=temp2;
                                self.isShow1=temp1;


                                 if (self.pg2<res.data.data.total) {
                                 self.pagesize='查看更多'
                                  
                                }else{
                                  self.pagesize='无更多数据'
                                }
                                setTimeout(function(){self.loading=false;},500);
                    console.log(res);
                  }).catch(function (error) {
                    console.log(error);
                  }); 
                  axios.get('http://pay.queyoujia.com/user/consume/member',{params:{'uid':self.uids,'startTime':Date.parse(self.date1)/1000,'endTime':Date.parse(self.date2)/1000,'cid':sessionStorage.cid,'channel':sessionStorage.channel,page:self.pagechose}}).then(function (res) {
                                     tabletemp=res.data.data.consume;
                            tabletemp.forEach(function (item,index) {
                                  self.tableData2.push(item);
                                })
                            self.consumeall=res.data.data.consumeTotal;
                                      if (self.pg1<res.data.data.total) {
                                                   self.pagesize='查看更多'
                                                    
                                                  }else{
                                                    self.pagesize='无更多数据'
                                                  }
                  }).catch(function (error) {
                    console.log(error);
                  });        
                }
      else{
         self.$message({
          title: '警告',
          message: '结束时间不能不开始时间早,且时间间隔不大于20天',
          type: 'warning'
        });
         self.loading=false;
      } 
      }
     else{
      if(!self.uids&&!self.date1||!self.date2){
        axios.get('http://pay.queyoujia.com/user/charge/member',{params:{'uid':self.uids,'startTime':Date.parse(self.date1)/1000,'endTime':Date.parse(self.date2)/1000,'cid':sessionStorage.cid,'channel':sessionStorage.channel,page:self.pagechose}}).then(function (res) {
                              console.log(res);
                       tabletemp=res.data.data.charge;
                                tabletemp.forEach(function (item,index) {
                                  self.tableData3.push(item);
                                })
                      self.chargemount=res.data.data.chargeTotal;
                      self.rewardmount=res.data.data.reward;
                      self.isShow2=temp2;
                      self.isShow1=temp1;
                       if (self.pg1<res.data.data.total) {
                                 self.pagesize='查看更多'
                                  
                                }else{
                                  self.pagesize='无更多数据'
                                }
                      setTimeout(function(){self.loading=false;},500);
          console.log(res);
        }).catch(function (error) {
          console.log(error);
        }); 
        axios.get('http://pay.queyoujia.com/user/consume/member',{params:{'uid':self.uids,'startTime':Date.parse(self.date1)/1000,'endTime':Date.parse(self.date2)/1000,page:self.pagechose,'cid':sessionStorage.cid,'channel':sessionStorage.channel}}).then(function (res) {
                            tabletemp=res.data.data.consume;
                            tabletemp.forEach(function (item,index) {
                                  self.tableData2.push(item);
                                })
                            self.consumeall=res.data.data.consumeTotal;
                          if (self.pg2<res.data.data.total) {
                                self.moreOrelse='查看更多'                        
                              }else{
                                self.moreOrelse='无更多数据'
                              }
          console.log(res);
        }).catch(function (error) {
          console.log(error);
        });
      }
      else if (!self.date1||!self.date2) {self.$message({
                          title: '警告',
                          message: '请确认时间',
                          type: 'warning'
                        });}else{
        axios.get('http://pay.queyoujia.com/user/charge/member',{params:{'uid':self.uids,'startTime':Date.parse(self.date1)/1000,'endTime':Date.parse(self.date2)/1000,page:self.pagechose,'cid':sessionStorage.cid,'channel':sessionStorage.channel}}).then(function (res) {
                                      tabletemp=res.data.data.charge;
                                tabletemp.forEach(function (item,index) {
                                  self.tableData3.push(item);
                                })
                              self.chargemount=res.data.data.chargeTotal;
                              self.rewardmount=res.data.data.reward;
                              self.isShow2=temp2;
                              self.isShow1=temp1;
                                if (self.pg1<res.data.data.total) {
                                 self.pagesize='查看更多'
                                  
                                }else{
                                  self.pagesize='无更多数据'
                                }
                              setTimeout(function(){self.loading=false;},500);
                  console.log(res);
                }).catch(function (error) {
                  console.log(error);
                }); 
        axios.get('http://pay.queyoujia.com/user/consume/member',{params:{'uid':self.uids,'startTime':Date.parse(self.date1)/1000,'endTime':Date.parse(self.date2)/1000,'cid':sessionStorage.cid,'channel':sessionStorage.channel,page:self.pagechose}}).then(function (res) {
                          tabletemp=res.data.data.consume;
                            tabletemp.forEach(function (item,index) {
                                  self.tableData3.push(item);
                                })
                            self.consumeall=res.data.data.consumeTotal;
                          self.total2=res.data.data.total;
                          if (self.pg2<res.data.data.total) {
                                self.moreOrelse='查看更多'                        
                              }else{
                                self.moreOrelse='无更多数据'
                              }
            }).catch(function (error) {
              console.log(error);
            }); 
                          }
       self.loading=false;
    }   
      },
      searchinfo:function(){
        var self =this ;
        var temp1=self.isShow1;
        var temp2=self.isShow2;
        /*self.isShow2=true;
        self.isShow1=true;
        self.loading=true;*/
        self.pagechose=1;
        if (self.date1&&self.date2) {
           if (self.date2>=self.date1&&((self.date2-self.date1)/86400000)<20) {
            axios.get('http://pay.queyoujia.com/user/charge/member',{params:{'uid':self.uids,'startTime':Date.parse(self.date1)/1000,'endTime':Date.parse(self.date2)/1000,'cid':sessionStorage.cid,'channel':sessionStorage.channel,page:self.pagechose}}).then(function (res) {
                                  self.tableData3=[];
                                //self.consumeall=res.data.data.consumeTotal;
                                self.tableData3=res.data.data.charge;
                                self.chargemount=res.data.data.chargeTotal;
                                self.rewardmount=res.data.data.reward;
                                self.isShow2=temp2;
                                self.isShow1=temp1;
                                 if (self.pg2<res.data.data.total) {
                                 self.pagesize='查看更多'
                                  
                                }else{
                                  self.pagesize='无更多数据'
                                }
                                setTimeout(function(){self.loading=false;},500);
                    console.log(res);
                  }).catch(function (error) {
                    console.log(error);
                  }); 
                  axios.get('http://pay.queyoujia.com/user/consume/member',{params:{'uid':self.uids,'startTime':Date.parse(self.date1)/1000,'endTime':Date.parse(self.date2)/1000,'cid':sessionStorage.cid,'channel':sessionStorage.channel,page:self.pagechose}}).then(function (res) {
                                      self.tableData2=[];
                                      self.consumeall=res.data.data.consumeTotal;
                                      self.tableData2=res.data.data.consume;
                                      if (self.pg1<res.data.data.total) {
                                                   self.pagesize='查看更多'
                                                    
                                                  }else{
                                                    self.pagesize='无更多数据'
                                                  }
                  }).catch(function (error) {
                    console.log(error);
                  });        
                }
      else{
         self.$message({
          title: '警告',
          message: '结束时间不能不开始时间早,且时间间隔不大于20天',
          type: 'warning'
        });
         self.loading=false;
      } 
      }
     else{
      if(!self.uids&&!self.date1||!self.date2){
        axios.get('http://pay.queyoujia.com/user/charge/member',{params:{'uid':self.uids,'startTime':Date.parse(self.date1)/1000,'endTime':Date.parse(self.date2)/1000,'cid':sessionStorage.cid,'channel':sessionStorage.channel,page:self.pagechose}}).then(function (res) {
                              console.log(res);
                        self.tableData3=[];
                      //self.consumeall=res.data.data.consumeTotal;
                      self.tableData3=res.data.data.charge;
                      self.chargemount=res.data.data.chargeTotal;
                      self.rewardmount=res.data.data.reward;
                      self.isShow2=temp2;
                      self.isShow1=temp1;
                       if (self.pg1<res.data.data.total) {
                                 self.pagesize='查看更多'
                                  
                                }else{
                                  self.pagesize='无更多数据'
                                }
                      setTimeout(function(){self.loading=false;},500);
          console.log(res);
        }).catch(function (error) {
          console.log(error);
        }); 
        axios.get('http://pay.queyoujia.com/user/consume/member',{params:{'uid':self.uids,'startTime':Date.parse(self.date1)/1000,'endTime':Date.parse(self.date2)/1000,page:self.pagechose,'cid':sessionStorage.cid,'channel':sessionStorage.channel}}).then(function (res) {
                            self.tableData2=[];
                            self.consumeall=res.data.data.consumeTotal;
                            self.tableData2=res.data.data.consume;
                          if (self.pg2<res.data.data.total) {
                                self.moreOrelse='查看更多'                        
                              }else{
                                self.moreOrelse='无更多数据'
                              }
          console.log(res);
        }).catch(function (error) {
          console.log(error);
        });
      }
      else if (!self.date1||!self.date2) {self.$message({
                          title: '警告',
                          message: '请确认时间',
                          type: 'warning'
                        });}else{
        axios.get('http://pay.queyoujia.com/user/charge/member',{params:{'uid':self.uids,'startTime':Date.parse(self.date1)/1000,'endTime':Date.parse(self.date2)/1000,page:self.pagechose,'cid':sessionStorage.cid,'channel':sessionStorage.channel}}).then(function (res) {
                                      console.log(res);
                                self.tableData3=[];
                              //self.consumeall=res.data.data.consumeTotal;
                              self.tableData3=res.data.data.charge;
                              self.chargemount=res.data.data.chargeTotal;
                              self.rewardmount=res.data.data.reward;
                              self.isShow2=temp2;
                              self.isShow1=temp1;
                                if (self.pg1<res.data.data.total) {
                                 self.pagesize='查看更多'
                                  
                                }else{
                                  self.pagesize='无更多数据'
                                }
                              setTimeout(function(){self.loading=false;},500);
                  console.log(res);
                }).catch(function (error) {
                  console.log(error);
                }); 
        axios.get('http://pay.queyoujia.com/user/consume/member',{params:{'uid':self.uids,'startTime':Date.parse(self.date1)/1000,'endTime':Date.parse(self.date2)/1000,'cid':sessionStorage.cid,'channel':sessionStorage.channel,page:self.pagechose}}).then(function (res) {
                            self.tableData2=[];
                          self.consumeall=res.data.data.consumeTotal;
                          self.tableData2=res.data.data.consume;
                          self.total2=res.data.data.total;
                          if (self.pg2<res.data.data.total) {
                                self.moreOrelse='查看更多'                        
                              }else{
                                self.moreOrelse='无更多数据'
                              }
            }).catch(function (error) {
              console.log(error);
            }); 
                          }
       self.loading=false;
    }   
      }
  },
  mounted(){
    var self =this ;
    self.pg1=1;
    self.pg2=1;
     axios.get('http://pay.queyoujia.com/user/charge/member',{params:{'cid':sessionStorage.cid,'channel':sessionStorage.channel}}).then(function (res) {              
                       self.tableData3=[];
                       self.total1=null;
                      //self.consumeall=res.data.data.consumeTotal;
                      self.tableData3=res.data.data.charge;
                      self.chargemount=res.data.data.chargeTotal;
                      self.rewardmount=res.data.data.reward;
                      self.total1=res.data.data.total;
                         if (self.pg1<res.data.data.total) {
                            self.pagesize='查看更多'                          
                          }else{
                            self.pagesize='无更多数据'
                          }
  }).catch(function (error) {
    console.log(error);
  }); 
     axios.get('http://pay.queyoujia.com/user/consume/member',{params:{'cid':sessionStorage.cid,'channel':sessionStorage.channel}}).then(function (res) {
                      self.tableData2=[];
                      self.total2=null;
                      self.consumeall=res.data.data.consumeTotal;
                      self.tableData2=res.data.data.consume;
                      self.total2=res.data.data.total;
                      if (self.pg2<res.data.data.total) {
                            self.moreOrelse='查看更多'                        
                          }else{
                            self.moreOrelse='无更多数据'
                          }
  }).catch(function (error) {
    console.log(error);
  }); 
  self.isShow1=false;
    self.isShow2=true;
    self.tabbg1=true;
    self.tabbg2=false;
  },
  computed:{
    tbkey(){
     var self=this;
     self.TDheight=(window.screen.availHeight)/3.3;
     console.log(window.screen.availHeight);
    }
  },
  destroyed(){
    location.reload();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mart{margin-top: 2vh;text-align: center;}
.serbtn{color: #fff;background-color: #50bfff;border-color: #50bfff;height:5vh;line-height:5vh;border-radius: 5px;}
.serbtn:active{background-color: #20a0ff;}
.cusdetail{text-align: center;height: 6vh;margin-top: 2vh;border:1px solid #20a0ff;border-right: none;line-height: 6vh;}
.recdetail{text-align: center;height: 6vh;margin-top: 2vh;border:1px solid #20a0ff;border-left: none;line-height: 6vh;}
.returndetail,.rechargeM{text-align: center;background-color: #F9FAFC;height: 8vh;margin-top: 1vh;line-height: 4vh;border-bottom: 1px solid #ddd;margin-bottom: 1vh;}
.rechargeM{border-right:1px solid #ddd;}
.textb{color: #20A0FF;}
.bgtext{color: white;background-color:#20a0ff;}
.brb{border-bottom: 1px solid #ddd;padding-bottom: 1vh;margin-bottom: 1vh;}
.btnser{width: 100%;height: 6vh;line-height: 2vh}
.fade-enter-active, .fade-leave-active {
          transition: opacity .5s
        }
        .fade-enter, .fade-leave-active {
          opacity: 0
        }
.more{text-align: center;cursor: pointer;color: #5e7382;}
.more:active{color: #58B7FF;}
</style>
