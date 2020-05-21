// 热搜关键词
<template>
  <div class="Antistop">
      <div>
          <span v-for="(item, index) in datas" :key="index">{{item.name}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: "Antistop",
  data() {
    return {};
  },
  props:{
      datas:{
          type:Array,
          default:[]
      }
  },
  mounted() {
      
  },
  methods: {}
};
</script>
<style lang="less" scoped>
</style>
