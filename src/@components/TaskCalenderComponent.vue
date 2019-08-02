<template>
  <div class="mt-8">
    <div class="select-none cursor-pointer">
      <div class="text-center">
        <h2>July</h2>
      </div>
      <div class="mt-4 flex">
        <div
          style="width: 14.285%; color: #D7D9E8;"
          class="text-center pb-4"
          v-for="(key, index) in weeks"
          :key="index"
        >{{key}}</div>
      </div>
      <div class="overflow-y-hidden select-none" style="height: 230px;">
        <div scrollable class="h-full w-full">
          <div class="flex-wrap flex h-full" v-for="(month, mindex) in getLenOfMonth + 1" :key="mindex">
            <div
              style="width: 14.285%; padding-top: 14.285%;"
              class="text-center relative"
              v-for="(key, index) in getLenOfDays"
              :key="index"
            >
              <div
                v-if="key >= calender.getFirstDayInMonth(currentMonth) + 1"
                class="absolute top-0 left-0 w-full h-full"
                @click="selectDate(key - calender.getFirstDayInMonth(currentMonth))"
                :style="`color: #${currentMonth == 7 && key <= today? 'D7D9E8':'131E77'}`"
                :class="{selected: selectedDay ==  key - calender.getFirstDayInMonth(currentMonth)}"
              >{{key - calender.getFirstDayInMonth(currentMonth) }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.selected {
  color: white !important;
  z-index: 10;

  z-index: 1;

  &:after {
    content: "";
    z-index: -1;
    position: absolute;
    border-radius: 50%;
    background: linear-gradient(to bottom, #4d5dff, #0018ff);
    width: 30px;
    height: 30px;
    transform: translateY(calc(calc(50% - 15px) / 2)) translateX(-50%);
    top: 0px;
    left: 50%;
  }
}
</style>

<script>
import Calender from "@/@function/Calender.js";

function listen(_this) {
  this.$el = document.querySelector("div[scrollable]");
  this.touchPosition = {
    x: 0,
    y: 0
  };
  this.dimension = {
    height: 0,
    width: 0
  };
  this.start = {
    x: 0,
    y: 0
  };
  this.animate = {
    x: 0,
    y: 0
  };
  this.touch = false;

  const touchStart = e => {
    this.setTouchPosition({
      x: e.pageX - this.start.x,
      y: e.pageY - this.start.y
    });
    this.touch = true;
    this.$el.addEventListener("mousemove", touchMove);
  };

  const touchMove = e => {
    const moveX = e.pageX - this.start.x,
      moveY = e.pageY - this.start.y;

    const diffX = this.touchPosition.x - moveX,
      diffY = this.touchPosition.y - moveY;

    this.setAnimate({
      x: diffX,
      y: diffY
    });
    this.setTouchPosition({
      x: moveX,
      y: moveY
    });
  };

  this.setAnimate = ({ x, y }) => {
    this.animate.x += x * -1;
    this.animate.y += y * -1;
    this.$el.style.webkitTransform = `translateY(${this.animate.y - getHeight()}px)`;
  };

  this.checkSwipeStatus = () => {
    if (this.animate.y < -60) {
      // Swipe Down
      if (_this.currentMonth + 1 > _this.maximumMonth)
        _this.currentMonth = _this.maximumMonth;
      else _this.currentMonth += 1;
    } else if (this.animate.y > 60) {
      // Swipe Up
      if (_this.currentMonth - 1 < _this.minimumMonth)
        _this.currentMonth = _this.minimumMonth;
      else _this.currentMonth -= 1;
    }
  };

  const getHeight = () => {
    return _this.getCurrentMonthIndex() * this.dimension.height;
  }

  this.setTouchPosition = ({ x, y }) => {
    this.touchPosition.x = x;
    this.touchPosition.y = y;
  };

  this.reset = () => {
    this.animate = {
      x: 0,
      y: 0
    };
    this.setAnimate(this.animate);
  };

  const touchEnd = e => {
    this.$el.removeEventListener("mousemove", touchMove);
    this.checkSwipeStatus();
    this.reset();
  };

  this.scrollable = () => {
    this.dimension = {
      width: this.$el.offsetWidth,
      height: this.$el.offsetHeight
    };
    this.start = {
      y: this.$el.getBoundingClientRect().top,
      x: this.$el.getBoundingClientRect().left
    };
    this.$el.addEventListener("mousedown", touchStart);
    window.addEventListener("mouseup", touchEnd);
  };
}

export default {
  data() {
    return {
      calender: null,
      weeks: ["S", "M", "T", "W", "T", "F", "S"],
      today: 21,
      selectedDay: 0,
      currentMonth: 7,
      maximumMonth: 12,
      minimumMonth: 7
    };
  },
  created(){
    this.calender = new Calender();
  },
  mounted() {
    listen = new listen(this);
    listen.scrollable();
  },
  methods: {
    selectDate(day) {
      if (day < this.today) return;
      if (day > 31) return;
      this.selectedDay = day;
    },
    getCurrentMonthIndex() {
      return this.currentMonth - this.minimumMonth;
    },
    isCurrentMonth(month){
     
    }
  },
  computed: {
    getLenOfMonth() {
      return this.maximumMonth - this.minimumMonth;
    },
    getLenOfDays() {
      return this.calender.getFirstDayInMonth(this.currentMonth) + this.calender.getDaysInMonth(this.currentMonth);
    }
    
  }
};
</script>
