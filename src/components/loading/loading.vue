<template>
  <section v-if="isLoading" class="w-full flex justify-center">
    <!--<svg class="w-16 car-animation" id="delorean-svg" fill="#FFFFFF" width="300pt" height="300pt" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="m79.52 51.941c-3.5078 0-6.3555 2.8477-6.3555 6.3555s2.8477 6.3516 6.3555 6.3516c3.5078 0 6.3555-2.8438 6.3555-6.3516s-2.8477-6.3555-6.3555-6.3555zm0 10.828c-2.4727 0-4.4766-2.0039-4.4766-4.4727 0-2.4727 2.0039-4.4766 4.4766-4.4766 2.4727 0 4.4766 2.0039 4.4766 4.4766s-2.0039 4.4727-4.4766 4.4727z"/>
            <path d="m23.176 50.273c-4.1055 0-7.4375 3.332-7.4375 7.4375 0 4.1055 3.3281 7.4375 7.4375 7.4375 4.1055 0 7.4375-3.3281 7.4375-7.4375 0-4.1055-3.332-7.4375-7.4375-7.4375zm0 12.164c-2.6094 0-4.7266-2.1133-4.7266-4.7266 0-2.6094 2.1172-4.7266 4.7266-4.7266s4.7305 2.1172 4.7305 4.7266c0 2.6133-2.1211 4.7266-4.7305 4.7266z"/>
            <path d="m72.543 59.457-3.957 1.7109h-33.586l-2.918-1.5v-1.3711l40.695-0.12891z"/>
            <path d="m15.293 59.418-11.461-5.332 2.25-10.086 25.668-5.082 18.75 0.25 16.5 5.75 28.5 4.082 1.5859 3.918-0.5 1.832-9.5859 3.5469" fill="none" stroke="#FFFFFF" stroke-linecap="round" stroke-miterlimit="10" stroke-width=".5"/>
            <path d="m30.613 51.5 44.199 0.83594" fill="none" stroke="#FFFFFF" stroke-miterlimit="10"/>
            <path d="m15.738 51.5-8.957-0.3125" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width="1.1344"/>
            <path d="m96.875 52.836h-11.75" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width="1.1344"/>
            <path d="m36.332 40.156v5.8438l27.746 0.41797-14.496-6.1055z" fill="none" stroke="#FFFFFF" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".4"/>
            <path d="m10.25 45.75h18.668l1-5.293-19.215 3.625z" fill="none" stroke="#FFFFFF" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".4"/>
            <path d="m34.168 39.168-0.16797 7 9 12.129" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".25"/>
            <path d="m62.668 58.297 2.168-5.9609 2.1641-7.418" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".25"/>
            <path d="m12.266 43.789-0.51562 1.9609h-1.5l0.45312-1.668z"/>
            <path d="m30.293 46.043h2.125l0.41406-6.043h-1.2695z"/>
            <path d="m63.961 46.422h-2.168l-0.75 0.58203-2.25-1.1641v-1.5l1.832 0.5h1.5859z"/>
            <path d="m87.062 58.469 0.28125 0.61719 6.7812-0.30859-0.78125-0.77734-0.10156-2.0156z"/>
            <path d="m14.895 57.27 0.5 2.1484-7.9102-3.6367z"/>
            <path d="m4.0977 50.508 2.8906 0.11328 0.18359 3.5898-3.5938-0.89844z"/>
            <path d="m93.793 52.836-0.25 2.1641 3.043-0.25 0.5-1.832z"/>
            <path d="m23.176 53.531v0.71875" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2351"/>
            <path d="m22.449 53.594 0.125 0.71094" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2351"/>
            <path d="m21.746 53.781 0.24609 0.67969" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2351"/>
            <path d="m21.082 54.094 0.36328 0.62109" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2351"/>
            <path d="m20.484 54.512 0.46484 0.55078" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2351"/>
            <path d="m19.969 55.023 0.55469 0.46484" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2351"/>
            <path d="m19.551 55.621 0.625 0.35938" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2351"/>
            <path d="m19.242 56.285 0.67969 0.24219" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2351"/>
            <path d="m19.055 56.988 0.71094 0.125" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2351"/>
            <path d="m18.992 57.719 0.71875-0.003906" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2351"/>
            <path d="m19.055 58.441 0.71094-0.125" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2351"/>
            <path d="m19.242 59.148 0.67969-0.25" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2351"/>
            <path d="m19.551 59.809 0.625-0.36328" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2351"/>
            <path d="m19.969 60.406 0.55469-0.46484" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2351"/>
            <path d="m20.484 60.926 0.46484-0.55859" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2351"/>
            <path d="m21.082 61.344 0.36328-0.62891" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2351"/>
            <path d="m21.742 61.648 0.25-0.67578" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2351"/>
            <path d="m22.449 61.84 0.125-0.71094" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2351"/>
            <path d="m23.176 61.902v-0.72266" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2351"/>
            <path d="m23.902 61.84-0.125-0.71094" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2351"/>
            <path d="m24.609 61.652-0.25-0.67969" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2351"/>
            <path d="m25.27 61.344-0.35938-0.62891" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2351"/>
            <path d="m25.871 60.926-0.46875-0.55859" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2351"/>
            <path d="m26.387 60.406-0.55469-0.46484" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2351"/>
            <path d="m26.805 59.812-0.62891-0.36719" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2351"/>
            <path d="m27.113 59.148-0.68359-0.25" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2351"/>
            <path d="m27.301 58.441-0.71484-0.125" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2351"/>
            <path d="m27.367 57.715h-0.72656" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2351"/>
            <path d="m27.301 56.988-0.71484 0.125" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2351"/>
            <path d="m27.113 56.281-0.68359 0.25" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2351"/>
            <path d="m26.805 55.621-0.62891 0.35938" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2351"/>
            <path d="m26.387 55.023-0.55859 0.46484" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2351"/>
            <path d="m25.867 54.508-0.46484 0.55469" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2351"/>
            <path d="m25.27 54.09-0.36328 0.625" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2351"/>
            <path d="m24.609 53.781-0.25 0.67969" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2351"/>
            <path d="m23.906 53.594-0.12891 0.71094" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2351"/>
            <path d="m79.52 54.379v0.67188" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2201"/>
            <path d="m78.84 54.438 0.11328 0.66406" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2201"/>
            <path d="m78.18 54.613 0.23047 0.63281" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2201"/>
            <path d="m77.559 54.902 0.33984 0.58203" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2201"/>
            <path d="m77 55.293 0.43359 0.51562" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2201"/>
            <path d="m76.52 55.773 0.51562 0.4375" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2201"/>
            <path d="m76.125 56.336 0.58594 0.33594" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2201"/>
            <path d="m75.836 56.953 0.63672 0.23047" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2201"/>
            <path d="m75.66 57.613 0.66406 0.11719" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2201"/>
            <path d="m75.602 58.297 0.67188-0.003906" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2201"/>
            <path d="m75.66 58.977 0.66406-0.12109" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2201"/>
            <path d="m75.836 59.637 0.63672-0.23438" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2201"/>
            <path d="m76.125 60.254 0.58594-0.33984" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2201"/>
            <path d="m76.516 60.812 0.51953-0.43359" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2201"/>
            <path d="m77 61.297 0.43359-0.51953" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2201"/>
            <path d="m77.559 61.688 0.33984-0.58594" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2201"/>
            <path d="m78.18 61.977 0.23047-0.63672" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2201"/>
            <path d="m78.84 62.152 0.11328-0.66406" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2201"/>
            <path d="m79.52 62.215v-0.67969" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2201"/>
            <path d="m80.199 62.156-0.11719-0.66797" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2201"/>
            <path d="m80.859 61.98-0.23047-0.64062" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2201"/>
            <path d="m81.48 61.691-0.33984-0.58984" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2201"/>
            <path d="m82.039 61.297-0.43359-0.51953" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2201"/>
            <path d="m82.523 60.812-0.51953-0.43359" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2201"/>
            <path d="m82.914 60.254-0.58594-0.33984" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2201"/>
            <path d="m83.203 59.637-0.63672-0.23438" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2201"/>
            <path d="m83.383 58.977-0.67187-0.12109" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2201"/>
            <path d="m83.441 58.293h-0.67969" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2201"/>
            <path d="m83.383 57.613-0.67187 0.11719" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2201"/>
            <path d="m83.203 56.953-0.63672 0.23047" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2201"/>
            <path d="m82.914 56.332-0.58984 0.33984" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2201"/>
            <path d="m82.523 55.773-0.51953 0.4375" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2201"/>
            <path d="m82.039 55.289-0.4375 0.51953" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2201"/>
            <path d="m81.48 54.898-0.33984 0.58594" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2201"/>
            <path d="m80.859 54.609-0.23047 0.63672" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2201"/>
            <path d="m80.199 54.434-0.12109 0.66797" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width=".2201"/>
        </svg>-->
    <h3 class="text-center text-white animated flash infinite my-6">LOADING</h3>
  </section>
</template>

<script>
export default {
  name: "loading",
  props: ["isLoading"]
};
</script>

<style scoped>
.car-animation {
  animation-name: drive;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@keyframes drive {
  0% {
    fill: white;
  }
  15% {
    fill: #fc4c00;
  }
  45% {
    fill: #2bd1fc;
  }
  75% {
    fill: #07f0fc;
  }
  100% {
    transform: rotate(360deg);
    fill: white;
  }
}
</style>
