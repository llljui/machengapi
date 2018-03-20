<template>
  <div class="mynavbar" :key="keys">
      <el-dropdown trigger="click" style="">
            <el-button type="text">
              <i class="el-icon-fa el-icon-fa-line-chart el-icon--left"></i>数据统计
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item><router-link to="/teamrechanger">团队充值统计</router-link></el-dropdown-item>
              <el-dropdown-item><router-link to="/perrechanger">个人充值明细</router-link></el-dropdown-item>
              <el-dropdown-item v-if="navshow1"><router-link to="/parsearch">合伙人充值概况</router-link></el-dropdown-item>
               <!-- <el-dropdown-item><router-link to="/perdetail">合伙人充值查询</router-link></el-dropdown-item> -->
            </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown trigger="click">
        <el-button type="text">
           <i class="el-icon-fa el-icon-fa-sitemap el-icon--left"></i>会员管理
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><router-link to="/member">我的会员</router-link></el-dropdown-item>
            <el-dropdown-item><router-link to="/promoter">我的推广员</router-link></el-dropdown-item>
            <el-dropdown-item v-if="navshow2"><router-link to="/authorize">代理授权</router-link></el-dropdown-item>
          </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown trigger="click">
          <el-button type="text">
            <i class="el-icon-fa el-icon-fa-user el-icon--left"></i>个人中心
          </el-button>
          <el-dropdown-menu slot="dropdown" >
          <!--   <el-dropdown-item><router-link to="/diamondsbuy">钻石购买</router-link></el-dropdown-item> -->
           <!--  <el-dropdown-item v-if="navshow6"><router-link to="/commission">提成结算</router-link></el-dropdown-item> -->
            <el-dropdown-item><router-link to="/diamondssold" @click.once="menahid">钻石出售</router-link></el-dropdown-item>
            <el-dropdown-item><router-link to="/usercenter">个人账户</router-link></el-dropdown-item>
            <el-dropdown-item v-if="navshow4"><router-link to="/jstc">结算提成</router-link></el-dropdown-item>
          </el-dropdown-menu>
      </el-dropdown>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'navbar',
  data () {
    return {
      menashow:false,
      navshow1:null,
      navshow2:null,
      navshow3:null,
      navshow4:true,
      navshow6:false
    }
    },
    methods:{
      menahid:function () {
       var self=this;
       self.menashow=false;
      },
      ifshow:function () {
        console.log(5255);
      }
      },
   computed:{
    keys(){
      //console.log(window.screen);
    }
   },
   mounted(){
    var self=this;
    if (location.search.indexOf('cid=1')!=-1&&location.search.indexOf('channel=hz')!=-1) {
      document.title="全民大冶后台";
    }
    else if(location.search.indexOf('cid=2')!=-1&&location.search.indexOf('channel=fuyang')!=-1){
      document.title="八道雀神后台";
    }else if(location.search.indexOf('cid=3')!=-1&&location.search.indexOf('channel=default')!=-1){
      document.title="决战绍兴游戏";
    }else if(location.search.indexOf('cid=8')!=-1&&location.search.indexOf('channel=default')!=-1){
      document.title="全民十三水";
    }
    else{console.log('其他标题')}
    var arr,reg=new RegExp("(^| )"+'token'+"=([^;]*)(;|$)");
    arr=document.cookie.match(reg);
    console.log(arr);
    if (true) {//调试
          if (!sessionStorage.status) {
              console.log(sessionStorage.status);
                    axios.get('http://pay.queyoujia.com/auth/check',{params:{cid:sessionStorage.cid,channel:sessionStorage.channel/*sid:'9c8104987b3e7c170121412bb6afd439',toid:'1218482',token:'vk92SYb6349245'*/}}).then(function (res) {
                        if (res.data.data.userInfo.uid==res.data.data.userInfo.partnerId) {
                             self.$router.push({path:'/parsearch'});
                             self.navshow1=true;
                             self.navshow2=true;
                             self.navshow3=false;
                             self.navshow4=false;
                             sessionStorage.status='1';
                             sessionStorage.HHR='hhr'
                             console.log('合伙人身份')
                        }else{
                            self.$router.push({path:'/teamrechanger'});
                            self.navshow1=false;
                            self.navshow2=false;
                            self.navshow3=false;
                            self.navshow4=true;
                            console.log('不是合伙人身份');
                            sessionStorage.status='1';
                            console.log(res.data.data.userInfo.uid);
                            // if(res.data.data.userInfo.uid=='3814858'||res.data.data.userInfo.uid=='2061160'){
                            //   function getCookie(name)
                            //       {
                            //       var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
                            //       if(arr=document.cookie.match(reg))
                            //       return unescape(arr[2]);
                            //       else
                            //       return null;
                            //       }
                            //   alert(getCookie('sid'));
                            // }
                          }
                  }).catch(function (err) {
                    console.log(err);
                  })
          }else{
             return;
          }
          //console.log(unescape(arr[2]));
    }else{
      console.log('身份不存在');
      self.$router.push({path:'/login'});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mynavbar{position: absolute;bottom:0;width: 100%;border-top: 1px solid #EFF2F7;background:#EFF2F7;padding-left: 0.6%;height: 10vh;}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color:#475669;
}
nav{margin:0 auto;display: block;width: 90%;}
nav ul li{display: inline-block; width: 30%;text-align: center;height: 10vh;padding-top: 5%;color: #8492A6;}
.el-dropdown{width: 31.5%;margin:0 auto;}

.el-dropdown button{width: 100%;border:none;height: 10vh;color: #677586;}
</style>
