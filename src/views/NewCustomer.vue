<template>
  <div class="NewCustomer">
    <VCard class="card">
      <VTextField value="customer name" label="Name" />
      <VTextField value="customer name" label="Name" />
      <VTextField value="customer name" label="Name" />
      <VTextField value="customer name" label="Name" />
      <VTextField value="customer name" label="Name" />
      <VTextField value="customer name" label="Name" />
      <VTextField value="customer name" label="Name" />
      <VTextField value="customer name" label="Name" />

      <VBtn @click="isDisabled = !isDisabled" color="primary">
        create customer
      </VBtn>
    </VCard>
  </div>
</template>

<script>
export default {
  name: 'NewCustomer',
  mounted() {
    this.$api
      .newCustomer({ id: 'df2154212124', name: 'belu', phone: '13523555' })
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }
}
</script>

<style lang="scss" scoped>
.NewCustomer {
  width: 900px;
  margin: 0 auto;
  display: flex;
  .card {
    margin-top: 50px;
    width: 100%;
    padding: 30px;
  }
}
</style>
