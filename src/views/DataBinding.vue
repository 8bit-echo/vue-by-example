<template>
  <div class="data-binding">
    <h1>Data Binding</h1>
    <p class="small">
      Vue uses 2-way data binding. this means that no matter where you change
      your data from, it is reflected everywhere that it is used.
    </p>
    <p>{{ message }}</p>

    <input
      type="text"
      v-model="userInput"
      placeholder="what's your full name?"
    />
    <p>your name is {{ userInput }}</p>
    <p>your first name is {{ firstName }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: "Hello",
        userInput: ""
      };
    },

    computed: {
      firstName() {
        if (this.userInput.length) {
          return this.userInput.split(" ")[0];
        }
        return this.userInput;
      }
    }
  };
</script>

<style lang="css" scoped>
  input[type="text"] {
    width: 80%;
    padding: 0.5rem 0.25rem;
    font-size: 20px;
    color: purple;
  }

  p {
    font-size: 1.5rem;
    font-weight: bold;
  }

  p.small {
    font-size: 1rem;
    font-weight: normal;
  }
</style>
