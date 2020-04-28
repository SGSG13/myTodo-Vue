<template>
  <div class="flex-fit">
    <button
      v-for="button in buttons"
      class="button"
      :class="{ button_active: button.name === activeStatus }"
      :key="button.name"
      @click="handleChangeStatus(button.name)"
    >
      {{ button.label }}
    </button>
  </div>
</template>

<script>
  import * as types from '../../store/types'

  export default {
    data () {
      return {
        buttons: [
          {label: 'All', name: 'all'},
          {label: 'Done', name: 'done'},
          {label: 'Active', name: 'active'},
        ],
        activeStatus: 'all'
      }
    },
    methods: {
      handleChangeStatus(status) {
        if(status === this.activeStatus) return;
        this.activeStatus = status;
        this.$store.dispatch(types.SET_STATUS, status)
      }
    }
  }
</script>

<style lang="scss">
  .button {
    font-size: 16px;
    background-color: white;
    border: none;
    outline: none;
    padding: 16px 0;
    width: 70px;

    &:active,
    &_active {
      color: #f2310e;
    }
  }
</style>
