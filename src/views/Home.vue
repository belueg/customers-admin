<template>
  <div class="home">
    <CustomersList />
  </div>
</template>

<script>
// @ is an alias to /src
import CustomersList from '@/components/CustomersList'
export default {
  name: 'Home',
  components: {
    CustomersList
  }
}
</script>
