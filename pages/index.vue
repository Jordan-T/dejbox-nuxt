<template>
  <div>
    <section class="hero is-medium is-bold is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            dejbox-nuxt
          </h1>
          <p class="subtitle">
            My divine Nuxt.js project
          </p>
          <a
            href="//jordan.taisne.free.fr"
            target="_blank"
            class="button is-primary is-inverted"
          >
            <Icon name="home" />
            See my personal Website
          </a>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h2 class="title">Section - products</h2>

        <nuxt-link to="/products" class="button is-primary"
          >Show all products</nuxt-link
        >
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Icon from '~/components/Atoms/Icon/Icon.vue'

export default Vue.extend({
  components: {
    Icon
  }
})
</script>
