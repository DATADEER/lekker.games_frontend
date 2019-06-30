<template>
  <div class="GetUserData">
    <section class="bg-black h-screen">
      <!--<section class="bg-red w-full h-auto text-center p-10">
                <p class="text-white-opaque mb-3 text-xl font-sans uppercase">This app is currently <strong class="text-white">under construction</strong> and does not behave as intended.</p>
                <em class="text-white-opaque font-sans right">Please come back at the end of <strong> March 2019 </strong></em>
            </section>-->

      <!--<mainMenu class="z-40"></mainMenu>-->
      <mainMenu class="absolute pin-t z-40"></mainMenu>
      <div class="flex">
        <aside class="display-none md:w-1/4 overflow-hidden">
          <icon-wrapper-left
            :iconFilenames="iconFilenames"
            :isAnimated="true"
          ></icon-wrapper-left>
        </aside>
        <main class="w-full md:w-1/2 flex flex-col justify-center items-center">
          <loading :isLoading="isLoading"></loading>
          <article class="w-full md:w-4/5 flex flex-col items-center mb-6">
            <h1
              class="text-white uppercase font-title text-4xl tracking-extra-wide text-center mb-8"
            >
              Show me<br />
              what you play
            </h1>

            <div v-if="!isGamesListSet" class="relative w-4/5">
              <input
                ref="steamUserID"
                maxlength="300"
                v-model="steamUserID"
                @keyup.enter="findUser(steamUserID)"
                autofocus
                class="w-full h-16 rounded-full text-sm text-center bg-white text-black font-subtitle"
                placeholder="SteamID or SteamProfileURL"
                :class="{ 'animated flipInX': inputHasBeenTransformed }"
              />
              <button
                @click="findUser(steamUserID)"
                class="button-primary absolute block h-16 w-16 text-xs rounded-full font-bold pin-t pin-r"
              >
                GO
              </button>
            </div>
          </article>

          <article
            v-if="isSteamUserQualified()"
            class="animated zoomIn bg-black-light p-6 w-full md:w-2/3 mb-6"
          >
            <div class="flex flex-row justify-around items-center mb-6">
              <img
                alt="avatar"
                class="w-16 rounded-full"
                :src="steamUser.profile.avatarURL"
              />
              <div class="w-5/6 p-3">
                <span class="block text-white opacity-50 font-sans mb-2"
                  >Find new games for:</span
                >
                <p class="text-white font-subtitle break-words mb-3">
                  {{ steamUser.profile.username }}
                </p>
                <div v-if="steamUser.games">
                  <span class="text-white font-subtitle text-sm">{{
                    steamUser.games.count
                  }}</span>
                  <span class="text-white opacity-50 font-sans text-lg ml-1"
                    >Games</span
                  >
                </div>
              </div>
            </div>

            <div class="flex justify-end">
              <button
                @click="resetToStart()"
                class="button-secondary block text-xs font-bold p-3 tracking-wide uppercase"
              >
                change steam id
              </button>

              <button
                @click="submitSteamID(steamUser)"
                class="button-primary block text-xs font-bold p-3 tracking-wide uppercase ml-6"
              >
                confirm
              </button>
            </div>
          </article>

          <meme-message
            class="self-start w-auto"
            :key="
              createIDBasedOnMessageCounter(currentMessageText, messageCounter)
            "
            v-if="currentMessageComponent"
          >
            <component
              :is="currentMessageComponent"
              :message="currentMessageText"
              :steamUserID="steamUserID"
            ></component>
          </meme-message>
        </main>
        <aside class="display-none md:w-1/4 overflow-hidden">
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
import memeMessage from "@/components/memeface/message";
import qaList from "@/components/messages/qa-list";
import profileError from "@/components/messages/profile-error";
import text from "@/components/messages/text";
import axios from "axios";
import _ from "lodash";
import utils from "@/utils/utils";
import loading from "@/components/loading/loading";
import store from "@/store";

import {
  fetchSteamUserProfile,
  fetchOwnedGames,
  saveUserGames,
  saveUserProfile,
  fetchSteamIDByUsername
} from "../requests/user.js";

//messages for error and info messages
import qaMessages from "@/assets/messages/getUserData-qa.js";
import steamProfileNotPublicMessage from "@/assets/messages/steamProfileNotPublic.js";
import emptySteamIDMessage from "@/assets/messages/emptySteamID.js";
import noValidSteamIDMessage from "@/assets/messages/noValidSteamID.js";
import noGamesMessage from "@/assets/messages/noGames.js";

