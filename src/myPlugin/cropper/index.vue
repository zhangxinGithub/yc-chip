<template>
  <div id="paper" class="paper" />
</template>

<script>
import 'babel-polyfill';
import echarts from '@/common/echartsConfig';
import Utils from '@/common/utils';
import {ajax} from '@/common/ajax';
export default {
  name: 'YcChip',
  props: {
    pageId: {
      type: Number,
      default() {
        return 0;
      },
    },
  },
  data() {
    return {
      config: '',
      paper: null,
    };
  },
  // watch: {
  //   config: {
  //     handler(newVal, oldVal) {
  //       console.log('config,config,config', newVal);
  //       if (Object.keys(newVal).length === 0) return;
  //       this.init();
  //     },
  //   },
  // },
  mounted() {
    this.paper = document.getElementById('paper');
    this.getConfig()
  },
  methods: {
    init() {
      const { element } = this.config;
      for (let i = 0; i < element.length; i++) {
        if (element[i].type === 'chart') {
          const div = document.createElement('div');

          div.id = `yc-1-${i}`;
          Utils.setStyle(div, element[i].style);
          this.paper.appendChild(div);
          const myChart = echarts.init(div);
          const option = element[i].option;

          // 使用刚指定的配置项和数据显示图表。
          myChart.setOption(option);
        }
      }
    },
    select(e) {
      // 添加样式
      e.currentTarget.className += ' select-active';
      this.changeSelectComponent(true);
    },
    async getConfig(){
      const res = await ajax({
        url: '/nbi/mgt/general/general/getOne',
        method: 'POST',
        data: { id:this.pageId },
      });
      if (res) {
        this.config=JSON.parse(res.c1)
        this.init();
        
      }
    }
  },
};
</script>
<style lang="scss">

</style>
