<template>
  <view class="tui-digital__roller" style="margin-left: 50px">
    <view
      class="tui-digital__box"
      v-for="(item, index) in columns"
      :key="index"
      :style="{ width: cellWidth, height: height + 'px' }"
    >
      <view
        class="tui-digital__column"
        :style="{
          transform: `translate3d(0, -${keys[index] * height}px, 0)`,
          transitionDuration: `${duration}s`,
          transitionTimingFunction: animation,
        }"
      >
        <view
          class="tui-digital__item"
          v-for="(val, idx) in item"
          :key="idx"
          :style="{
            color: color,
            fontSize: size + 'rpx',
            fontWeight: bold ? 'bold' : 'normal',
            height: height + 'px',
            lineHeight: size + 'rpx',
          }"
          >{{ val }}</view
        >
      </view>
    </view>
    <view @click="digitalScroll" style="margin-left: 100px; cursor: pointer"
      >数字滚动
    </view>
  </view>
</template>

<script>
export default {
  name: "tuiDigitalRoller",
  props: {
    // value: {
    //   type: [Number, String],
    //   default: 50,
    // },
    color: {
      type: String,
      default: "#5677fc",
    },
    //rpx
    size: {
      type: Number,
      default: 32,
    },
    bold: {
      type: Boolean,
      default: false,
    },
    //滚动行高度 rpx
    cellHeight: {
      type: Number,
      default: 32,
    },
    //单个数字宽度
    cellWidth: {
      type: String,
      default: "auto",
    },
    // 动画过渡效果
    animation: {
      type: String,
      default: "cubic-bezier(0, 1, 0, 1)",
    },
    //动画时间
    duration: {
      type: Number,
      default: 1.2,
    },
  },
  watch: {
    value(val) {
      this.initColumn(this.value);
    },
    cellHeight(val) {
      this.handleHeight(val);
    },
  },
  data() {
    return {
      columns: [],
      keys: [],
      height: 0,
      value: 0,
    };
  },
  created() {
    this.handleHeight(this.cellHeight);
    this.initColumn(this.value);
    // setInterval(() => {
    //   this.value += 1;
    // }, 1000);
  },
  methods: {
    digitalScroll() {
      this.value += 1;
    },
    handleHeight(h) {
      //   this.height = uni.upx2px(h || 0);
      this.height = h * 2 || 0;
    },
    initColumn(val) {
      val = val + "";
      let digit = val.length,
        arr = [],
        rows = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      for (let i = 0; i < digit; i++) {
        if (val[i] === "." || val[i] === ",") {
          arr.push(val[i]);
        } else {
          arr.push(rows);
        }
      }
      this.columns = arr;
      this.roll(val);
    },
    roll(value) {
      let valueArr = value.toString().split(""),
        lengths = this.columns.length,
        indexs = [];

      while (valueArr.length) {
        let figure = valueArr.pop();
        if (figure === "." || figure === ",") {
          indexs.unshift(0);
        } else {
          indexs.unshift(Number(figure));
        }
      }
      while (indexs.length < lengths) {
        indexs.unshift(0);
      }
      this.keys = indexs;
    },
  },
};
</script>

<style scoped>
.tui-digital__roller {
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
}

.tui-digital__box {
  overflow: hidden;
}

.tui-digital__column {
  transform: translate3d(0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.tui-digital__item {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
