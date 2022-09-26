<template>
  <div id="homepage">
    <div id="useInfo"></div>
    <div></div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'

onMounted(() => {
  init()
})

function init() {
  var myChart = echarts.init(document.getElementById('useInfo'))
  myChart.setOption({
    title: {
      text: 'Referer of a Website',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  })
  window.onresize = function () {
    myChart.resize()
  }
}
</script>

<style lang="less" scoped>
#homepage {
  background-color: white;
  border-radius: 10px;
  width: 100%;
  height: 100%;
}
#useInfo {
  width: 800px;
  height: 400px;
}
</style>
