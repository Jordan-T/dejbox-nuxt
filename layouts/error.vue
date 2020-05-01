<template>
  <div :class="$style.container" class="container has-text-centered">
    <template v-if="error.statusCode === 404">
      <img
        :class="$style.image"
        src="//placehold.it/400x300?text=404"
        alt="404"
        width="400"
        height="300"
      />
      <h1 class="title">Page not found</h1>
    </template>
    <h1 v-else class="title">An error occurred</h1>
    <nuxt-link class="button is-primary" to="/">Home page</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true
    }
  },
  layout: 'blog' // you can set a custom layout for the error page
}
</script>

<style lang="scss" module>
.container {
  text-align: center;
  min-height: calc(100vh - 100px); // header + a part of the footer
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.image {
  margin: 0 auto $block-spacing;
  height: auto;
  max-width: 100%;
  background: $grey-lightest;
}
</style>
