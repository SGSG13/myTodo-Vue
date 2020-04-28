<template>
  <div class="flex-fill">
    <input
      class="input"
      name="search"
      placeholder="Search"
      v-model="search"
    />
  </div>
</template>

<script>
  import * as types from '../../store/types'

  export default {
    data () {
      return {
        search: ''
      }
    },
    watch: {
      search (value) {
        this.$store.dispatch(types.SET_SEARCH, value)
      }
    }
  }
</script>

<style lang="scss">
  .input {
    width: 100%;
    height: 50.4px;
    border: none;
    outline: none;
    padding-left: 15px;
    font-size: 20px;

    &:focus:required:invalid {
      border-color: transparent;
    }
    &:required:valid {
      border-color: transparent;
    }
  }
</style>
