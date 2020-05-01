<template>
  <div :class="$style.card" class="card">
    <div :class="$style.cardImage" class="card-image">
      <figure :class="$style.image" class="image is-3by2">
        <img
          :src="product.image"
          :alt="product.name"
          :class="$style.imageTag"
          loading="lazy"
          width="712"
          height="480"
        />
      </figure>
      <span v-if="product.isNew" :class="$style.new">New</span>
      <span v-if="product.isSure" :class="$style.sure">Valeur sure</span>
      <span v-if="product.artisan" :class="$style.artisan">
        <span :class="$style.artisanType">
          ARTISANS LOCAUX
        </span>
        <span :class="$style.artisanName">
          {{ product.artisan }}
        </span>
      </span>
    </div>
    <div :class="$style.content" class="card-content">
      <div class="content">
        <p class="title is-5">{{ product.name }}</p>
        <p>{{ product.description }}</p>
        <div v-if="hasTags" :class="$style.tags" class="tags">
          <span
            v-for="(tag, i) in product.tags"
            :key="i"
            :class="{ [`is-${tag.type || 'black'}`]: true }"
            class="tag is-black"
            >{{ tag.value }}</span
          >
        </div>
      </div>
    </div>
    <div :class="$style.footer" class="card-footer">
      <a href="#">En savoir plus</a>
      <span :class="$style.price">{{ price }}</span>
      <AddToCart @click="addToCart" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AddToCart from '~/components/Atoms/AddToCart.vue'
// eslint-disable-next-line no-unused-vars
import { ProductItemData } from '~/types/product'

export default Vue.extend({
  name: 'ProductItem',
  components: { AddToCart },
  props: {
    product: {
      type: Object as () => ProductItemData,
      required: true
    }
  },
  computed: {
    hasTags(): boolean {
      return Array.isArray(this.product.tags) && this.product.tags.length !== 0
    },
    price(): string {
      return `${this.product.price.toFixed(2)}€`
    }
  },
  methods: {
    addToCart() {
      console.log('addToCart', this.product)
    }
  }
})
</script>

<style lang="scss" module>
$image-space: 1rem;

.card {
  border-radius: $radius;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  transition: all $transition-duration--slow ease-out;

  &:hover {
    transform: translateY(-3px);
    transition-duration: $transition-duration;
    box-shadow: 0 0.5em 2em -0.125em rgba($scheme-invert, 0.2),
      0 0px 0 1px rgba($scheme-invert, 0.02);
  }
}
.cardImage {
  position: relative;
}
.image {
  border-radius: $radius $radius 0 0;
  overflow: hidden;
  background: $grey-lighter;
}
.imageTag {
  width: 100%;
  height: auto;
}

.new {
  position: absolute;
  padding: 1% 5%;
  top: $image-space;
  left: $image-space;
  background: $primary;
  color: $primary-invert;
  transform: rotate(-1.5deg);
  font-size: 1.5rem;
  transform-origin: 0 0;
  font-family: 'Amatic SC', cursive;
}
.sure {
  position: absolute;
  padding: 0.1rem 0.5rem;
  top: $image-space;
  left: $image-space;
  background: $green;
  color: $green-invert;
  border-radius: $radius-small;
}
.artisan {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  color: $white;
  background: rgba($black, 0.7);
}
.artisanType {
  text-transform: uppercase;
  width: min-content;
  background: $black;
  padding: 0.2rem 1.5rem;
  text-align: center;
}
.artisanName {
  flex-grow: 1;
  padding: 0.1rem 0.5rem;
}

.tags {
}
.price {
}
.content {
  flex-grow: 1;
}
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1.5rem;
  border: 0;
}
</style>
