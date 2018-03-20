<template>
  <div class="Layout">
  	    <myheader></myheader>
          <mycontent><router-view/></mycontent>
        <navbar></navbar>
  </div>
</template>
<script>
import navbar from './navbar'
import mycontent from './content'
import myheader from './header'
export default {
  name: 'Layout',
  components:{navbar,mycontent,myheader},
  data () {
    return {
    
    }
  }
   /* var arr,reg=new RegExp("(^| )"+sid+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg));
    console.log(unescape(arr[2]))
    return unescape(arr[2]);
    else
    return null;
      }*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
