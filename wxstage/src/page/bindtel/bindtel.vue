<template>
  <div class="bindtel">
      <el-col :span="22" :offset="1" style="marginTop:2vh">
        <h5 style="margin:1vh">手机号</h5>
       <el-input placeholder="请输入手机号" v-model="input1" @change="checktel">
       <template slot="append"><el-button @click="getcode" v-html="seccode" :disabled="canbtn"></el-button></template>
      </el-input>
    </el-col>
    <el-col :span="22" :offset="1" style="marginTop:2vh">
        <h5 style="margin:1vh">短信验证码</h5>
       <el-input placeholder="请输入短信验证码" v-model="input2">
      </el-input>
    </el-col>
     <el-col :span="22" :offset="1">
    <el-button type="primary" class="btnsub" @click="checkcode">提交</el-button>
     </el-col>
</div>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'bindtel',
  data () {
    return {
      dynamicValidateForm: {
          domains: [{
            value: ''
          }],
          email: ''
        },
        input4:null,
        seccode:"获取验证码",
        canbtn:false,
        input1:null,
        input2:null
    }
  },
  methods:{
  	getcode:function () {
         var self =this ;
         if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(self.input1))){ 
           this.$message({
              message: '手机格式有误！',
              type: 'warning'
            });
            return false; 
        }else{
          var params={mobile:self.input1,cid:sessionStorage.cid,channel:sessionStorage.channel}
          axios.post('http://pay.queyoujia.com/auth/sms').then(function (res) {
            console.log(res);
          }).catch(function (err) {
            console.log(err);
          })
        } 
       for (let i=60;i>0;i--) {
        //console.log(i);
        setTimeout(function () {
         self.seccode=i;
         //console.log(i);
         if (i==0) {
          self.canbtn=false;
         }else{
          self.canbtn=true;
         }
       },(60000-i*1000));
       }
    },
    checkcode:function () {
       var self =this ;
      if (self.input1&&self.input2) {
        console.log('ok');
        var params={uid:sessionStorage.myuid,mobile:self.input1,code:self.input2,cid:sessionStorage.cid,channel:sessionStorage.channel}
        axios.post('http://pay.queyoujia.com/user/bind/mobile',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function(res){
                        if (res.data.code==0) {
                            this.$message({
                            message: '绑定成功',
                            type: 'success'
                          });
                        }else{
                           this.$message({
                            message: '绑定失败',
                            type: 'warning'
                          });
                          }
                        }).catch(function (err) {
                        console.log(err);
                      })
      }else{
        this.$message({
          message: '输入不全，请检查！',
          type: 'warning'
        });
      }
    },
    checktel:function () {
       
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btnsub{width: 100%;margin-top: 2vh;}
h5{color: #293340;}
</style>
