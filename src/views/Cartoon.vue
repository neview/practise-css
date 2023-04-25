<script setup lang="ts">
import {
  ref,
  getCurrentInstance,
  onMounted,
  onBeforeMount,
  onDeactivated,
  watchEffect,
} from "vue";
import "../assets/magic.css";
const { appContext, proxy }: any = getCurrentInstance();
let isShow = ref(1);
let isShow2 = ref(1);
const butt = () => {
  isShow2.value = 0;
  setTimeout(() => {
    isShow.value = 0;
  }, 500);
  setTimeout(() => {
    isShow.value = 1;
    isShow2.value = 1;
  }, 1500);
};
const box = ref(null);

const getList = (obj: object) => {
  console.log("obj", obj);
};
const getNode = () => {
  console.log("box", box.value);
  console.log("name", appContext.config.globalProperties.name);
  console.log("proxy", proxy.$refs.box);
};
watchEffect((onInvalidate) => {
  console.log("沐华");
  onInvalidate(() => {
    console.log(2222);
  });
});
onMounted(() => {
  getList([1, 2, 3]);
  getNode();
});
// 组件卸载前 对应 vue2 的 beforeDestroy
onBeforeMount(() => {});
// 退出缓存组件，对应 vue2 的 deactivated
onDeactivated(() => {});
</script>
<template>
  <div class="cartoon twisterInUp" @click="butt" ref="box"></div>
  <div
    class="cartoon vanishIn"
    :class="isShow2 === 0 ? 'magic' : ''"
    v-if="isShow === 1"
  ></div>
  <div class="dotted_line"></div>
</template>
<style lang="scss" scoped>
.cartoon {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  margin: 50px auto;
  background-color: antiquewhite;
  animation-duration: 1s;
}
.dotted_line {
  width: 200px;
  height: 100px;
  margin: 0 auto;
  background-color: antiquewhite;
  -webkit-mask-image: radial-gradient(
    circle at 50px 10px,
    transparent 10px,
    red 10.5px
  );
  -webkit-mask-position: 0 -10px;
  //   outline: 1px solid red;
  //   outline-offset: -5px;
}
</style>
