<template>
  <div class="CustomerDetails">
    <VCard class="card">
      <VTextField
        :value="customer.name"
        label="Name"
        :readonly="isDisabled"
        :filled="isDisabled"
      />
      <VTextField
        :value="customer.email"
        label="Email"
        :readonly="isDisabled"
        :filled="isDisabled"
      />

      <VTextField
        :value="customer.address"
        label="Address"
        :readonly="isDisabled"
        :filled="isDisabled"
      />

      <VTextField
        :value="customer.country"
        label="Country"
        :readonly="isDisabled"
        :filled="isDisabled"
      />
      <VTextField
        :value="customer.phone"
        label="Phone"
        :readonly="isDisabled"
        :filled="isDisabled"
      />
    </VCard>
    <VCard class="card">
      <VTextField
        :value="customer.vehicle"
        label="Vehicle"
        :readonly="isDisabled"
        :filled="isDisabled"
      />
      <VTextField
        :value="customer.model"
        label="Model"
        :readonly="isDisabled"
        :filled="isDisabled"
      />
      <VTextField
        :value="customer.color"
        label="Color"
        :readonly="isDisabled"
        :filled="isDisabled"
      />
      <VBtn @click="isDisabled = !isDisabled" color="primary">
        {{ isDisabled ? 'EDIT' : 'SAVE' }}
      </VBtn>
      <VBtn class="ml-2" color="error" @click="deleteUser(customer.id)">
        Delete
      </VBtn>
    </VCard>
  </div>
</template>

<script>
export default {
  name: 'CustomerDetails',
  data() {
    return {
      customer: {},
      isDisabled: true
    }
  },
  mounted() {
    this.$api
      .getUser(this.$route.params.id)
      .then(data => (this.customer = data.user))
      .catch(err => console.log(err))
  },
  methods: {
    deleteUser(id) {
      console.log('deleteUser -> id', id)
      this.$api
        .deleteUser(id)
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }
  }
}
</script>

<style lang="scss" scoped>
.CustomerDetails {
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
