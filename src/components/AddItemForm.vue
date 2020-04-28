<template>
  <form class="add-form">
    <div class="flex-fill">
      <input
        name="title"
        type="text"
        class="input"
        id="title"
        v-model="title"
      />
    </div>
    <div class="flex-fit">
      <button
        class="button"
        type="submit"
        @click.prevent="handleSubmit"
      >Add
      </button>
    </div>
  </form>
</template>

<script>
  import axios from 'axios'
  import * as types from '../store/types'

  export default {
    data() {
      return {
        title: ''
      }
    },
    methods: {
      handleSubmit() {
        const title = this.title;
        if (title.length < 1) return;
        this.$store.dispatch(types.ADD_ITEM, title);
        this.title = ''
      }
    }
  }
</script>

<style lang="scss">
  .add-form {
    display: flex;
    align-items: center;
  }
</style>
