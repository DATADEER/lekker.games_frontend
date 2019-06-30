<template>
  <div class="timeSlider text-white">
    <div class="range">
      <input
        :disabled="this.disabled"
        class="border-0 pb-4 pt-4"
        v-model="sliderInput"
        type="range"
        min="1"
        max="12"
        steps="1"
        value="1"
      />
    </div>

    <ul class="range-labels list-reset flex flex-row justify-between">
      <li
        class="range-label text-sm"
        v-for="rangeOption in allRangeOptions"
        v-bind:key="rangeOption.value"
        v-bind:class="{
          'active selected': rangeOption.value === selectedValue
        }"
        @click="selectRangeByLabel(rangeOption, allRangeOptions)"
      >
        {{ convertMinutesToHours(rangeOption.value)
        }}<span class="text-xs text-white-very-very-opaque">{{
          rangeOption.unit
        }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import store from "@/store";
import utils from "@/components/utils";

export default {
  name: "time-slider",
  props: ["disabled"],
  data() {
    return {
      sliderInput: 1,
      allRangeOptions: [
        {
          value: 5,
          unit: "m"
        },
        {
          value: 10,
          unit: "m"
        },
        {
          value: 20,
          unit: "m"
        },
        {
          value: 30,
          unit: "m"
        },
        {
          value: 45,
          unit: "m"
        },
        {
          value: 60,
          unit: "m"
        },
        {
          value: 120,
          unit: "h"
        },
        {
          value: 180,
          unit: "h"
        },
        {
          value: 240,
          unit: "h"
        },
        {
          value: 300,
          unit: "h"
        },
        {
          value: 360,
          unit: "h"
        },
        {
          value: 600,
          unit: "h"
        }
      ]
    };
  },
  mixins: [utils],
  methods: {
    selectRangeByLabel(rangeOption, allRangeOptions) {
      const indexOfSelectedOption = allRangeOptions.findIndex(option => {
        return option.value === rangeOption.value;
      });
      this.sliderInput = indexOfSelectedOption + 1;
    },
    storeInterestThreshold(minutes) {
      store.commit("setInterestThreshold", minutes);
      this.$emit("sliderChanged");
    }
  },
  computed: {
    selectedValue() {
      const selectedValue = this.allRangeOptions[this.sliderInput - 1].value;
      this.storeInterestThreshold(selectedValue);
      return selectedValue;
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
@import "./../../assets/scss/variables.scss";
@import "./thumb.scss";
@import "./track.scss";

.timeSlider {
  width: 600px;
}

.range-labels {
  padding: 0;
  margin: 0;
  cursor: pointer;
  font-family: $font-subtitle;
  color: $white-75;
  font-size: 0.6rem;
}

.range-label {
  float: left;
  width: 50px;
  height: 20px;
  position: relative;
  user-select: none;

  box-sizing: border-box;

  &:nth-child(1) {
    padding-left: 1%;

    &::after,
    &::before {
      margin-left: 23%;
    }
  }

  &:nth-child(2) {
    &::after,
    &::before {
      margin-left: 28%;
    }
  }

  &:nth-child(3) {
    padding-left: 1%;

    &::after,
    &::before {
      margin-left: 32%;
    }
  }

  &:nth-child(4) {
    padding-left: 1%;

    &::after,
    &::before {
      margin-left: 33%;
    }
  }

  &:nth-child(5) {
    padding-left: 1%;

    &::after,
    &::before {
      margin-left: 38%;
    }
  }

  &:nth-child(6) {
    padding-left: 2.5%;

    &::after,
    &::before {
      margin-left: 40%;
    }
  }

  &:nth-child(7) {
    padding-left: 3%;

    &::after,
    &::before {
      margin-left: 43%;
    }
  }

  &:nth-child(8) {
    padding-left: 3%;

    &::after,
    &::before {
      margin-left: 47%;
    }
  }

  &:nth-child(9) {
    padding-left: 3%;

    &::after,
    &::before {
      margin-left: 49%;
    }
  }

  &:nth-child(10) {
    padding-left: 4%;

    &::after,
    &::before {
      margin-left: 54%;
    }
  }

  &:nth-child(11) {
    padding-left: 4%;

    &::after,
    &::before {
      margin-left: 55%;
    }
  }

  &:nth-child(12) {
    padding-left: 4%;

    &::after,
    &::before {
      margin-left: 59%;
    }
  }

  &::before {
    pointer-events: none;
    z-index: 40;
    position: absolute;
    top: -43px;
    right: 0;
    left: -7px;
    content: "";
    width: 22px;
    height: 22px;
    background: $black-even-lighter;
    border-radius: 100%;
  }

  &::after {
    z-index: 30;
    position: absolute;
    top: -28px;
    right: 0;
    left: 0;
    content: "";
    width: 8px;
    height: 20px;
    background: $black-lighter;
  }
}

input[type="range"] {
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  width: 100%; /* Specific width is required for Firefox. */
  background: transparent; /* Otherwise white in Chrome */
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
}

input[type="range"]:focus {
  outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
}

input[type="range"]::-ms-track {
  width: 100%;
  cursor: pointer;

  /* Hides the slider so custom styles can be added */
  background: transparent;
  border-color: transparent;
  color: transparent;
}

.range-labels > li.selected {
  color: $color-teal;
}
</style>
