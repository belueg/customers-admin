<template>
  <div class="CustomerDetails">
    <VCard class="card">
      <VTextField
        :value="customer.name"
        v-model="customer.name"
        label="Name"
        :readonly="isDisabled"
        :filled="isDisabled"
      />
      <VTextField
        :value="customer.email"
        v-model="customer.email"
        label="Email"
        :readonly="isDisabled"
        :filled="isDisabled"
      />

      <VTextField
        :value="customer.address"
        v-model="customer.address"
        label="Address"
        :readonly="isDisabled"
        :filled="isDisabled"
      />

      <VTextField
        :value="customer.country"
        v-model="customer.country"
        label="Country"
        :readonly="isDisabled"
        :filled="isDisabled"
      />
      <VTextField
        :value="customer.phone"
        v-model="customer.phone"
        label="Phone"
        :readonly="isDisabled"
        :filled="isDisabled"
      />
    </VCard>
    <VCard class="card">
      <VTextField
        :value="customer.vehicle"
        v-model="customer.vehicle"
        label="Vehicle"
        :readonly="isDisabled"
        :filled="isDisabled"
      />
      <VTextField
        :value="customer.model"
        v-model="customer.model"
        label="Model"
        :readonly="isDisabled"
        :filled="isDisabled"
      />
      <VTextField
        :value="customer.color"
        v-model="customer.color"
        label="Color"
        :readonly="isDisabled"
        :filled="isDisabled"
      />
      <VBtn @click="isDisabled = !isDisabled" color="primary" v-if="isDisabled">
        Edit
      </VBtn>
      <VBtn @click="saveData()" color="primary" v-else>
        save
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
        .then(data => {
          data.error
            ? this.errorNotification(data.error)
            : this.successNotification(data.message)
          this.$router.push('/')
        })
        .catch(err => console.log(err))
    },
    saveData() {
      this.$api
        .updateUser(this.customer.id, this.customer)
        .then(data => console.log(data))
        .catch(err => console.log(err))
      this.isDisabled = !this.isDisabled
    },
    successNotification(msg) {
      this.$toast.open({
        message: msg,
        type: 'success'
        // all of other options may go here
      })
    },
    errorNotification(msg) {
      this.$toast.open({
        message: msg,
        type: 'error'
        // all of other options may go here
      })
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
