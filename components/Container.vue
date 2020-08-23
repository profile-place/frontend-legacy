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
  background: #23272A;
  border: 0;
  border-radius: 1.5rem;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.50);
}
</style>
