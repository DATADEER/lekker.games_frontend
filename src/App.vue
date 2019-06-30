<template>
  <div class="app__wrapper" id="app">
    <router-view />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  methods: {
    wakeUpAPI() {
      return axios.get("/api/wakeup");
    }
  },
  created() {
    this.wakeUpAPI()
      .then(data => {
        console.log(data.data);
      })
      .catch(() => {
        console.log("API does not respond ⚠️");
      });
  }
};
</script>

<style lang="scss">
@tailwind preflight;

@import url("https://fonts.googleapis.com/css?family=Lekton:400,700|Press+Start+2P");
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css");
@import "./assets/scss/mixins.scss";
@import "./assets/scss/animations.scss";
@import "./assets/scss/variables.scss";

html {
  background-color: #151515;
}

.app__wrapper {
  position: relative;
}

::selection {
  background: $color-pink; /* WebKit/Blink Browsers */
}

@font-face {
  font-family: "lazer84";
  src: url("./assets/fonts/lazer84/lazer84-webfont.woff2") format("woff2"),
    url("./assets/fonts/lazer84/lazer84-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

.chromatic-3d-effect {
  @include chromatic3dEffectText();
}

.chromatic-3d-effect-box {
  @include chromatic3dEffectBox();
}

.anchor {
  @apply text-teal cursor-pointer;
}

.anchor:hover {
  @apply text-teal cursor-pointer underline;
}

.anchor:active {
  @apply text-pink cursor-pointer underline;
}

.anchor:visited {
  @apply text-teal-dark cursor-pointer no-underline;
}

.button-primary {
  @apply text-white bg-pink font-subtitle;
}

.button-primary:hover {
  @apply bg-pink-lighter;
}

.button-secondary {
  @apply text-pink bg-transparent font-subtitle border-2 border-dashed border-pink;
}

.button-secondary:hover {
  @apply text-white border-solid;
}

@tailwind utilities;
</style>
