<template>
  <div class="app">
    <app-header></app-header>
    <app-filters></app-filters>
    <app-todo-list></app-todo-list>
    <app-add-item-form></app-add-item-form>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Filters from './components/Filters/Filters.vue'
  import TodoList from './components/TodoList/TodoList.vue'
  import AddItemForm from './components/AddItemForm.vue'

  export default {
    name: 'App',
    components: {
      appHeader: Header,
      appFilters: Filters,
      appTodoList: TodoList,
      appAddItemForm: AddItemForm
    }
  }
</script>

<style lang="scss">
  body {
    height: 100vh;
    background-image: linear-gradient(#ff6161, #ff768c);
    background-repeat: no-repeat;
    font-size: 16px;
    min-width: 320px;
    position: relative;
    line-height: 1.65;
    font-family: "Roboto", sans-serif;
    overflow-x: hidden;
    color: #2f4f4f;
    margin: 0;
    padding: 0;

    * {
      box-sizing: border-box;
    }

    ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }
  }

  .app {
    width: 470px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: auto;
  }

  //SCROLL STYLE
  ::-webkit-scrollbar {
    width: 14px;
  }

  ::-webkit-scrollbar-track {
    color: transparent;
    background: transparent;
  }

  ::-webkit-scrollbar-track-piece {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(210, 210, 210, 1);
    border-radius: 10px;
    box-shadow: inset 0 0 0 4px white;
  }

  ::-webkit-scrollbar-thumb:window-inactive {
    background: rgba(210, 210, 210, 1);
  }

  //UTILS
  .flex-fill {
    flex: 1 1 0;
    flex-basis: 0;
  }

  .flex-fit {
    flex-basis: auto;
  }

  .text-center {
    text-align: center
  }
</style>
