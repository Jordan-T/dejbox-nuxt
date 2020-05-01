<template>
  <FontAwesomeIcon
    :icon="iconStyle !== '' ? [iconStyle, name] : name"
    :size="size"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCartPlus, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vue from 'vue'
import Component from 'vue-class-component'

library.add(faCartPlus, faHome)

type iconNames = 'cart-plus' | 'home'
type freeIconSet = 'fas' | 'fab'
type proIconSet = 'far' | 'fal' | 'fad'
type iconSizes =
  | 'xs'
  | 'sm'
  | 'lg'
  | '2x'
  | '3x'
  | '4x'
  | '5x'
  | '6x'
  | '7x'
  | '8x'
  | '9x'
  | '10x'

@Component({
  inheritAttrs: false,
  components: {
    FontAwesomeIcon
  },
  props: {
    /**
     * Icon name
     * @see https://fontawesome.com/icons?d=gallery&m=free
     */
    name: {
      type: String as () => iconNames,
      required: true
    },

    /**
     * Icon style (prefix)
     * default: ''
     * @see https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use
     */
    iconStyle: {
      type: String as () => '' | freeIconSet,
      default: ''
    },

    /**
     * Icon size
     * Ex: 'xs'
     * @see https://github.com/FortAwesome/vue-fontawesome#basic
     */
    size: {
      type: String as () => null | iconSizes,
      default: null
    }
  }
})
export default class Icon extends Vue {}
</script>
