<template>
  <div class="cropper">123</div>
</template>

<script>
export default {
  name:'cropper',
  data() {
    return {
      visible: false,
    };
  },
  mounted() {
    console.log('引入新组件');
  },
  methods: {
  
  },
};
</script>
<style lang="scss">
  .cropper{
    width:200px;
    height: 100px;
    background: rebeccapurple;
  }
</style>
