<template>
    <section class="icon-wrapper-side h-screen flex flex-col justify-start relative">

        <img class="case case-1 mb-8 w-1/2 absolute opacity-50" :class="{'animated zoomInDown': isAnimated}" v-bind:src="getWrapperIconPath(iconFilenames[0])" />
        <img class="case case-2 mb-8 w-1/2 absolute" :class="{'animated zoomInRight ': isAnimated}" v-bind:src="getWrapperIconPath(iconFilenames[1])" />
        <img class="case case-3 mb-8 w-1/4 absolute opacity-50" :class="{'animated zoomInLeft': isAnimated}" v-bind:src="getWrapperIconPath(iconFilenames[2])" />
        <img class="case case-4 mb-8 w-1/2 absolute" :class="{'animated zoomIn': isAnimated}" v-bind:src="getWrapperIconPath(iconFilenames[3])" />
        <img class="case case-5 mb-8 w-1/6 absolute opacity-25" :class="{'animated zoomInLeft': isAnimated}" v-bind:src="getWrapperIconPath(iconFilenames[4])" />
        <img class="case case-6 mb-8 w-full absolute" :class="{'animated zoomInUp': isAnimated}" v-bind:src="getWrapperIconPath(iconFilenames[5])" />

    </section>
</template>

<script>

    import utilsMixin from "@/utils/utils"

    export default {
        name: "icon-wrapper-side",
        props:["iconFilenames", "isAnimated"],
        mixins: [utilsMixin],
        data() {
            return {
            }
        },
        methods: {
            getWrapperIconPath(filename) {
                const images = require.context('./../../assets/img/icon-wrapper/', false, /\.svg$/)
                return images('./' + filename )
            }

        },
        created(){

            this.iconFilenames = this.randomizeArrayOrder(this.iconFilenames);


        },
        mounted(){


        }
    }
</script>

<style lang="scss" scoped>


    .case {


    }

    .case-1 {

        right:100%;
        top:-5%;
        transform: rotate(-60deg);

    }

    .case-2 {

        right:20%;
        top:15%;
        transform: rotate(-20deg);

    }

    .case-3 {
        right:70%;
        top: 30%;
        transform: rotate(25deg);

    }

    .case-4 {

        right:30%;
        top: 45%;
        transform: rotate(35deg);


    }

    .case-5 {

        right:10%;
        top: 60%;
        transform: rotate(80deg);


    }

    .case-6 {

        right:10%;
        top: 80%;
        transform: rotate(35deg);

    }







</style>