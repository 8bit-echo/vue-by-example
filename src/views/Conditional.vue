<template>
  <div class="conditionals">
    <h1>Conditional Rendering</h1>
    <p>
      you can show or hide an element on the page by using<br />
      <code>&lt;div v-if="true|false"&gt;</code>
      <br />OR <br />
      <code>&lt;div v-show="true|false"&gt;</code>
    </p>

    <p>you can show or hide the ghost by clicking the button below</p>
    <div class="example-container">
      <div class="example">
        <h2>using v-if</h2>
        <p class="ghost" v-if="boo">👻</p>
        <button @click="boo = !boo">Boo!</button>
      </div>

      <div class="example">
        <h2>using v-show</h2>
        <p class="ghost" v-show="show">👻</p>
        <button @click="show = !show">Boo!</button>
      </div>
    </div>
    <p class="note">
      notice what happens in the DOM inspector when using each method.
    </p>

    <p v-if="boo && show">Double spooky</p>
    <p v-else-if="boo || show">Single Spooky</p>
    <p v-else>Ghosts are invisible</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        boo: true,
        show: true
      };
    }
  };
</script>

<style scoped>
  p.ghost {
    font-size: 60px;
  }

  .example-container {
    display: flex;
    justify-content: space-around;
    justify-content: space-evenly;
  }
</style>