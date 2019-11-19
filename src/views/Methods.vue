<template>
  <div class="methods">
    <h1>Methods & Events</h1>
    <p>
      When you need to define more complex functionality in a component, you can
      use a <code>method</code>
    </p>

    <section class="counter contain">
      <h2>Counter</h2>
      <button @click="addClick()">Cick counter</button> {{ clicks }}
    </section>

    <section class="todo contain">
      <h2>To Do List:</h2>

      <input type="text" v-model="newToDoItem" @keyup.enter="addToDo()" />
      <button @click="addToDo()">Add</button>
      <ul>
        <li v-for="(task, i) in tasks" :key="task" @click="removeToDo(i)">
          {{ task }}
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        clicks: 0,
        newToDoItem: "",
        tasks: []
      };
    },

    methods: {
      addClick() {
        this.clicks += 1;
      },

      addToDo() {
        this.tasks.push(this.newToDoItem);
        this.newToDoItem = "";
      },

      removeToDo(i) {
        this.tasks.splice(i, 1);
      }
    }
  };
</script>

<style scoped>
  section {
    padding: 2rem 0;
    border-bottom: solid 2px lightgrey;
  }

  ul {
    text-align: left;
  }

  li:hover {
    background: rgba(255, 0, 0, 0.25);
    cursor: pointer;
  }
</style>