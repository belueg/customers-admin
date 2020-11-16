<template>
  <VCard class="mx-auto customerCards" max-width="400">
    <VImg class="white--text align-end" height="80px" :src="customer.avatarUrl">
      <VCardTitle>{{ customer.name }}</VCardTitle>
    </VImg>

    <VCardText class="text--primary cards">
      <div>{{ customer.email }}</div>
    </VCardText>

    <VCardActions>
      <RouterLink
        class="text-decoration-none"
        :to="{ path: '/customer/' + customer.id }"
      >
        <VBtn color="orange" text>
          Details
        </VBtn>
      </RouterLink>
    </VCardActions>
  </VCard>
</template>

<script>
export default {
  props: {
    customer: Object
  },
  data: () => ({
    loading: false,
    selection: 1
  }),

  methods: {
    reserve() {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    }
  }
}
</script>
<style lang="scss" scoped>
.customerCards {
  width: 100%;
  height: 100%;
}
</style>
