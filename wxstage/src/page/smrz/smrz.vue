<template>
	<transition name="fade" mode="in-out">
  <div class="smrz">
    <el-col :span="22" :offset="1"><el-input type="text" class="mrt" v-model="username" placeholder="请输入真实姓名"></el-input></el-col>
    <el-col :span="22" :offset="1"><el-input type="text" class="mrt" v-model="tell" placeholder="请输入手机号"></el-input></el-col>
    <el-col :span="22" :offset="1"><el-input type="text" class="mrt" v-model="idcard" placeholder="请输入身份证号码"></el-input></el-col>

    <el-col :span="22" :offset="1" class="search mrt"><el-button type="primary" class="btn" @click="submit">提交</el-button></el-col>
    <div v-show='info'>
      <div class="bor"></div>
      <div class="info_">
        <el-col :span="24" class="tip">温馨提示</el-col>
        <p class="p_tip">请务必保证填写的个人姓名和手机号真实有效，并且跟当前所在微信的实名认证信息一致，否则将可能出现打款不到账的情况。<br>有更多问题请联系我们的官方微信客服：{{kefu}}</p>
        <el-button type="primary" class="info_btn" @click="info_sure">确认</el-button>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
import axios from "axios";
import qs from "qs";
export default {
  name: 'smrz',
  data () {
    return {
      kefu:null,
      info:true,
      username:null,
      idcard:null,
      tell:null,
      imageUrl1:'',
      imageUrl2:'',
      private1:null,
      private2:null
    }
  },
  methods:{
    info_sure:function () {
     var self=this;
     self.info=false;
    },
    checkname:function (name) {
      if (name) {
        console.log(name);
      }else{
        this.$message({
            message: '请检查输入姓名',
            type: 'warning'
          });
        return false;
      }
    },
    isCardNo:function (card) {
       var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; 
          if(reg.test(card) === false) 
          { 
            // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X 
           this.$message({
            message: '身份输入不合法',
            type: 'warning'
          });
           return false; 
          } 
    },
    checkMobile:function (tell){ 
    if(!(/^1[3|4|5|8|7][0-9]\d{4,8}$/.test(tell))){ 
        this.$message({
            message: '手机输入不合法',
            type: 'warning'
          });
        return false; 
       } 
      }, 
     handleAvatarSuccess1(res, file) {
        this.imageUrl1 = URL.createObjectURL(file.raw);
        console.log(res);
      },
      handleAvatarSuccess2(res, file) {
        this.imageUrl2 = URL.createObjectURL(file.raw);
        console.log(res+''+file);
      },
      beforeAvatarUpload1(file) {
        var self =this;
        console.log(1)
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 8;
        var reader = new FileReader();
        reader.readAsDataURL(file);

        if (!isJPG) {
          this.$message.error('上传图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传图片大小不能超过 8MB!');
        }
         reader.onload = function(e){ 
            this.result // 这个就是base64编码了
            console.log(this.result);
            var params={file:this.result}
            axios.post('http://pay.queyoujia.com/public/upload',qs.stringify(params),{headers: {
                                            'Content-Type': 'application/x-www-form-urlencoded'
                        }}).then(function (res) {
                          self.private1=res.data.data.key;
                          console.log(res.data.data.key);
                        }).catch(function (err) {
                          console.log(err);
                        })
        }
        return isJPG && isLt2M;
      },
      beforeAvatarUpload2(file) {
        var self =this;
        //console.log(2)
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 8;
        var reader = new FileReader();
        reader.readAsDataURL(file);

        if (!isJPG) {
          this.$message.error('上传图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传图片大小不能超过 8MB!');
        }
         reader.onload = function(e){ 
            this.result // 这个就是base64编码了
            console.log(this.result);
            var params={file:this.result}
            axios.post('http://pay.queyoujia.com/public/upload',qs.stringify(params),{headers: {
                                            'Content-Type': 'application/x-www-form-urlencoded'
                        }}).then(function (res) {
                          self.private2=res.data.data.key;
                          console.log(res.data.data.key);
                        }).catch(function (err) {
                          console.log(err);
                        })
        }
        return isJPG && isLt2M;
      },
      submit:function () {
        var self =this;
        self.isCardNo(self.idcard);
        self.checkMobile(self.tell);
        self.checkname(self.username); 
          var arrs,reg=new RegExp("(^| )"+'openid'+"=([^;]*)(;|$)");
              arrs=document.cookie.match(reg);
             // var stop=arrs[0].indexOf(';');
          var params={openid:arrs[2],name:self.username,mobile:self.tell,idCard:self.idcard,cid:sessionStorage.cid,channel:sessionStorage.channel}
          axios.post('http://pay.queyoujia.com/user/realname/verify',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
          if (res.data.code==1102) {
             self.$message({
              message:res.data.message,
              type: 'success'
            });
             setTimeout(function () {
               self.$router.push({path: '/jstc'});
             },2000);
          }else{
             self.$message({
              message:res.data.message,
              type: 'warning'
            });
            console.log(res.data.message);
            console.log(res.data.code);
          }
          }).catch(function (err) {
            console.log(err);
          })
           
      }
    },
    mounted:function () {
      var self=this;
      self.kefu=sessionStorage.kefu;
    }
}
</script>
<style scoped>
.info_btn{width: 80vw;position: absolute;bottom: 2vh;left: 5vw;}
.bor{position: fixed;top: 0vh;left: 0;right: 0;bottom: 0;margin:auto;width: 100vw;height: 100vh;background-color: black;opacity: 0.65;}
.info_{position: fixed;top: -10vh;left: 0;right: 0;bottom: 0;margin:auto;width: 90vw;height: 50vh;background-color: white;border-radius: 5px;}
.mrt{margin-top: 2vh;}
.fade-enter-active, .fade-leave-active {
          transition: opacity .5s
        }
        .fade-enter, .fade-leave-active {
          opacity: 0
        }
        .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 20vw;
    height: 20vh;
    line-height: 20vh;
    text-align: center;
  }
  .avatar {
    width: 30vw;
    height: 15vh;
    display: block;
    margin-top: 5vh
  }
  .btn{width:100%;margin-top: 5vh}
  .tip{text-align: center;font-size:1rem;font-weight: bold;margin-top: 1vh}
  .p_tip{padding:0 4vw;margin-top: 7vh}
</style>
