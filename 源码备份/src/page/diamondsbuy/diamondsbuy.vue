<template>
  <div class="diamondsbuy">
  	<section class="buyhead">
  			<el-col :span="8" class="tc">
  				<h5>游戏昵称</h5>
  				<span v-html="nickname"></span>
  			</el-col>
  			<el-col :span="8" class="tc">
  				<h5>游戏ID</h5>
  				<span v-html="uid"></span>
  			</el-col>
  			<el-col :span="8" class="tc">
  				<h5>当前钻石</h5>
  				<span v-html="mydia"></span>
  			</el-col>
  	</section>
  	<section class="buycontent">
		 <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      align="center"
      label="钻石数量">
      <template slot-scope="scope">
        <span>{{ scope.row.date }}<br>(返40%)</span>
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      label="售价">
      <template slot-scope="scope">
		{{ scope.row.name }}
      </template>
    </el-table-column>
    <el-table-column label="操作" align="center">
      <template slot-scope="scope">
        <el-button
          size="small"
          class="buybtn"
          @click="handleEdit(scope.$index, scope.row)">购买</el-button>
      </template>
    </el-table-column>
  </el-table>
  	</section>
  </div>
</template>

<script>
export default {
  name: 'diamondsbuy',
  data () {
    return {
     tableData: [],
        mydia:'500颗',
        uid:'1010',
        nickname:'1010'
    }
  },
  methods:{
  	  handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.buyhead{width: 100%;height: 14vh;}
.tc{text-align: center;height: 100%;}
.tc h5{font-size: 0.95rem;color: #27313c;margin-top: 2vh;}
.tc span{font-size: 1rem;color: #1F2D3D;margin-top: 2vh;display: block;color:#58B7FF;font-weight: normal;font-family: '微软雅黑';}
.buytitle{background-color: #e9ecf1;height: 8vh;display: block;}
.buycontent{}
.buybtn[data-v-6d3b226a]{color:#50bfff;font-weight: bold;border:1px solid #50bfff;}
</style>
