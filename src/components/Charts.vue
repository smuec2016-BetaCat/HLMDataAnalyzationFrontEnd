<template>
    <v-chart :options="scatter" :style="chartStyle" @click="getData"/>
</template>

<script>
import ECharts from "vue-echarts/components/ECharts";
import "echarts-gl";
// import Main from "../views/MainLayout";

export default {
  components: {
    "v-chart": ECharts
  },
  data: function() {
    let data1 = [];
    let data2 = [];
    for (let i = 0; i <= 5000; i++) {
      data1.push([Math.random(), Math.random(), Math.random() * 0.4 + 0.4]);
      data2.push([Math.random(), Math.random(), Math.random() * 0.4 + 0.3]);
    }
    return {
      scatter: {
        grid3D: {},
        xAxis3D: {
          name: "词语"
        },
        yAxis3D: {
          name: "语义"
        },
        zAxis3D: {
          name: "频率"
        },
        series: [
          {
            type: "scatter3D",
            symbolSize: 2.3,
            data: data1
          },
          {
            type: "scatter3D",
            symbolSize: 2.3,
            itemStyle: {
              color: "green"
            },
            data: data2
          }
        ]
      }
    };
  },
  computed: {
    chartStyle: () => {
      return {
        height: document.body.clientHeight - 100 + "px",
        width: "100%"
      };
    }
  }
};
</script>

<style>
.echarts {
  width: 100%;
  height: 100%;
  margin: auto auto;
}
</style>
