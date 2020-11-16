<template>
  <div class="NewCustomer">
    <VCard class="card">
      <VTextField v-model="customer.name" label="Name" />
      <VTextField v-model="customer.email" label="Email" />
      <VTextField v-model="customer.address" label="Address" />
      <VTextField v-model="customer.country" label="Country" />
      <VTextField v-model="customer.phone" label="Phone" />
      <VTextField v-model="customer.vehicle" label="Vehicle" />
      <VTextField v-model="customer.model" label="Model" />
      <VTextField v-model="customer.color" label="Color" />

      <VBtn @click="createCustomer" color="primary">
        create customer
      </VBtn>
    </VCard>
  </div>
</template>

<script>
export default {
  name: 'NewCustomer',
  data() {
    return {
      customer: {
        name: '',
        email: '',
        address: '',
        country: '',
        phone: '',
        vehicle: '',
        model: '',
        color: ''
      }
    }
  },
  methods: {
    createCustomer() {
      this.$api
        .newCustomer(this.customer)
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }
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
