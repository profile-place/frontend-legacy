<template>
  <div class="mx-auto mt-20 mb-3">
    <p class="text-center text-greyple">
      profile.place | Copyright &copy; {{ getYear() }}
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
  name: 'FooterBar',
  data () {
    return {
      date: new Date()
    }
  },
  methods: {
    getYear () {
      return this.date.getFullYear() === 2020 ? this.date.getFullYear() : `2020-${this.date.getFullYear()}`
    }
  }
}
</script>
