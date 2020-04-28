<template>
  <div class="filters">
    <app-search></app-search>
    <app-status></app-status>
  </div>
</template>

<script>
  import Search from './Search.vue'
  import Status from './Status.vue'

  export default {
    components: {
      appSearch: Search,
      appStatus: Status
    }
  }
</script>

<style lang="scss">
  .filters {
    display: flex;
    align-items: center;
  }
</style>
