// 按需引入
import * as echarts from 'echarts';
import { CanvasRenderer } from 'echarts/renderers';
import { GridComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { PieChart } from 'echarts/charts';
import { LineChart } from 'echarts/charts';
import { LegendComponent } from 'echarts/components';
import { TooltipComponent } from 'echarts/components';
import { EffectScatterChart } from 'echarts/charts';
import { MapChart } from 'echarts/charts';
// // 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
// import * as echarts from 'echarts/core';
// // 引入柱状图图表，图表后缀都为 Chart
// import {
//     BarChart
// } from 'echarts/charts';
echarts.use(
  [BarChart, GridComponent, CanvasRenderer, LegendComponent, PieChart,
     LineChart, EffectScatterChart, MapChart, TooltipComponent],
);
export default echarts;