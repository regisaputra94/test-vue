<template>
  <h3 v-if="title !== '' && icon !== ''" class="ui-title-icon">
    <span v-bind:uk-icon="icon"></span>
    <span style="position:relative;top:3px;">{{ title }}</span>
  </h3>
</template>

<script>
export default {
  name: 'UiTitleIconComponent',
  props: {
    icon: {
      type: String,
      default: function () {
        return ''
      }
    },
    title: {
      type: String,
      default: function () {
        return ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .ui-title-icon {
    font-size: 20px;
    font-weight: bold;
  }
</style>
