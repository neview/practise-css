<script setup lang="ts">
interface yourConfig {
  width: Number; // 卡券宽度
  height: Number; // 卡券高度
  borderRadius: Number; // 卡券四个角的圆角半径
}
let yourConfig2: yourConfig = {
  width: 200,
  height: 400,
  borderRadius: 15,
};
</script>

<template>
  <v-coupon :config="yourConfig2" class="coupon_box">
    <div class="content">你要展示的内容</div>
  </v-coupon>
</template>
<style lang="scss" scoped>
.coupon_box {
  transform: rotate(90deg);
  .content {
    color: $color;
    transform: rotate(-90deg);
  }
}
</style>
