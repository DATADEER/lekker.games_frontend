<template>
    <section class="text" v-html="message"></section>
</template>

<script>
    export default {
        name: "text",
        props:["message"],
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>


</style>