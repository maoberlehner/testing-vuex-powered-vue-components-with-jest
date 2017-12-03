<template>
  <div class="shopping-list">
    <div class="basket" v-if="itemsInBasket.length">
      <h2>Items in basket</h2>
      <ul class="items-in-basket">
        <li v-for="item in itemsInBasket" :key="item.id" @click="removeItemFromBasket(item.id)">
          <h3>{{ item.name }}</h3>
        </li>
      </ul>
    </div>

    <h2>Items not in basket</h2>
    <ul class="items-not-in-basket">
      <li v-for="item in itemsNotInBasket" :key="item.id" @click="addItemToBasket(item.id)">
        <h3>{{ item.name }}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'ShoppingList',
  computed: {
    ...mapGetters([
      'itemsInBasket',
      'itemsNotInBasket',
    ]),
  },
  methods: {
    ...mapActions([
      'fetchItems',
    ]),
    ...mapMutations([
      'addItemToBasket',
      'removeItemFromBasket',
    ]),
  },
  created() {
    this.fetchItems();
  },
};
</script>
