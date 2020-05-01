<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title">Products</h1>
        <h2 class="subtitle">
          A simple container to divide your page into <strong>sections</strong>,
          like the one you're currently reading
        </h2>
        <ProductList :products="products" />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import ProductList from '~/components/ProductList.vue'
// eslint-disable-next-line no-unused-vars
import { ProductItemData } from '~/types/product'

@Component({
  components: {
    ProductList
  }
})
export default class Products extends Vue {
  products: ProductItemData[] = []

  mounted() {
    this.products = [
      {
        id: 0,
        name: 'Le Mac N Cheese & effiloché de porc barbecue',
        image: 'http://lorempixel.com/712/480/food/0',
        description:
          "C'est un des plats les plus gourmands de chez Dejbox : des macaroni façon Mac N Cheese à base de cheddar et un effiloché de por...",
        price: 8.5,
        isNew: true,
        tags: [{ value: 'gourmand' }]
      },
      {
        id: 1,
        name: 'Le raclette bowl',
        image: 'http://lorempixel.com/712/480/food/1',
        description:
          "Quand la tendance est rattrapée par la tradition de la raclette, c'est tout simplement du bonheur ! Une raclette au boulot, qua...",
        price: 9.5
      },
      {
        id: 2,
        name: 'Le sarrasin aux champignons & oeuf poché',
        image: 'http://lorempixel.com/712/480/food/2',
        description:
          "Un bon plat végé avec du goût et de la gourmandise, c'est pile ce qu'il vous faut. Rien que cette bonne odeur de sarrasin met e...",
        price: 9.5,
        isNew: true,
        tags: [{ value: 'chaud/froid' }, { value: 'végé' }]
      },
      {
        id: 3,
        name: 'Les délicieuses lasagnes de bœuf',
        image: 'http://lorempixel.com/712/480/food/3',
        description:
          "Lasagnes, vous avez dit lasagnes ? Du bœuf, une sauce tomate cuisinée, une belle béchamel gratinée à l'emmental...Une valeur sû...",
        price: 7.5,
        isSure: true,
        tags: [{ value: 'best seller' }]
      },
      {
        id: 4,
        name: 'La salade Caesar',
        image: 'http://lorempixel.com/712/480/food/4',
        description:
          "Peut-être la plus classique de toutes les salades : la valeur sûre qu'on cherche toujours à la carte, vous n'êtes pas d'accord ...",
        price: 9,
        isNew: true,
        artisan: 'Par traiteur Govaert'
      }
    ]
  }
}
</script>
