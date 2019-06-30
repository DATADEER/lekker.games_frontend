<template>
  <div class="Search">
    <section class="bg-white">
      <mainMenu class="z-40"></mainMenu>

      <div class="flex">
        <main class="w-full flex flex-wrap">
          <div
            v-for="app in apps"
            :key="app.id"
            v-if="app.name"
            class="w-full md:w-1/6 rounded overflow-hidden shadow-lg bg-black m-8 md:mt-8 md:mb-8 md:ml-8 md:mr-0 "
          >
            <img
              class="w-full"
              :src="app.image"
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-white text-xl mb-2">
                {{ app.name }}
              </div>
              <p class="text-grey-darker text-base">
                {{ app.description }}
              </p>
            </div>
            <div class="px-6 py-4">
              <span
                v-for="category in app.categories"
                :key="category.id"
                class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2 mb-2"
                >{{ category.description }}</span
              >
            </div>
          </div>
        </main>
      </div>
    </section>
    <mainFooter></mainFooter>
  </div>
</template>

<script>
import mainMenu from "@/components/header/menu";
import mainFooter from "@/components/footer/footer";

import axios from "axios";

export default {
  name: "Search",
  data() {
    return {
      apps: [
        { id: 80 },
        { id: 10 },
        { id: 393380 },
        { id: 271590 },
        { id: 586200 }
      ]
    };
  },
  components: {
    mainFooter,
    mainMenu
  },
  methods: {
    getIndexByAppId(appID, apps) {
      const index = apps.findIndex(app => {
        return app.id === appID;
      });
      return index;
    },
    steamGameByAppIDRequest(appID) {
      return axios.get(`http://localhost:3000/api/steam/app/id/${appID}`);
    },
    fetchSteamGameByAppID(appID) {
      this.steamGameByAppIDRequest(appID)
        .then(result => {
          const appMetaData = result.data[appID].data;
          const index = this.getIndexByAppId(appID, this.apps);
          let app = { ...this.apps[index] };

          app.name = appMetaData.name;
          app.image = appMetaData.header_image;
          app.description = appMetaData.short_description;
          app.categories = appMetaData.categories;

          this.apps[index] = app;

          this.$forceUpdate();
        })
        .catch(console.error);
    }
  },
  created() {
    this.apps.forEach(app => {
      this.fetchSteamGameByAppID(app.id);
    });
  }
};
</script>

<style lang="scss" scoped>
@import url("./../assets/scss/animations.scss");
</style>
