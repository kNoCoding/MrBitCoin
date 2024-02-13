<template>
  <main>

    <h1>Welcome {{ userName }}!</h1>
    <h2>You're wallet balance is: {{ userBalance }}</h2>
    <p>The current BTC rate is: {{ btcRate }}</p>

  </main>
</template>

<script>
import { bitcoinService } from '@/services/bitcoin.service.js'
import { userService } from '@/services/user.service.js'

export default {
  data() {
    return {
      userName: null,
      userBalance: null,
      btcRate: null,
    }
  },
  async mounted() {

    try {
      this.userName = await userService.getUser().name
    } catch (error) {
      console.error('Error fetching the userName:', error)
    }
    try {
      this.userBalance = await userService.getUser().balance
    } catch (error) {
      console.error('Error fetching the userBalance:', error)
    }

    try {
      this.btcRate = await bitcoinService.getRate()
    } catch (error) {
      console.error('Error fetching the BTC rate:', error)
    }
  }

}
</script>

<style scoped></style>