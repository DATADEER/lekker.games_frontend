<template>
    <section class="message pl-6 pr-6">

        <div class="flex flex-row justify-start mb-3">
            <lenny class="w-12 h-12"></lenny>
        </div>

        <article class="relative bg-black border-white border-2 ml-2 animated fadeIn">
            <div class="message-triangle-position absolute border-2 border-white h-12 w-8 z-0"></div>
            <div class="relative h-auto z-20 pt-6 pb-6 pl-6 pr-6 bg-black text-white font-sans">
                <slot></slot>
            </div>
        </article>

    </section>
</template>

<script>

    import lenny from "@/components/memeface/lenny";

    export default {
        name: "message",
        props: [],
        components: {
            lenny,
        },
        data() {
            return {
            }
        },
        methods: {

            clear(){
                console.log("did it clear");
            }

        },
        created(){
        }
    }
</script>

<style lang="scss" scoped>

    .message-triangle-position {

        left:1rem;
        top:-1rem;
        transform: rotate(-65deg);
    }

    .close-button-position {

        right:-0.5rem;
        top:-0.7rem;
        line-height: 1.2;

    }

</style>