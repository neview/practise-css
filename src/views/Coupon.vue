<script setup lang="ts">
import * as Sentry from "@sentry/browser";

Sentry.captureException("测试失败信息111");
</script>

<template>
  <div class="coupon">
    <div class="coupon_box"></div>
    <div class="coupon_box2"></div>
  </div>
  <div class="coupon_box3">888</div>
  <div class="coupon_box4">111</div>
  <div class="ellipse"></div>
  <div class="fillet-box"></div>
</template>
<style lang="scss" scoped>
/* 优惠劵
   -webkit-mask: radial-gradient(circle at 0 0, transparent 20px, red 0),
    radial-gradient(circle at right 0, transparent 20px, red 0),
    radial-gradient(circle at 0 100%, transparent 20px, red 0),
    radial-gradient(circle at right 100%, transparent 20px, red 0);
  -webkit-mask-composite: source-in;
*/
.coupon {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  .coupon_box {
    width: 150px;
    height: 100px;
    background-color: antiquewhite;
    -webkit-mask: $couponStyle1;
    -webkit-mask-composite: source-in;
    position: relative;
    .fillet {
      position: absolute;
      top: 0;
      right: 0;
      width: 15px;
      height: 15px;
      background-color: antiquewhite;
      border-radius: 100% 0 0 0;
      transform: rotate(-90deg);
      border-left: 1px dashed red;
      .fillet_inner {
        width: 10px;
        height: 10px;
        background-color: #ffffff;
        border-radius: 100% 0 0 0;
        margin-left: 5px;
        margin-top: 5px;
      }
    }
  }
  .coupon_box2 {
    width: 150px;
    height: 100px;
    background-color: antiquewhite;
    -webkit-mask: $couponStyle2;
    -webkit-mask-composite: source-in;
  }
}
.coupon_box3 {
  width: 150px;
  height: 100px;
  margin: 0 auto;
  margin-top: 100px;
  background-color: antiquewhite;
  -webkit-mask: radial-gradient(circle at 20px 20px, #0000 20px, red 0) -20px -20px /
    50%;
  -webkit-mask: radial-gradient( circle at 50%, red 5px, #000000) 50% 50% / 100%
      20px,
    radial-gradient(circle at 20px 20px, #0000 20px, red0) -20px -20px/50%;
  -webkit-mask-composite: destination-out;
  mask-composite: subtract; /*Firefox*/
}
.coupon_box4 {
  width: 300px;
  height: 150px;
  margin: auto;
  -webkit-mask: radial-gradient(circle at 50%, red 5px, transparent 0) 50% 50% /
      100% 20px,
    radial-gradient(circle at 20px 20px, transparent 20px, red 0) -20px -20px /
      50%;
  -webkit-mask-composite: destination-out;
  background: linear-gradient(45deg, orange, red);
}
.ellipse {
  width: 150px;
  height: 150px;
  border-radius: 100% 0 0 0;
  background-color: aquamarine;
}
.fillet-box {
  width: 150px;
  height: 100px;
  margin: 0 auto;
  background: radial-gradient(
        circle at bottom left,
        transparent 15px,
        #b4a078 16px
      )
      bottom left,
    radial-gradient(circle at top left, transparent 15px, #b4a078 16px) top left,
    radial-gradient(circle at top right, transparent 15px, #b4a078 16px) top
      right,
    radial-gradient(circle at bottom right, transparent 15px, #b4a078 16px)
      bottom right;
  background-size: 51% 51%;
  background-repeat: no-repeat;
  outline: 1px solid red;
  outline-offset: -5px;
}
</style>
