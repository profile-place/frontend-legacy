<template>
  <div class="bg-magic">
    <NavBar />
    <div class="container mx-auto">
      <img draggable="false" class="mx-auto rounded-mod mt-12" src="~/assets/icons/logo.png" alt="logo">
      <h1 class="text-center text-4xl mt-12 text-white">
        profile.place
      </h1>
      <p class="text-center text-sm mt-1 text-white">
        We appreciate your interest! But this is currently a work in
        progress. You can join our discord below to be updated.
      </p>
    </div>
    <FooterBar />
  </div>
</template>
<script>
import NavBar from '~/components/NavBar'
import FooterBar from '~/components/FooterBar'

export default {
  components: {
    FooterBar,
    NavBar
  },
  head () {
    return {
      title: 'Home | profile.place'
    }
  }
}
</script>
<style lang="scss">
.rounded-mod {
  border: 0;
  border-radius: 50%;
}

.bg-magic:after {
  background: #23272A;
}

.bg-magic:before {
  content: '';
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: -20px;
  background-image: url("~assets/background.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);
  transform: scale(1.1);
  z-index: -9;
  opacity: 0.5;
}
</style>
