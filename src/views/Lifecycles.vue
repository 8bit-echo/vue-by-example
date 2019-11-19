<template>
  <div class="lifecycles">
    <h1>Lifecycle Hooks</h1>
    <p>
      Vue exposes several lifecycle hooks that you can use to control your
      component's behavior at key points.
    </p>
    <Footnote
      message="open the developer console to see when the different hooks run"
    />

    <button @click="updateNumber += 1">
      Click here to trigger an update: {{ updateNumber }}
    </button>
  </div>
</template>

<script>
  import Footnote from "../components/Footnote";
  export default {
    components: { Footnote },

    data() {
      return {
        updateNumber: 0
      };
    },

    // beforeCreate() {
    //   console.log(`beforeCreate()
    //     type of this.updateNumber: ${typeof this.updateNumber}
    //     value: ${this.updateNumber}`
    //   );
    // },

    created() {
      console.log(`created()
            type of this.updateNumber: ${typeof this.updateNumber}
            value: ${this.updateNumber}`);
    },

    // beforeMount() {
    //   console.log(`beforeMount()
    //     type of this.updateNumber: ${typeof this.updateNumber}
    //     value: ${this.updateNumber}`
    //   );
    // },

    mounted() {
      console.log(`mounted()
            type of this.updateNumber: ${typeof this.updateNumber}
            value: ${this.updateNumber}`);
    },

    // beforeUpdate() {
    //   console.log(`beforeUpdate()
    //     type of this.updateNumber: ${typeof this.updateNumber}
    //     value: ${this.updateNumber}`
    //   );
    // },

    // updated() {
    //   console.log(`updated()
    //     type of this.updateNumber: ${typeof this.updateNumber}
    //     value: ${this.updateNumber}`
    //   );
    // },

    // beforeDestroy() {
    //   console.log(`beforeDestroy()
    //     type of this.updateNumber: ${typeof this.updateNumber}
    //     value: ${this.updateNumber}
    //   `)
    // },

    destroyed() {
      console.log(`destroyed()
            type of this.updateNumber: ${typeof this.updateNumber} 
            value: ${this.updateNumber}
          `);
    }
  };
</script>