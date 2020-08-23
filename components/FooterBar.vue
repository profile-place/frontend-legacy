<template>
  <div class="mx-auto mt-20 mb-3">
    <p class="text-center text-greyple">
      profile.place | Copyright &copy; {{ (new Date()).getFullYear() }}
    </p>
    <p class="text-center text-greyple">
      <nuxt-link class="text-blue-500" to="/privacy">
        Privacy Policy
      </nuxt-link>
      and
      <nuxt-link class="text-blue-500" to="/terms">
        Terms of Use
      </nuxt-link>
    </p>
  </div>
</template>
<script>
export default {
  name: 'FooterBar'
}
</script>
