<template>
  <li class="todo-list__item">
    <div class="flex-fill">
      <span
        class="todo-list__title"
        :class="{ 'todo-list__title_done': item.done }"
        @click="doneItem(item.id)"
      >
      {{ item.title }}
      </span>
    </div>
    <div class="flex-fit">
      <button
        class="button"
        @click="removeItem(item.id)"
      >X</button>
    </div>
  </li>
</template>

<script>
  import { mapActions } from 'vuex'
  import * as types from '../../store/types'

  export default {
    props: ['item'],
    methods: {
      ...mapActions({
        doneItem: types.DONE_ITEM,
        removeItem: types.REMOVE_ITEM
      })
    }
  }
</script>

<style lang="scss">
  .todo-list__item {
    display: flex;
    align-items: center;
    font-size: 18px;
    padding: 10px 0 10px 20px;
  }

  .todo-list__title {
    cursor: pointer;
  }

  .todo-list__title_done {
    text-decoration: line-through;
  }
</style>
