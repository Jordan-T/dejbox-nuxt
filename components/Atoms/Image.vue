<template>
  <figure>
    <slot name="placeholder">
      <img :src="placeholder" alt="" />
    </slot>
    <slot onLoad="onLoad">
      <img
        :src="src"
        :srcset="srcset"
        :alt="alt"
        v-bind="$attrs"
        @load="onLoad"
      />
      <figcaption v-if="caption || $slots.caption">
        <slot name="caption">{{ caption }}</slot>
      </figcaption>
    </slot>
  </figure>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  inheritAttrs: false,
  props: {
    src: {
      type: String,
      required: true
    },
    srcset: {
      type: [String, Array],
      required: true
    },
    alt: {
      type: String,
      default: ''
    },
    caption: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  }
})
export default class Image extends Vue {
  loaded = false

  onLoad() {
    this.loaded = true
  }
}
</script>

<style></style>
