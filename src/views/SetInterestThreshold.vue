<template>
  <div class="SetInterestThreshold relative">
    <section class="bg-black h-screen ">
      <mainMenu class="absolute pin-t z-40"></mainMenu>

      <div class="flex pt-32 p-12">
        <main class="w-full">
          <div class="mb-12 flex flex-row">
            <div class="w-1/2 mr-4">
              <div
                v-bind:class="[
                  { 'disabled-container': listHasBeenEditedManually }
                ]"
                class="slider__wrapper mb-2"
                @mouseover="showSliderWarning"
              >
                <span
                  class="block font-subtitle text-white-very-opaque leading-loose mb-4"
                  ><h1 class="font-subtitle text-white-opaque inline">1.</h1>
                  How long do you usually spend on a game<br />
                  before you
                  <strong class="text-white"
                    >decide if its a good one</strong
                  ></span
                >

                <time-slider v-on:sliderChanged="changeThreshold"></time-slider>
              </div>
              <span
                v-if="isSliderWarningVisible"
                class="slider-warning font-sans bg-orange-dark py-2 px-2"
                ><strong>Warning:</strong> Changing the slider now, will reset
                your manual list sorting</span
              >
            </div>
            <div class="w-1/2">
              <span
                class="block font-subtitle text-white-very-opaque leading-loose mb-4"
                ><h1 class="font-subtitle text-white-opaque inline">2.</h1>
                Split your game library into <br />
                games you <strong class="text-white">like</strong> and
                <strong class="text-white">dislike</strong></span
              >
              <button
                @click="confirmSelection()"
                class="button-primary block text-xs font-bold p-3 tracking-wide uppercase"
              >
                confirm selection
              </button>
            </div>
          </div>

          <section class="w-full flex">
            <div class="w-1/2 inline-block mr-4">
              <div class="flex justify-start mb-2">
                <h3 class="font-subtitle tracking-wider text-white mr-6">
                  DISLIKE
                </h3>
                <h4 class="font-subtitle text-white-very-very-opaque">
                  {{ gamesSplit.boring.length }}
                </h4>
              </div>

              <div
                v-for="boringGame in gamesSplit.boring"
                class="game__container boring w-32 inline-block relative"
                :key="boringGame.appid"
              >
                <div
                  class="inline-block"
                  @click="moveGameIntoList('boring', 'interesting', boringGame)"
                >
                  <img
                    alt="game logo"
                    v-lazy="
                      convertSteamImageHashToUrl(
                        boringGame.appid,
                        boringGame.img_logo_url
                      )
                    "
                  />
                </div>
                <div
                  class="icon__overlay absolute pin-t pin-l w-full h-full inline-flex justify-center items-center bg-black-opaque"
                >
                  <p class="text-white text-xs font-sans m-2">
                    {{ boringGame.name }}
                  </p>
                  <img
                    class="icon-like w-12"
                    src="../assets/img/interest/arrow-right.svg"
                  />
                </div>
              </div>
            </div>
            <div class="w-1/2 inline-block">
              <div class="flex justify-start mb-2">
                <h3 class="font-subtitle tracking-wider text-white">LIKE</h3>
                <h4 class="font-subtitle text-white-very-very-opaque ml-6">
                  {{ gamesSplit.interesting.length }}
                </h4>
              </div>
              <div
                v-for="interestingGame in gamesSplit.interesting"
                class="game__container interesting w-32 inline-block relative"
                :key="interestingGame.appid"
              >
                <div
                  class="inline-block"
                  @click="
                    moveGameIntoList('interesting', 'boring', interestingGame)
                  "
                >
                  <img
                    alt="game logo"
                    v-lazy="
                      convertSteamImageHashToUrl(
                        interestingGame.appid,
                        interestingGame.img_logo_url
                      )
                    "
                  />
                </div>
                <div
                  class="icon__overlay absolute pin-t pin-l w-full h-full inline-flex justify-center items-center bg-black-opaque"
                >
                  <img
                    class="icon-dislike w-12"
                    src="../assets/img/interest/arrow-left.svg"
                  />
                  <p class="text-white text-xs font-sans m-2">
                    {{ interestingGame.name }}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from "vue";
import mainMenu from "@/components/header/menu";
import mainFooter from "@/components/footer/footer";
import store from "@/store";
import timeSlider from "@/components/slider/time-slider";
import utils from "@/components/utils";
import VueLazyload from "vue-lazyload";