export default {
  name: "GetUserData",
  data() {
    return {
      isLoading: false,
      inputHasBeenTransformed: false,
      messageCounter: 0,
      currentMessageComponent: qaList,
      currentMessageText: qaMessages,
      steamUserID: "",
      steamUser: {
        profile: {},
        games: {},
        isGameListPublic: false,
        isPlaytimePublic: false,
        isProfilePublic: false
      },
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
    mainFooter,
    iconWrapperLeft,
    iconWrapperRight,
    mainMenu,
    memeMessage,
    qaList,
    profileError,
    text,
    loading
  },
  methods: {
    resetToStart() {
      this.steamUser.profile = {};
      this.steamUser.games = {};

      this.setNewMessage(qaList, qaMessages);
    },
    isSteamUserQualified() {
      return (
        this.steamUser.isGameListPublic &&
        this.steamUser.isPlaytimePublic &&
        this.isProfileSet &&
        this.isGamesListSet &&
        !_.isEmpty(this.steamUserID)
      );
    },
    isSteamUserIDValid(steamUserID) {
      return !_.isEmpty(steamUserID);
    },
    isInputCustomizedID(userInput) {
      const containsOnlyNumbers = /^\d+$/.test(userInput);
      return !containsOnlyNumbers;
    },
    isInputProfileURL(userInput) {
      return (
        userInput.search(
          /(\/steamcommunity\.com\/id\/)|(\/steamcommunity\.com\/profiles\/)/
        ) !== -1
      );
    },
    parseIDFromProfileURL(profileURL) {
      const regex = /(\/id\/|\/profiles\/)(\w|\d)+/gi;
      const steamIDWithIDPath = profileURL.match(regex)[0];
      const steamID = steamIDWithIDPath.replace(/\/id\/|\/profiles\//i, "");
      return steamID;
    },
    submitSteamID(steamUser) {
      this.persistUserData(steamUser);
      store.commit("setSteamProfile", steamUser.profile);
      store.commit("setSteamGames", steamUser.games);

      this.$router.push("/interest");
    },
    persistUserData(steamUser) {
      saveUserProfile(steamUser)
        .then(result => {
          console.log(result);
        })
        .catch(console.error);
    },

    doesSteamIDExist(player) {
      return !_.isEmpty(player);
    },
    isUserLibraryEmpty(listOfGames) {
      if (listOfGames) {
        const gamesList = listOfGames;
        const gameCount = listOfGames.length;
        return gameCount === 0 && !gamesList;
      }
      return true;
    },
    isGameListPublic(response) {
      return !_.isEmpty(response);
    },
    isPlaytimePublic(listOfGames) {
      //user can potentially have no games so we have to check
      if (listOfGames) {
        const sumUpPlaytime = (currentSum, currentGame) => {
          return currentSum + currentGame.playtime_forever;
        };
        return listOfGames.reduce(sumUpPlaytime, 0) > 0;
      }
      return false;
    },
    fetchSteamIDByCustomizedID(username) {
      fetchSteamIDByUsername(username).then(result => {
        const userExists = result.data.response.success === 1;
        if (userExists) {
          const steamID = result.data.response.steamid;
          this.fetchAllUserInformationBySteamID(steamID);
        } else {
          this.setNewMessage(text, noValidSteamIDMessage);
        }
      });
    },
    saveUserInformation(player) {
      if (this.doesSteamIDExist(player)) {
        const steamUser = { ...this.steamUser };

        steamUser.profile.id = player.steamid;
        steamUser.profile.username = player.personaname;
        steamUser.profile.avatarURL = player.avatarfull;
        steamUser.isProfilePublic = player.communityvisibilitystate === 3;

        this.steamUser = steamUser;
      } else {
        this.setNewMessage(text, noValidSteamIDMessage);
      }
    },
    async saveOwnedGames(steamID, response) {
      const gamesList = response.response.games;
      const gamesResponse = response.response;

      const steamUser = { ...this.steamUser };

      const isGameListPublic = this.isGameListPublic(gamesResponse);
      const isPlaytimePublic = this.isPlaytimePublic(gamesList);
      const hasUserAnyGames = !this.isUserLibraryEmpty(gamesList);
      const isProfilePublic = this.steamUser.isProfilePublic;

      if (isGameListPublic && isPlaytimePublic && hasUserAnyGames) {
        steamUser.isGameListPublic = true;
        steamUser.isPlaytimePublic = true;
        steamUser.games["count"] = gamesList.length;
        steamUser.games["list"] = gamesList;

        try {
          await saveUserGames(steamID, gamesList);
        } catch (error) {
          console.error(error);
        }

        this.resetMessage();
      } else if (isProfilePublic && !hasUserAnyGames) {
        this.setNewMessage(text, noGamesMessage);
      } else {
        steamUser.isGameListPublic = false;
        steamUser.isPlaytimePublic = false;
        steamUser.profile = {};

        this.setNewMessage(profileError, steamProfileNotPublicMessage);
      }

      this.steamUser = steamUser;
    },
    fetchAllUserInformationBySteamID(steamID) {
      Promise.all([fetchSteamUserProfile(steamID), fetchOwnedGames(steamID)])
        .then(result => {
          const player = result[0].data.response.players[0];
          this.saveUserInformation(player);

          const ownedGamesResponse = result[1].data;
          this.saveOwnedGames(steamID, ownedGamesResponse);
        })
        .catch(error => {
          console.error(error);
        });
    },
    sanitizeUserInput(userInput) {
      return userInput.trim();
    },
    findUser(userInput) {
      userInput = this.sanitizeUserInput(userInput);

      //transform input into valid requestable id if necessary
      if (this.isInputProfileURL(userInput)) {
        userInput = this.parseIDFromProfileURL(userInput);
        this.steamUserID = userInput;
        this.inputHasBeenTransformed = true;
        setTimeout(() => {
          this.inputHasBeenTransformed = false;
        }, 1000);
      }

      //decide if input can be mapped to any valid profile
      if (userInput === "") {
        this.setNewMessage(text, emptySteamIDMessage);
      } else if (this.isInputCustomizedID(userInput)) {
        this.fetchSteamIDByCustomizedID(userInput);
      } else if (this.isSteamUserIDValid(this.steamUserID)) {
        this.fetchAllUserInformationBySteamID(userInput);
      } else {
        this.setNewMessage(text, noValidSteamIDMessage);
      }
    }
  },
  computed: {
    isProfileSet() {
      return !_.isEmpty(this.steamUser.profile);
    },
    isGamesListSet() {
      return !_.isEmpty(this.steamUser.games);
    }
  },
  created() {
    axios.interceptors.request.use(config => {
      this.isLoading = true;
      return config;
    });

    axios.interceptors.response.use(config => {
      this.isLoading = false;
      return config;
    });
  }
};
</script>

<style lang="scss" scoped>
@import "./../assets/scss/animations.scss";
@import "./../assets/scss/mixins.scss";
</style>
