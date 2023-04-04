<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from "vue-router";
import Button from "@/components/button.vue";
import Button2 from "@/components/button2.vue";
import Button3 from "@/components/button3.vue";
import Button4 from "@/components/button4.vue";
let value = "优惠劵1";
let value2 = "优惠劵2";
const router = useRouter();
const couponButt = (obj: Number) => {
  switch (obj) {
    case 1:
      router.push("/");
      break;
    case 2:
      router.push("/coupon");
      break;
    case 3:
      router.push("/cartoon");
      break;
    case 4:
      router.push("/watermark");
      break;
    case 5:
      router.push("/three");
      break;
  }
};
</script>

<template>
  <div class="nav_box">
    <Button :text="value" @click="couponButt(1)"></Button>
    <Button
      :text="value2"
      @click="couponButt(2)"
      style="margin-left: 20px"
    ></Button>
    <Button2 @click="couponButt(3)" style="margin-left: 20px"></Button2>
    <Button3 @click="couponButt(4)" style="margin-left: 20px"></Button3>
    <Button4 @click="couponButt(5)" style="margin-left: 20px"></Button4>
  </div>
  <RouterView />
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
.nav_box {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
