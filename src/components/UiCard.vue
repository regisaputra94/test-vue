<template>
  <div v-if="title !== ''" class="ui-card">
    <div v-bind:class="'uk-card uk-card-'+ type +' uk-card-hover uk-card-body'">
      <h3 class="uk-card-title">{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiCardComponent',
  props: {
    type: {
      type: String,
      default: function () {
        return 'default'
      }
    },
    title: {
      type: String,
      default: function () {
        return ''
      }
    },
    description: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
  .ui-card {
    cursor: pointer;
  }
</style>
