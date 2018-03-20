<template>
  <transition name="fade" mode="in-out">
  <div class="member"   v-loading="loading">
  	<el-col :span="14" :offset="1" class="mrt"><el-input placeholder="请输入用户ID" v-model="userid"></el-input></el-col>
  	<el-col :span="7" :offset="1" class="searchbtn"><el-button type="primary" style="width:100%" @click="searchmember">查询</el-button></el-col>
  	<el-table
    :key="tabheight"
    :height="tabH"
  	align="center"
  	class="tabt"
    :data="tableData3"
    border>
    <el-table-column
      prop="nickname"
      align="center"
      min-width="100"
      label="昵称">
    </el-table-column>
    <el-table-column
      prop="consume"
      align="center"
      min-width="120"
      sortable
      label="昨日消耗">
    </el-table-column>
    <el-table-column
      prop="payment"
      align="center"
      sortable
      width="120"
      label="昨日充值">
    </el-table-column>
    <el-table-column
      prop="address"
      align="center"
      label="操作">
      <template slot-scope="scope">
        <el-button
          size="small"
          type="primary"
          @click="handleEdit(scope.$index, scope.row)">明细</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="more" @click="lookmore">{{moreOrelse}}</div>
    <!-- <el-pagination
      class="pagetab"
      small
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage3"
        :page-size="100"
        layout="prev,next, jumper"
        :total="1000">
      </el-pagination> -->
  </div>
</transition>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'member',
  data () {
    return {
        tableData3: [],
        currentPage3: 5,
        userid:null,
        moreOrelse:null,
        loading:false,
        pagesize:1,
        pagechose:1,
        tabletemp:[]
    }
  },
  methods:{
  	handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
       handleEdit(index, row) {
        var self =this ;
        sessionStorage.memberuid=row.uid;
        //console.log(sessionStorage.memberuid);//http://pay.queyoujia.com/user/member/list?uid=&cid=2&channel=fuyang
        self.$router.push({path:'/memberdetail'})
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      searchmember:function () {
        var self =this;
        self.pagesize=1;
        self.pagechose=1;
        self.tabletemp=[];
        var params={uid:self.userid,cid:sessionStorage.cid,channel:sessionStorage.channel/*,sid:'9c8104987b3e7c170121412bb6afd439',toid:'1218482',token:'vk92SYb6349245'*/}
        axios.post('http://pay.queyoujia.com/user/member/list',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
                        console.log(res.data.data.list);
                        self.tableData3=[];
                       // self.tabletemp.push(res.data.data.list);
                        self.tableData3=res.data.data.list;
                       if (self.pagesize<res.data.data.total) {
                          self.moreOrelse='查看更多';
                        }else{
                          self.moreOrelse='无更多数据'
                        }
                      }).catch(function (err) {
                        console.log(err)
                      })
      },
      searchmember2:function () {
        var self =this;
       /* var params={cid:sessionStorage.cid,channel:sessionStorage.channel,page:self.pagechose}*/
        axios.get('http://pay.queyoujia.com/user/member/list',{params:{cid:sessionStorage.cid,channel:sessionStorage.channel,page:self.pagechose}}).then(function (res) {
                        res.data.data.list.forEach(function (item,index) {
                         self.tableData3.push(item);
                        });              
                        console.log(self.tableData3);
                       if (self.pagechose<res.data.data.total) {
                          self.moreOrelse='查看更多';
                          console.log(item);
                        }else{
                          self.moreOrelse='无更多数据'
                        }
                      }).catch(function (err) {
                        console.log(err)
                      })
      },
      lookmore:function () {
         var self =this;
        console.log(22);
       if (self.moreOrelse=='无更多数据') {
          self.loading=false;
          /* self.loading=true;
          self.pagechose++;
          self.searchmember2();*/
        }
        else{
          self.loading=true;
          self.pagechose++;
          self.searchmember2();
        }
        setTimeout(function () {
          self.loading=false;
        },1000)
      }
  },
  computed:{
   tabheight(){
      var self =this;
      var device_type = navigator.userAgent;
      console.log(window.screen.availHeight);
      if (device_type.indexOf('Nexus')!=-1) {
        console.log('Nexus');
        self.tabH=(window.screen.availHeight-500+(560/window.screen.availHeight)*280);
        console.log(self.tabH);
      }else{
        if (window.screen.availHeight<570) {
          self.tabH='320';
        }else{
          self.tabH=(window.screen.availHeight-500+((560/window.screen.availHeight)*270));    
          console.log(device_type);
        }
      }
      
    }
  },
  mounted(){
    var self =this ;
    var params={cid:sessionStorage.cid,channel:sessionStorage.channel}
    axios.post('http://pay.queyoujia.com/user/member/list',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
                        console.log(res);
                        self.tableData3=res.data.data.list;
                        self.tabletemp=res.data.data.list;
                         if (self.pagesize<res.data.data.total) {
                            self.moreOrelse='查看更多'
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
.mrt{margin-top: 2vh;}
.searchbtn{margin-top: 2vh;color: white;text-align: center;border-radius: 3px;margin-bottom: 3vh;}
.block{margin-top: 3vh;float: right;}
.pagetab{position: absolute;bottom:10vh;}
/* .el-pagination{margin-left: -2.8vw;} */
.tablesc{width: 100%;}
.fade-enter-active, .fade-leave-active {
          transition: opacity .5s
        }
        .fade-enter, .fade-leave-active {
          opacity: 0
        }
.more{text-align: center;cursor: pointer;color: #5e7382;}
.more:active{color: #58B7FF;}
</style>