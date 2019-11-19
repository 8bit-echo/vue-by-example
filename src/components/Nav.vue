<template>
  <div id="nav">
    <router-link v-for="route in routes" :to="route.path" :key="route.path">{{
      route.name
    }}</router-link>
  </div>
</template>

<script>
  import { routes } from "../router/index";
  export default {
    data() {
      return {
        routes
      };
    }
  };
</script>