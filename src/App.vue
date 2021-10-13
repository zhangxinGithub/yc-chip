<template>
  <div id="app">
    <cropper class="paper" :config="pageConfig"/>
  </div>
</template>
 
<script>
import cropper from './myPlugin/cropper/index.vue'
export default {
  name: 'app',
  components:{
    cropper
  },
  data () {
    return {
     pageConfig: {
      style: {},
      element: [{
        type: 'chart', // 类型  图表,容器,按钮等
        option: { // 图表配置
          tooltip: {},
          legend: {
            data: ['销量'],
          },
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
          },
          yAxis: {},
          series: [
            {
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20],
            },
          ],
        },
        url: '', // 请求url
        param: {}, // 接口默认参数
        style: {
          width: '600px',
          height: '350px',
        },
      }],
    },
    }
  },
  methods:{
  },
}
</script>
 
<style lang="scss">
  .paper{
    cursor: pointer;
    width: 800px;
    height: 400px;
    border: 1px dashed #ccc;
  }
</style>