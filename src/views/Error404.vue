<template>
  <section class="flex justify-center items-center w-100 h-screen">
    <meme-message class="w-100">
      <div class="inline-flex flex-col align-center">
        <h1 class="text-white text-center mb-3">404</h1>
        <h3 class="text-white-opaque text-center mb-3">
          This page does not exist
        </h3>
        <a class="anchor text-center" href="/">Home</a>
      </div>
    </meme-message>
  </section>
</template>

<script>
import memeMessage from "@/components/memeface/message";

export default {
  name: "Error404",
  components: { memeMessage }
};
</script>

<style scoped></style>
