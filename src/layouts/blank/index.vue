<template>
  <div class="ui-layout-blank">
    <HeaderComponent />
    <div class="ui-content">
      <slot />
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './header.vue'
import FooterComponent from './footer.vue'

export default {
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>
