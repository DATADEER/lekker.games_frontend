import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      steamUser: {
        profile:null,
        games:{
          list:[]
        },
        interestThreshold:null,
        gamesWorthCollecting:[],
    }


  },
  mutations: {
    setSteamProfile(state, payload){
      state.steamUser.profile = payload;
    },
    setSteamGames(state, payload){
      state.steamUser.games = payload;
    },
    setInterestThreshold(state, payload){
        state.steamUser.interestThreshold = payload;
    },
    setGamesWorthCollecting(state, payload){
        state.steamUser.gamesWorthCollecting = payload;
    }

  },
  actions: {

  },
  getters: {
      steamGames: (state) => {
          return state.steamUser.games;
      },
      steamProfile: (state) => {
          return state.steamUser.profile;
      },
      interestThreshold: (state) => {
          return state.steamUser.interestThreshold;
      },
      gamesWorthCollecting: (state) => {
          return state.steamUser.gamesWorthCollecting;
      }


  }
})
