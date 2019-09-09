<template>
  <div class="ui-layout-default">
    <HeaderComponent />
    <BannerComponent />
    <div class="uk-container">
      <div class="ui-container">
        <div class="ui-sidebar">
          <SidebarComponent />
        </div>
        <div class="ui-content">
          <slot />
        </div>
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './header.vue'
import BannerComponent from './banner.vue'
import SidebarComponent from './sidebar.vue'
import FooterComponent from './footer.vue'

export default {
  components: {
    HeaderComponent,
    BannerComponent,
    SidebarComponent,
    FooterComponent
  }
}
</script>

<style lang="scss" scoped>
  .ui-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .ui-sidebar {
      width: 23%;

      > .uk-card {
        width: 100%;
      }
    }
    .ui-content {
      width: 74%;
      margin-bottom: 100px;
    }
  }
</style>
