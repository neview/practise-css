<script setup lang="ts">
import { ref } from "vue";
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
</script>
<template>
  <div class="cartoon twisterInUp" @click="butt"></div>
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
