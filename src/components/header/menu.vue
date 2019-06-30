<template>
  <nav class="menu bg-black pb-8 pt-8 pl-3 pr-3 w-full">
    <ul class="list-reset flex items-center flex-wrap">
      <li class="ml-6">
        <a
          class="block menu-link text-white text-4xl font-subtitle uppercase no-underline"
          href="/"
          >Home</a
        >
      </li>
      <li v-for="item in menuItems" class="ml-24" v-bind:key="item.targetName">
        <router-link
          class="block menu-link text-white text-base font-subtitle hover:text-blue-darker uppercase no-underline"
          :data-text="item.label"
          :to="{ name: item.targetName }"
          :class="{
            'text-white-barely-visible pointer-events-none': isDisabledRoute(
              item.targetName,
              menuItems
            )
          }"
          v-html="item.html"
        ></router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "menu",
  data() {
    return {
      menuItems: [
        {
          label: "Your Taste",
          html: "Your <br/> Taste",
          targetName: "getUserData"
        },
        {
          label: "Find Games",
          html: "Find <br/> Games",
          targetName: "search"
        }
      ]
    };
  },
  methods: {
    isDisabledRoute(targetName, menuItems) {
      const elementHasTargetName = (element, targetName) => {
        return element.targetName === targetName;
      };
      const currentRouteName = this.$router.currentRoute.name;
      const indexOfTargetNameInMenu = menuItems.findIndex(element =>
        elementHasTargetName(element, targetName)
      );
      const indexOfCurrentRouteInMenu = menuItems.findIndex(element =>
        elementHasTargetName(element, currentRouteName)
      );
      return indexOfTargetNameInMenu > indexOfCurrentRouteInMenu;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./../../assets/scss/animations.scss";
@import "./../../assets/scss/mixins.scss";

.menu-link:hover {
  @include chromatic3dEffectText();
  color: transparent;
}

.router-link-active {
  @include chromatic3dEffectText();
}
</style>
