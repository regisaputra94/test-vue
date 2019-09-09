<template>
  <div>
    <UiNavComponent
      v-for="(menu, index) in menus"
      v-bind:key="index"
      v-bind:title="menu.title"
      v-bind:menus="menu.menus" />
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      menus: [
        {
          title: '',
          menus: [
            {
              icon: '',
              title: 'Boards',
              href: '/boards',
              active: true
            },
            {
              icon: '',
              title: 'Home',
              href: '/',
              active: false
            }
          ]
        }
      ]
    }
  }
}
</script>
