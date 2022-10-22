<template>
  <div id="homePage">
    <div class="homePage_main">
      <div class="homePage_bottom">
        <el-card class="box_user" shadow="hover">
          <UserDetails></UserDetails>
        </el-card>

        <el-card class="box-card" shadow="hover">
          <div id="detailsChart"></div>
        </el-card>
      </div>
      <el-card
        shadow="hover"
        id="visitedChart"
        style="display: flex; justify-content: center"
      >
        <div id="visitedChart"></div>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'
import { getHomePageData, getVisitedData } from '../../../request/auth/index'
import UserDetails from './components/userDetails.vue'

const detailsData = ref([])
const visitedData = ref([])

const getData = async () => {
  const { data: res } = await getHomePageData()
  const { data: result } = await getVisitedData()
  detailsData.value = res
  visitedData.value = result
}

onMounted(async () => {
  await getData()
  init(detailsData.value, visitedData.value)
})

function init(detailsData, visitedData) {
  let detailsChart = echarts.init(document.getElementById('detailsChart'))
  let visitedChart = echarts.init(document.getElementById('visitedChart'))
  detailsChart.setOption({
    title: {
      text: '详情信息',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        type: 'pie',
        radius: '50%',
        data: detailsData,
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

  visitedChart.setOption({
    xAxis: {
      text: '拜访数量',
      type: 'category',
      boundaryGap: false,

      data: [
        '星期一',
        '星期二',
        '星期三',
        '星期四',
        '星期五',
        '星期六',
        '星期日'
      ]
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        itemStyle: {
          normal: {
            label: {
              show: true // 在折线拐点上显示数据
            }
          }
        },
        data: visitedData,
        type: 'line',
        areaStyle: {}
      }
    ]
  })

  window.onresize = function () {
    detailsChart.resize()
    visitedChart.resize()
  }
}
</script>

<style lang="less" scoped>
#homePage {
  border-radius: 10px;
  width: 100%;
  height: 100%;
}
#detailsChart {
  width: 400px;
  height: 400px;
}
#visitedChart {
  height: 400px;
  width: 900px;
}
.box-card {
  height: 400px;
  width: 500px;
  display: flex;
  justify-content: center;
}
.homePage_main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.homePage_bottom {
  display: flex;

  justify-content: space-around;
}
</style>
