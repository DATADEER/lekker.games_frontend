<template>
  <div class="crt-effect">
    <div class="home bg-black h-screen overflow-hidden">
      <div class="crt-effect">
        <section class="crt-turn-on">
          <div class="flex">
            <aside class="display-none md:w-1/4">
              <icon-wrapper-left
                :iconFilenames="iconFilenames"
              ></icon-wrapper-left>
            </aside>
            <main
              class="w-full md:w-1/2 flex flex-col justify-center items-center"
            >
              <header class="w-full text-center mb-16">
                <h2
                  class="text-white font-title text-xs md:text-2xl tracking-wider "
                >
                  find your next
                </h2>
                <img
                  class="w-3/4 md:w-5/6 mt-5"
                  src="@/assets/img/fonts/favourite-game.svg"
                />
              </header>
              <section class="flex flex-row items-center">
                <ul class="list-reset text-left">
                  <li class="menu-item mb-3 relative">
                    <arrow class="absolute arrow-position"></arrow>
                    <router-link
                      class="block no-underline font-subtitle text-white-very-opaque hover:text-white uppercase cursor-pointer select-none"
                      :to="{ name: 'getUserData' }"
                    >
                      start
                    </router-link>
                  </li>
                  <li class="menu-item mb-3 relative">
                    <arrow class="absolute arrow-position"></arrow>
                    <router-link
                      class="block no-underline font-subtitle text-white-very-opaque hover:text-white uppercase cursor-pointer select-none"
                      :to="{ name: 'comingSoon' }"
                    >
                      what is this?
                    </router-link>
                  </li>
                  <li class="menu-item mb-3 relative">
                    <arrow class="absolute arrow-position"></arrow>
                    <router-link
                      class="block no-underline font-subtitle text-white-very-opaque hover:text-white uppercase cursor-pointer select-none"
                      :to="{ name: 'comingSoon' }"
                    >
                      how it works
                    </router-link>
                  </li>
                </ul>
              </section>
            </main>
            <aside class="display-none md:w-1/4">
              <icon-wrapper-right
                :iconFilenames="iconFilenames"
              ></icon-wrapper-right>
            </aside>
            <footer class="w-full absolute pin-b p-8">
              <p
                class="font-subtitle text-xs text-white-barely-visible text-center"
              >
                © 2018 DATADEER
              </p>
            </footer>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import iconWrapperLeft from "@/components/wrapper/icon-wrapper-left";
import iconWrapperRight from "@/components/wrapper/icon-wrapper-right";
import arrow from "@/components/memeface/arrow";

export default {
  name: "home",
  data() {
    return {
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
  components: {
    iconWrapperLeft,
    iconWrapperRight,
    arrow
  }
};
</script>

<style lang="scss" scoped>
@import url("./../assets/scss/animations.scss");

.arrow-position {
  top: -75%;
  left: -50%;
}

.arrow {
  display: none;
}

.menu-item:hover .arrow {
  display: flex;
  animation: fadeInLeft 300ms;
}

.glitch-effect {
}
</style>
