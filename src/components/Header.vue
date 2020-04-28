<template>
  <div class="header">
    <div class="header__title">
      <h1>ToDo List</h1>
    </div>
    <div>
      <span>
        {{ todoCount }} more to do, {{ doneCount }} done
      </span>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import * as types from '../store/types'

  export default {
    computed: {
      ...mapGetters({
          'todoCount': types.TODO_COUNT,
          'doneCount': types.DONE_COUNT
        }
      )
    }
  }
</script>

<style lang="scss">
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;

    &__title {
      font-size: 22px;
    }
  }
</style>
