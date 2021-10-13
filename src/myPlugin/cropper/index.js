import cropper from './index.vue';
cropper.install = Vue => Vue.component(cropper.name, cropper);//.name就是开始说的vue文件暴露出来的name名，ldcPagination整个组件
export default cropper