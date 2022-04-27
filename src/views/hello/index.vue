<template>
<div>
  欢迎访问本项目，本项目是基于@Vue/CLI3构建的移动端h5项目模板，内容持续完善...
</div>
</template>

<script type="text/babel">
import * as api from '@/api/index';
import BaseTip from '@/component_basics/BaseTip';
// 组件
export default {
  name: 'page-hello',
  components: {
    BaseTip
  },
  data() {
    return {

    };
  },
  created() {
    this.getData()
  },
  methods: {
    getData(){
        //  api.searchApi('ww', '').then(res => {
                    
        //             this.$router.push({
        //                 name: 'details',
        //                 params: { need: res.data, car: this.carNum + '_' + value, time },
        //             });
        //         });
    }
  }
};
</script>

<style lang="less" rel="stylesheet/less" >
@import './style.less';
</style>
