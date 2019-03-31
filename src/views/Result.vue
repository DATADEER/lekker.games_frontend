<template>
    <div class="ComingSoon">
        <section class="bg-black h-screen overflow-hidden">

            <mainMenu class="absolute pin-t z-40"></mainMenu>

            <div class="flex">
                <aside class="display-none md:w-1/4">
                    <icon-wrapper-left :iconFilenames="iconFilenames" :isAnimated="true"></icon-wrapper-left>
                </aside>
                <main class="w-full md:w-1/2 flex flex-col justify-center items-center">



                    <h1 class="text-white font-title tracking-wider mb-12   ">Your new favorite game</h1>
                    <span class="font-sans font-bold text-orange-dark py-2 px-2">RANDOM MOCKED RESULT</span>
                    <a target="_blank" v-bind:href="`https://store.steampowered.com/app/${finalGame.appid}/`">
                        <div class="bg-white single-result__container">
                            <img class="w-full" alt="game logo" v-lazy="convertSteamImageHashToUrl(finalGame.appid, finalGame.img_logo_url)" />
                            <h2 class="text-black font-subtitle text-center text-xs p-4 tracking-wider">{{ finalGame.name }}</h2>
                        </div>
                    </a>

                    <span class="font-sans font-bold text-orange-dark py-2 px-2">RANDOM MOCKED RESULT</span>

                </main>
                <aside class="display-none md:w-1/4">
                    <icon-wrapper-right :iconFilenames="iconFilenames" :isAnimated="true"></icon-wrapper-right>
                </aside>
            </div>

        </section>
        <mainFooter></mainFooter>
    </div>

</template>

<script>

    import iconWrapperLeft from "@/components/wrapper/icon-wrapper-left"
    import iconWrapperRight from "@/components/wrapper/icon-wrapper-right"
    import mainMenu from "@/components/header/menu";
    import mainFooter from "@/components/footer/footer";
    import lenny from "@/components/memeface/lenny";
    import utils from "@/components/utils";
    import store from "@/store";


    export default {
        name: "ComingSoon",
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
                    "white-b-disc-w-case-opened-xbox.svg",
                ],
                finalGame: {}
            }
        },
        components:{
            iconWrapperLeft,
            iconWrapperRight,
            mainMenu,
            mainFooter,
            lenny
        },
        mixins: [utils],
        methods: {
        },
        created(){
            const userGames = store.getters.steamGames.list;
            this.finalGame = userGames[this.getRandomIndex(userGames.length-1)]
        }
    }
</script>

<style lang="scss" scoped>

    @import "./../assets/scss/animations.scss";
    @import "./../assets/scss/mixins.scss";

    .single-result__container {
        width:250px;
    }

    .face-position {

        top:-3rem;
        left:-5rem;
    }


    .glitch-effect {
        @include textGlitch("glitch-effect", 8, white, black, white, #FF3083, 1000, 50);
    }


    .delay-2s {
        animation-delay: 1s;
    }

</style>