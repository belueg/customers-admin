<template>
  <VApp>
    <VAppBar app color="primary" dark>
      <h3>Restaurants List</h3>
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
