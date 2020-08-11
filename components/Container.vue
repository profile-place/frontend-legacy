<template>
  <section class="container section-mod mx-auto p-8 mt-8 mb-8">
    <slot />
  </section>
</template>

<script>
export default {
  name: 'Container'
}
</script>

<style lang="scss" scoped>
.section-mod {
  background: #2C2F33;
  border: 0;
  border-radius: 1.5rem;
}
</style>
