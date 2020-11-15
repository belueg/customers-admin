<template>
  <VCard class="mx-auto" max-width="400">
    <VImg class="white--text align-end" height="80px" :src="customer.avatarUrl">
      <VCardTitle>{{ customer.name }}</VCardTitle>
    </VImg>

    <VCardText class="text--primary">
      <div>{{ customer.email }}</div>
    </VCardText>

    <VCardActions>
      <VBtn color="orange" text>
        Details
      </VBtn>
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
