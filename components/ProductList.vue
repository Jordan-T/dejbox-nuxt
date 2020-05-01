<template>
  <div class="columns is-multiline">
    <div
      v-for="product in products"
      :key="product.id"
      class="column is-one-third"
    >
      <ProductItem :product="product" :class="$style.product" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProductItem from './ProductItem.vue'
// eslint-disable-next-line no-unused-vars
import { ProductItemData } from '~/types/product'

export default Vue.extend({
  components: { ProductItem },
  props: {
    products: {
      type: Array as () => ProductItemData[],
      default: []
    }
  }
})
</script>

<style lang="scss" module>
.product {
  min-height: 100%;
}
</style>
