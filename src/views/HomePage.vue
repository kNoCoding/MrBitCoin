<template>
  <main>

    <h1>Welcome {{ userName }}!</h1>
    <p>You're wallet balance is: <b>{{ userBalance }}</b></p>
    <p>The current BTC rate is: <b>{{ btcRate }}</b></p>

    <h2>{{ $store.state.count }}</h2>
    <button @click="inc(-1)">-</button>
    <button @click="inc(1)">+</button>
    <button @click="inc(10)">+10</button>

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
  methods: {
    inc(by) {
      this.$store.commit({ type: 'increment', by })
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