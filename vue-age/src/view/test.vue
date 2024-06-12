<template>
    <div
  ref="lineChart"
  id="lineChart"
  :style="{ width: '800px', height: '400px' }"
></div>
<el-button @click="stopPink">
click
</el-button>
</template>
<script setup>
import * as echarts from 'echarts'
import { valueEquals } from 'element-plus';
import { ref, onMounted } from "vue";
import { flowerDropPink ,stopPink} from '@/util/flower.js';
onMounted(() => {
const dom = document.getElementById("lineChart");
console.log(dom)
const myChart = echarts.init(dom); // 初始化echarts实例
myChart.setOption({
  title: {
    text: 'ECharts 入门示例'
  },
  tooltip: {
    trigger: 'axis'
  },
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {
    type:'value'

  },
  series: [
    {
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20],
      // areaStyle: {}
    },
    {
      name: '销量',
      type: 'line',
      data: [5, 20, 36, 10, 10, 200],
      color: '#a90000'
      // areaStyle: {}
    }
  ]
});
// 设置实例参数
window.onresize = () => {
  myChart.resize();
};
});
</script>
<style>
.vuechart {
    height: 400px;
}
</style>
