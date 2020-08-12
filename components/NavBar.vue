<template>
  <nav class="flex items-center justify-between flex-wrap bg-blackish p-6 shading">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <nuxt-link to="/" class="font-semibold text-xl tracking-tight">
        profile.place
      </nuxt-link>
    </div>
    <div class="block lg:hidden">
      <button
        id="menu-toggle"
        class="flex items-center px-3 py-2 border rounded text-blackish border-darkish hover:text-white hover:border-white"
        @click="menuVisible = !menuVisible"
      >
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
        </svg>
      </button>
    </div>
    <div v-show="menuVisible" class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <nuxt-link to="/explore" class="block mt-4 lg:inline-block lg:mt-0 text-greyple hover:text-white mr-4">
          Explore
        </nuxt-link>
      </div>
      <div>
        <nuxt-link
          to="/login"
          class="inline-block text-sm px-4 py-2 leading-none border rounded text-greyple border-white hover:border-transparent hover:text-darkish hover:bg-white mt-4 lg:mt-0">
          Log in!
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      menuVisible: true
    }
  }
}
</script>

<style lang="scss" scoped>
.shading {
  box-shadow: 0 2px 10px rgba(0,0,0,0.35);
}
</style>
