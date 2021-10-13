<template>
  <div id="paper" class="paper" @click="select" />
</template>

<script>
import Vue from 'vue';
import echarts from '../../common/echartsConfig';
import Utils from '../../common/utils';
Vue.prototype.$echarts = echarts;
Vue.prototype.$utils = Utils;
export default {
  name: 'YcChip',
  props: {
    config: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      visible: false,
      paper: null,
    };
  },
  watch: {
    config: {
      handler(newVal, oldVal) {
        console.log('config,config,config', newVal);
        if (Object.keys(newVal).length === 0) return;
        this.init();
      },
    },
  },
  mounted() {
    this.paper = document.getElementById('paper');
    this.init();
  },
  methods: {
    init() {
      const { element } = this.config;
      for (let i = 0; i < element.length; i++) {
        if (element[i].type === 'chart') {
          const div = document.createElement('div');

          div.id = `yc-1-${i}`;
          this.$utils.setStyle(div, element[i].style);
          this.paper.appendChild(div);
          const myChart = this.$echarts.init(div);
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
  },
};
</script>
<style lang="scss">

</style>
