<template>
  <button :class="$style.button" @click="onClick" class="button is-primary">
    Add to cart
    <Icon :class="$style.icon" name="cart-plus" />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Icon from '~/components/Atoms/Icon/Icon.vue'

@Component({
  components: { Icon }
})
export default class AddToCart extends Vue {
  onClick() {
    this.$emit('click')
  }
}
</script>

<style lang="scss" module>
.button {
  &:hover {
    .icon {
      transform: rotate(-10deg);
    }
  }
  &:active {
    .icon {
      transform: rotate(0deg) scale(1.1);
    }
  }
}

.icon {
  margin-left: 10px;
  transition: transform $transition-duration--fast ease-out;
}
</style>
