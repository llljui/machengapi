<template>
  <transition name="fade" mode="in-out">
  <div class="diamondssold">
  	<el-col :span="22" :offset="1" class="soldcount">可售钻石：{{cansold}}</el-col>
  	<el-col :span="22" :offset="1" class="soldcount"><el-input placeholder="请输入游戏ID" v-model="uids"><template slot="append"><el-button @click="getid" v-html="seccode"></el-button></template></el-input></el-col>
  	<el-col :span="22" :offset="1" class="soldcount"><el-input placeholder="请输入钻石数量" type="number" v-model="count"></el-input></el-col>
  	<el-col :span="22" :offset="1" class="soldcount"><el-button type="primary" class="btnsure" @click="besure">确认</el-button></el-col>
  </div>
</transition>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
export default {
  name: 'diamondssold',
  data () {
    return {
      cansold: null,
      seccode:'验证ID',
      uids:'',
      count:null,
      nowid:null,
      err:null
    }
  },
  methods:{
  	 getid:function () {
  	 var self =this;
     self.nowid=self.uids;
  	  var params={uid:self.uids,cid:sessionStorage.cid,channel:sessionStorage.channel}//参数
          axios.post('http://pay.queyoujia.com/user/check',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
            console.log(res.data.code);
            if (res.data.code==0) {
                	 self.uids=res.data.data.nickname;
                   console.log(self.uids);
            }else{
              self.$message({
                  message: '请重新输入ID，并校验！',
                  type: 'warning'
                 });
               self.err='请重新输入ID，并校验！';
            }
          }).catch(function (err) {
            console.log(err);
          })
  },
  besure:function () {
  	 var self =this;
     if (self.nowid) {         
                var params={uid:self.nowid,cid:sessionStorage.cid,channel:sessionStorage.channel,amount:self.count}//参数
               axios.post('http://pay.queyoujia.com/user/transfer',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
            console.log(res.data.data.nickname);
            if (res.data.code=='0') {
               self.$message({
              message: '出售成功',
              type: 'success'
            });
               self.nowid=null;
               self.uids=null;
               self.count=null;
               self.err='';
            }else{
              self.$message({
              message: res.data.message,
              type: 'error'
            });
            }
          }).catch(function (err) {
            console.log(err);
          })
                         
     }else{
      self.$message({
              message: '请先验证',
              type: 'warning'
              }) 
     }	
  }
  },
  mounted(){
    var self =this;
    axios.get('http://pay.queyoujia.com/user/diamond',{params:{cid:sessionStorage.cid,channel:sessionStorage.channel}}).then(function (res) {
      self.cansold=res.data.data.diamond;
    }).catch(function (err) {
      console.log(err);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.soldcount{margin-top: 2vh;font-size: 1rem;font-family: '微软雅黑';font-weight: normal;color: #1f2d3d;}
.btnsure{width: 100%;font-size: 1rem;margin-top: 2vh;}
.fade-enter-active, .fade-leave-active {
          transition: opacity .8s
        }
        .fade-enter, .fade-leave-active {
          opacity: 0
        }
</style>