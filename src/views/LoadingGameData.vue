<template>
  <div class="LoadingGameData">
    <section class="bg-black h-screen overflow-hidden">
      <mainMenu class="absolute pin-t z-40"></mainMenu>

      <div class="flex">
        <aside class="display-none md:w-1/4">
          <icon-wrapper-left
            :iconFilenames="iconFilenames"
            :isAnimated="true"
          ></icon-wrapper-left>
        </aside>
        <main class="w-full md:w-1/2 flex flex-col justify-center items-center">
          <div class="text-white font-subtitle text-xl md:text-4xl mx-6 mb-6">
            LOADING GAME DATA
          </div>
          <meme-message class="w-auto">
            <component
              :is="currentMessageComponent"
              :message="currentMessageText"
            ></component>
          </meme-message>
        </main>
        <aside class="display-none md:w-1/4">
          <icon-wrapper-right
            :iconFilenames="iconFilenames"
            :isAnimated="true"
          ></icon-wrapper-right>
        </aside>
      </div>
    </section>
    <mainFooter></mainFooter>
  </div>
</template>

<script>
import iconWrapperLeft from "@/components/wrapper/icon-wrapper-left";
import iconWrapperRight from "@/components/wrapper/icon-wrapper-right";
import mainMenu from "@/components/header/menu";
import mainFooter from "@/components/footer/footer";
import textMessageComponent from "@/components/messages/text";
import utils from "@/utils/utils";
import memeMessage from "@/components/memeface/message";
import axios from "axios";
import Rx from "rxjs";
import store from "@/store";

export default {
  name: "LoadingGameData",
  data() {
    return {
      currentMessageComponent: textMessageComponent,
      currentMessageText:
        "Please stand by i am collecting all the necessary game data to give you a recommendation",
      iconFilenames: [
        "white-w-disc-b-case-opened.svg",
        "white-w-disc-b-case-opened.svg",
        "white-b-disc-b-case-opened.svg",
        "white-b-disc-w-case-closed.svg",
        "white-w-disc-b-case-opened.svg",
        "white-w-disc-w-case-closed.svg",
        "white-w-disc-w-case-closed.svg",
        "white-b-disc-w-case-closed.svg",
        "white-w-disc-w-case-closed.svg",
        "white-b-case-closed-xbox.svg",
        "white-w-disc-w-case-opened-xbox.svg",
        "white-b-disc-w-case-opened-xbox.svg"
      ]
    };
  },
  mixins: [utils],
  components: {
    iconWrapperLeft,
    iconWrapperRight,
    mainMenu,
    mainFooter,
    memeMessage
  },
  methods: {
    getUserProfile() {
      return store.getters.steamProfile;
    },
    getGamesWorthCollecting() {
      return store.getters.gamesWorthCollecting;
    },
    areAllGameCollectedRequest(userID) {
      return axios({
        url: `https://api.findergames.de/user/profile/${userID}/games/collected`,
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        data: this.getGamesWorthCollecting()
      });
    },
    checkIfAllGamesAreCollected(userID) {
      //immediately check first areAllGameCollectedRequest

      const requestInterval$ = Rx.Observable.interval(15000);
      requestInterval$
        .switchMap(() => {
          return Rx.Observable.fromPromise(
            this.areAllGameCollectedRequest(userID)
          );
        })
        .subscribe(
          result => {
            const status = result.data;

            if (result.collectionIsComplete) {
              alert("FOUND EM ALL!");
            } else {
              console.log("not finished with collecting games");
              console.log("gamesToBeCollected", status.gamesToBeCollected);
              console.log(
                "gamesAlreadyCollected",
                status.gamesAlreadyCollected
              );
              console.log("gamesStillMissing", status.gamesStillMissing);
            }
          },
          error => {
            console.error(error);
          }
        );
    }
  },
  mounted() {
    this.checkIfAllGamesAreCollected(this.getUserProfile().id);
  }
};
</script>

<style lang="scss" scoped>
@import "./../assets/scss/animations.scss";
@import "./../assets/scss/mixins.scss";
</style>
