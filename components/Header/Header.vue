<template>
  <nav
    :class="$style.header"
    class="navbar"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">
        <img src="//placehold.it/112x28" width="112" height="28" />
      </nuxt-link>

      <a
        :aria-expanded="navOpened ? 'true' : 'false'"
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        data-target="navbarBasicExample"
        @click.prevent="toggleNavOpen"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbarBasicExample"
      :class="{ 'is-active': navOpened }"
      class="navbar-menu"
    >
      <div class="navbar-start">
        <HeaderNavItem v-for="(item, i) in navigation" :key="i" :item="item" />
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <nuxt-link
              class="button is-primary"
              to="/sign-up"
              active-class="is-active"
            >
              <strong>Sign up</strong>
            </nuxt-link>
            <nuxt-link
              class="button is-light"
              to="/login"
              active-class="is-active"
            >
              Log in
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
// eslint-disable-next-line no-unused-vars
import { NavItem } from './types'
import HeaderNavItem from '~/components/Header/HeaderNavItem.vue'

@Component({
  components: { HeaderNavItem }
})
export default class Header extends Vue {
  navOpened = false
  navigation: (NavItem | null)[] = [
    { title: 'Home', to: '/', exact: true },
    { title: 'Products', to: '/products' },
    {
      title: 'More',
      children: [
        { title: 'About', to: '/about' },
        { title: 'Jobs', to: '/jobs' },
        { title: 'Contact', to: '/contact' },
        null,
        { title: 'Report an issue', to: '/report-an-issue' }
      ]
    }
  ]

  toggleNavOpen() {
    this.navOpened = !this.navOpened
  }
}
</script>

<style module>
.header {
  position: sticky;
}
</style>
