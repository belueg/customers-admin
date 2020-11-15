<template>
  <VApp>
    <VAppBar app color="primary" dark>
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