import loadingFile from "../assets/img/defaults/loading-file.png";
import missingFile from "../assets/img/defaults/missing-file.png";

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: missingFile,
  loading: loadingFile,
  attempt: 1
});

export default {
  name: "SetInterestThreshold",
  data() {
    return {
      listHasBeenEditedManually: false,
      isSliderWarningVisible: false,
      gamesSplit: {
        boring: [],
        interesting: []
      }
    };
  },
  components: {
    mainFooter,
    mainMenu,
    timeSlider
  },
  mixins: [utils],
  methods: {
    showSliderWarning() {
      if (this.listHasBeenEditedManually) {
        this.isSliderWarningVisible = true;
      }
    },
    moveGameIntoList(fromListName, toListName, game) {
      this.listHasBeenEditedManually = true;
      if (!this.gamesSplit[toListName].includes(game)) {
        const listCopy = [...this.gamesSplit[toListName]];
        listCopy.unshift(game);
        this.gamesSplit[toListName] = listCopy;

        this.gamesSplit[fromListName] = this.removeElementFromArray(
          this.gamesSplit[fromListName],
          game
        );
      }
    },
    getUserGames() {
      return store.getters.steamGames;
    },
    getUserProfile() {
      return store.getters.steamProfile;
    },
    splitGamesOnThreshold(threshold, userGamesList) {
      const boring = userGamesList.filter(gameDetails => {
        return gameDetails.playtime_forever <= threshold;
      });
      const interesting = userGamesList.filter(gameDetails => {
        return gameDetails.playtime_forever > threshold;
      });
      return [boring, interesting];
    },
    changeThreshold() {
      this.listHasBeenEditedManually = false;
      this.isSliderWarningVisible = false;
      this.recalculateSplit(this.getUserGames().list);
    },
    recalculateSplit(gamesToSplit) {
      const splitResults = this.splitGamesOnThreshold(
        this.interestThreshold,
        gamesToSplit
      );

      const boring = splitResults[0];
      const interesting = splitResults[1];

      this.gamesSplit = { boring, interesting };
    },
    confirmSelection() {
      this.$router.push({ name: "result" });
    }
  },
  computed: {
    interestThreshold() {
      const interestThreshold = store.state.steamUser.interestThreshold;
      return interestThreshold;
    }
  },
  mounted() {
    this.recalculateSplit(this.getUserGames().list);
  }
};
</script>

<style lang="scss" scoped>
.disabled-container {
  opacity: 0.4;
}

.list-right-item {
  display: inline-block;
  margin-right: 10px;
}
.list-right-enter-active,
.list-right-leave-active {
  transition: all 1s;
}
.list-right-enter /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(200px);
}

.list-right-leave-to {
  opacity: 0;
  transform: translateX(-200px);
}

.list-left-item {
  display: inline-block;
  margin-right: 10px;
}
.list-left-enter-active,
.list-left-leave-active {
  transition: all 1s;
}
.list-left-enter /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-200px);
}

.list-left-leave-to {
  opacity: 0;
  transform: translateX(200px);
}

@keyframes thumb-turn-up {
  0% {
    transform: rotate(-180deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes thumb-turn-down {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(-180deg);
  }
}

@keyframes pointing-right {
  0% {
    transform: translateX(3px);
  }
  50% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(3px);
  }
}

@keyframes pointing-left {
  0% {
    transform: translateX(-3px);
  }
  50% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(-3px);
  }
}

@keyframes move-left {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(-500px);
  }
}

.move-item-left {
  animation: move-left 300ms ease-in;
}

.icon__overlay {
  display: flex;
  pointer-events: none;

  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.1s ease-in;
}

.game__container:hover .icon__overlay {
  height: 150%;
  width: 150%;
  z-index: 20;

  visibility: visible;
  opacity: 1;
}

.game__container.boring:hover .icon__overlay {
  background-color: #38c172;
}

.game__container.interesting:hover .icon__overlay {
  background-color: #e3342f;
}

.icon-like {
  animation: pointing-right 1s ease-in-out infinite;
}

.icon-dislike {
  animation: pointing-left 1s ease-in-out infinite;
}

/*
    .game__image:hover {
        transform: scale(1.5,1.5);
        transition: transform 200ms ease-in;
    }
    */
</style>
