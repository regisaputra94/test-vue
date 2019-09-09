<template>
  <div class="ui-nav">
    <h3 v-if="title && title !== ''">
      {{ title }}
    </h3>
    <ul class="ui-nav-menu">
      <li v-for="menu in menus" v-bind:key="menu.id">
        <router-link v-bind:to="menu.title">
          {{ menu.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UiNavComponent',
  props: {
    title: {
      type: String
    },
    menus: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .ui-nav-menu {
    list-style: none;

    > li {
      border-radius: 5px;
      background: #4f617d;
      display: block;
      padding: 8px;
      margin-bottom: 5px;

      a {
        color: #333;
        font-weight: bold;
        text-decoration: none !important;
      }
    }
  }
</style>
