<template>
  <VApp>
    <VAppBar app color="primary" class="navBar" dark>
      <RouterLink to="/">
        <h3 style="color:white;">Customers List</h3>
      </RouterLink>

      <VSpacer />
    </VAppBar>
    <VMain>
      <RouterView>
        <Home />
      </RouterView>
    </VMain>
  </VApp>
</template>

<script>
import Home from '@/views/Home'
export default {
  name: 'App',
  components: {
    Home
  },
  mounted() {},

  data: () => ({})
}
</script>

<style lang="scss" scoped>
.navBar {
  position: 'relative';
}
</style>
