<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>

<script>
  import Nav from "./components/Nav";
  export default {
    components: { Nav }
  };
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 1rem;
    line-height: 2;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  .note {
    background-color: rgb(255, 251, 226);
    padding: 1rem;
    display: inline-block;
    border-left: solid 5px gold;
    font-style: italic;
  }

  code {
    background-color: rgb(223, 223, 223);
    padding: 0.25rem 0.5rem;
    border-radius: 2px;
  }

  img {
    max-width: 100%;
  }

  .contain {
    width: 80%;
    margin: auto;
    max-width: 750px;
  }
</style>
