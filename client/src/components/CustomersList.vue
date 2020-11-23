<template>
  <div class="customContainer">
    <h1>Customers data</h1>
    <RouterLink to="/newcustomer">
      <VBtn color="primary" class="newCustomerBtn" title="add a new customer">
        +
      </VBtn>
    </RouterLink>
    <div class="RestaurantList">
      <div v-for="customer in customers" :key="customer.id" class="cards">
        <CustomerCard :customer="customer" />
      </div>
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
    console.log(this.customers)
  }
}
</script>

<style lang="scss" scoped>
.customContainer {
  width: 80%;
  margin: 0 auto;

  h1 {
    margin-top: 40px;
    text-align: center;
    color: rgb(71, 71, 71);
  }

  .newCustomerBtn {
    position: absolute;
    top: 10px;
    right: 10px;
    margin-bottom: 30px;
    border-radius: 50px;
  }
  .RestaurantList {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    min-height: auto;
    padding: 50px 0px;
    .cards {
      width: 240px;
      height: 218px;
      margin: 12px 10px;
      &:hover {
        -webkit-box-shadow: 0px 1px 14px -1px rgba(33, 29, 25, 0.68);
        box-shadow: 0px 1px 14px -1px rgba(33, 29, 25, 0.68);
        cursor: pointer;
      }
    }
  }
}
</style>
