<template>
    <div class="ComingSoon">
        <section class="bg-black h-screen overflow-hidden">

            <mainMenu class="absolute pin-t z-40"></mainMenu>

            <div class="flex">
                <aside class="display-none md:w-1/4">
                    <icon-wrapper-left :iconFilenames="iconFilenames" :isAnimated="true"></icon-wrapper-left>
                </aside>
                <main class="w-full md:w-1/2 flex flex-col justify-center items-center">
                    <div class="glitch-effect text-white font-subtitle text-xl md:text-4xl mb-24 md:mb-16" data-text="COMING SOON">COMING SOON</div>
                    <article class="w-1/3">
                        <div class="relative">
                            <lenny class="absolute face-position w-16 h-16 opacity-25"></lenny>
                            <em class="text-grey-lightest opacity-25 text-xs text-center">A phrase used for something that will in fact not be coming soon, but will actually take months, weeks, or might actually never happen.</em>
                            <a href="https://www.urbandictionary.com/define.php?term=coming%20soon" target="_blank" class="text-blue-light block opacity-25 text-xs mt-1 text-right">urbandictionary.com</a>
                        </div>
                    </article>


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

            }
        },
        components:{
            iconWrapperLeft,
            iconWrapperRight,
            mainMenu,
            mainFooter,
            lenny
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>

    @import "./../assets/scss/animations.scss";
    @import "./../assets/scss/mixins.scss";

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