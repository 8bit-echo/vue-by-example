<template>
  <div class="lists">
    <h1>Lists and Loops</h1>

    <p>You can render loops with <code>v-for</code></p>

    <section class="contain">
      <h2 class="left">Groceries:</h2>
      <ul>
        <li v-for="item in groceries" :key="item">{{ item }}</li>
      </ul>

      <input type="text" v-model="newItem" />
      <button @click="groceries.push(newItem)">Add to List</button>
      <Footnote
        type="note"
        message="Each item in a loop needs to be bound to a unique ID called a 'key' that is used in case a list is re-ordered."
      />
    </section>

    <p>
      you can loop through objects and complex data structures as well with
      <code>v-for</code>
    </p>

    <section class="contain left">
      <h2 class="left">Categorized Groceries:</h2>

      <!-- Loop through the keys in an object -->
      <div
        v-for="(items, categoryName) in groceryCategories"
        :key="categoryName"
      >
        <h3>{{ categoryName }}</h3>
        <ul>
          <!-- Loop through the arrays within each key -->
          <li v-for="item in items" :key="item">{{ item }}</li>
        </ul>
      </div>

      <Footnote
        type="note"
        message="When you include a second parameter with v-for, the second value is always the index for arrays, or the property's name for objects"
      />
    </section>
  </div>
</template>

<script>
  import Footnote from "../components/Footnote";
  export default {
    components: { Footnote },
    data() {
      return {
        groceries: ["Milk", "Eggs", "Coffee"],
        newItem: "",
        groceryCategories: {
          Dairy: ["Milk", "Cheese"],
          Produce: ["Tomatoes", "Lettuce"],
          Bakery: ["Bread"]
        }
      };
    }
  };
</script>

<style scoped>
  .left {
    text-align: left;
  }

  ul {
    text-align: left;
  }
</style>