<template>
  <div id="app">
    <box />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import box from "./pages/box";
export default {
  name: "App",
  components: {
    HelloWorld,
    box
  }
};
</script>
 <style lang="less">

@import url('./assets/less/all.less');
#app {
}
</style>

