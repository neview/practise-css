<script setup lang="ts">
import TWEEN from "@tweenjs/tween.js";
import { ref } from "@vue/reactivity";
var coords = { x: 300 }; // 起始点 为 x = 300
var tween = new TWEEN.Tween(coords)
  .to({ x: 0 }, 1000) // 终点为 x = 0, 并且这个动作将在1秒内完成
  .easing(TWEEN.Easing.Linear.None); // 匀速
const box = ref<any>(null);
tween.onUpdate(function () {
  console.log("运行了");
  var x = coords.x;
  var y = (1 / 120) * x * x - (11 / 6) * x + 100;
  box.value.style.setProperty(
    "transform",
    "translate(" + x + "px, " + y + "px)"
  );
});
</script>
<template>
  <div class="bomb" ref="box"></div>
  <div class="box">
    <div class="bomb2"></div>
  </div>
</template>
<style lang="scss" scoped>
.bomb {
  width: 50px;
  height: 50px;
  margin: 50px auto;
  background-color: rgb(206, 190, 191);
}
.box {
  width: 50px;
  background-color: aquamarine;
  padding-bottom: 50px;
  margin: 0 auto;
}
.bomb2 {
  width: 50px;
  height: 50px;
  margin: 100px auto;
  background-image: radial-gradient(transparent 1px, #fff 1px);
  background-size: 4px 4px;
  backdrop-filter: blur(4px);
}
</style>
