<template>
  <div>
    <app-loader v-if="isLoading"></app-loader>
    <div v-else>
      <div
              class="text-center"
              v-if="!!error"
      >
        {{ error }}
      </div>
      <div
              class="todo-list"
              :class="{ 'todo-list_empty': items.length === 0 && !isLoading}"
      >
        <div
                class="text-center"
                v-if="items.length === 0 && !isLoading && !error"
        >
          List is empty :(
        </div>
        <ul>
          <app-todo-item
                  v-for="item in filteredItems"
                  :item="item"
                  :key="item.id"
          ></app-todo-item>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Loader from './Loader.vue'
  import TodoItem from './TodoItem.vue'
  import * as types from '../../store/types'
  import { filterItems } from '../../shared/utils'

  export default {
    computed: {
      ...mapGetters({
        'items': types.ITEMS,
        'isLoading': types.LOADING,
        'error': types.ERROR,
        'status': types.STATUS,
        'search': types.SEARCH
      }),
      filteredItems() {
        return filterItems(this.items, this.status, this.search)
      }
    },
    components: {
      appLoader: Loader,
      appTodoItem: TodoItem
    },
    created() {
      this.$store.dispatch(types.LOAD_ITEMS)
    }
  }
</script>

<style lang="scss">
  .todo-list {
    background-color: white;
    padding: 10px;
    margin: 20px 0;
    min-height: 90px;
    max-height: 372px;
    overflow-Y: scroll;

    &_empty {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
