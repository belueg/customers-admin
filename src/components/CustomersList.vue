<template>
  <div class="RestaurantList">
    <div v-for="customer in customers" :key="customer.id">
      <CustomerCard :customer="customer" />
    </div>
  </div>
</template>

<script>
import CustomerCard from './customer/CustomerCard.vue'

export default {
  name: 'CustomersList',
  components: {
    CustomerCard
  },
  data() {
    return {
      customers: []
    }
  },
  mounted() {
    this.$api
      .getUsers()
      .then(data => (this.customers = data.users))
      .catch(err => console.log(err))
  }
}
</script>

<style lang="scss" scoped>
.RestaurantList {
}
</style>
