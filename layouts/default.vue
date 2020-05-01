<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Header from '~/components/Header/Header.vue'
import Footer from '~/components/Footer.vue'

@Component({
  components: {
    Header,
    Footer
  }
})
export default class DefaultLayout extends Vue {}
</script>
