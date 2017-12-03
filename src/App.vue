<template>
  <div id="app">
    <shopping-list></shopping-list>
  </div>
</template>

<script>
import ShoppingList from './components/ShoppingList';

export default {
  name: 'app',
  components: {
    ShoppingList,
  },
};
</script>
