<template>
    <div>
        <el-carousel :interval="3000" type="card">
            <el-carousel-item>
                <div id="main" style="width: 600px;height: 400px;"></div>
            </el-carousel-item>
            <el-carousel-item>
                <div id="main1" style="width: 600px;height: 400px;"></div>
            </el-carousel-item>
            <el-carousel-item>
                <div id="main2" style="width: 600px;height: 400px;"></div>
            </el-carousel-item>
            <el-carousel-item>
                <div id="main3" style="width: 600px;height: 400px;"></div>
            </el-carousel-item>
        </el-carousel>
        <el-divider></el-divider>
    </div>
</template>
<script>
import echarts from 'echarts'
export default {
  name: '',
  data () {
    return {
      charts: '',
      opinionData: ['3', '2', '4', '4', '5']
    }
  },
  methods: {
    drawLine (id) {
      this.charts = echarts.init(document.getElementById(id))
      this.charts.setOption({
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['近七日收益']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },

        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1', '2', '3', '4', '5']

        },
        yAxis: {
          type: 'value'
        },

        series: [{
          name: '近七日收益',
          type: 'line',
          stack: '总量',
          data: this.opinionData
        }]
      })
    }
  },
  // 调用
  mounted () {
    this.$nextTick(function () {
      this.drawLine('main')
      this.drawLine('main2')
      this.drawLine('main1')
      this.drawLine('main3')
    })
  }
}
</script>

<style>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>
