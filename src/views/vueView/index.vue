<template>
  <div class="home">
    <img alt="Vue logo" src="~@/assets/images/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/component_modules/HelloWorld.vue'

export default {
  name: 'page-vue-view',
  components: {
    HelloWorld
  },
  created() {},
  methods: {
  
  }
}
</script>
<style lang="less" scoped>

</style>
