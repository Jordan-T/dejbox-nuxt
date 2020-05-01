<template>
  <hr v-if="item === null" class="navbar-divider" />
  <nuxt-link
    v-else-if="item.children === undefined"
    :to="item.to"
    :exact="item.exact"
    class="navbar-item"
    active-class="is-active"
  >
    {{ item.title }}
  </nuxt-link>
  <!-- eslint-disable vue/valid-template-root -->
  <div v-else class="navbar-item has-dropdown is-hoverable">
    <a class="navbar-link" role="button">
      {{ item.title }}
    </a>

    <div class="navbar-dropdown">
      <HeaderNavItem
        v-for="(child, i) in item.children"
        :key="i"
        :item="child"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
// eslint-disable-next-line no-unused-vars
import { NavItem } from '~/components/Header/types'

@Component({
  props: {
    item: {
      type: Object as () => NavItem | null
    }
  }
})
export default class HeaderNavItem extends Vue {}
</script>
