<template>
  <section class="arrow flex flex-row items-center">
    <lenny class="w-12 h-12"></lenny>
    <p class="text-white ml-4 font-subtitle text-xs inline">-></p>
  </section>
</template>

<script>
import lenny from "@/components/memeface/lenny";

export default {
  name: "arrow",
  components: {
    lenny
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped></style>
