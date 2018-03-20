<template>
  <div class="perrechanger"  v-loading="loading">
  	<el-row class="mrt"  >
  		<el-col :span="12" :offset="1">推广员编号:{{tgcode}}</el-col>
  		<el-col :span="10" :offset="1">邀请码:{{yqcode}}</el-col>
  	</el-row>
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
	<el-col :span="22" :offset="1" class="search mrt"><el-button type="primary" @click="submit">查询</el-button></el-col>
	<el-table
	  :key="tableHH"
    :data="tableData"
    :height="tableH"
    border>
    <el-table-column
      prop="amount"
      align="center"
      label="充值金额">
    </el-table-column>
    <el-table-column
      min-width="110"
      prop="paidTime"
      align="center"
      label="充值时间">
    </el-table-column>
  </el-table>
  <div class="more" @click="lookmore">{{moreOrelse}}</div>
  </div>
</template>

<script>
import axios from "axios";
import qs from "qs";
export default {
  name: 'perrechanger',
  data () {
    return {
      pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        pickerOptions1: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
        tableData: [],
        tH:null,
        tgcode:null,
        yqcode:null,
        tableH:null,
        moreOrelse:null,
        loading:false,
        pagesize:1,
        pagechose:null
      }
    },
    computed:{
    	tableHH(){
    		var self =this;
    		self.th=window.screen.availHeight/2+"px";
    		console.log(window.screen.availHeight);
    	}
    },
    mounted(){
      var self =this ;
        //console.log(self.date1);
           self.pagesize=1
            var params={cid:sessionStorage.cid,channel:sessionStorage.channel}
          axios.post('http://pay.queyoujia.com/user/charge/person',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
                        console.log(res.data.data);
                        self.tableData=[];
                        self.yqcode=res.data.data.no;
                        self.tgcode=res.data.data.uid;
                        self.tableData=res.data.data.list;
                          if (self.pagesize<res.data.data.total) {
                                  self.moreOrelse='查看更多'
                                }else{
                                  self.moreOrelse='无更多数据'
                                }  

                      }).catch(function (err) {
                        console.log(err);
                      })  
      self.tableH=window.screen.availHeight/2.5;
    },
    methods:{
      submit:function () {
        var self =this ;
        pagesize:1;
        var params={startTime:Date.parse(self.value1)/1000,endTime:Date.parse(self.value2)/1000,cid:sessionStorage.cid,channel:sessionStorage.channel}
          axios.post('  http://pay.queyoujia.com/user/charge/person',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
                        console.log(res.data.data);
                        self.tableData=[];
                       // self.yqcode=res.data.data.no;
                        //self.tgcode=res.data.data.uid;
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
      submit2:function () {
        var self =this ;
        pagesize:1;
        var params={startTime:Date.parse(self.value1)/1000,endTime:Date.parse(self.value2)/1000,cid:sessionStorage.cid,channel:sessionStorage.channel,page:self.pagechose}
          axios.post('  http://pay.queyoujia.com/user/charge/person',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
                        console.log(res.data.data);
                        var tabletemp=[];
                       // self.yqcode=res.data.data.no;
                        //self.tgcode=res.data.data.uid;
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
        return;
        }else{
          self.loading=true;
          self.pagechose++;
          self.submit2();
        }
        setTimeout(function () {
          self.loading=false;
        },1000)
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mrt{margin-top: 2vh; font-size: 0.9rem;color:   #1F2D3D}
.search{border-color: #20a0ff;padding: 7px 9px;font-size: 1rem;border-radius: 4px;margin-bottom: 2vh;text-align: center;}
.search button{width: 100%;}
.more{text-align: center;cursor: pointer;color: #5e7382}
.more:active{color: #58B7FF;}
</style>
