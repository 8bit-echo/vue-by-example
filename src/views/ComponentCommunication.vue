<template>
  <div class="component Communication">
    <p><b>Global Message:</b> {{ globalMessage }}</p>
    <button @click="changeGlobalMessage('I was changed!')">
      change message
    </button>

    <hr />

    <p><b>Random Dad Joke:</b> {{ joke }}</p>
    <button @click="getJoke">
      get Joke from API
    </button>
  </div>
</template>

<script>
  import { mapState, mapMutations, mapActions } from "vuex";
  export default {
    computed: {
      ...mapState(["globalMessage", "joke"])
    },

    methods: {
      ...mapMutations(["changeGlobalMessage"]),
      ...mapActions(["getJoke"])
    }
  };
</script>