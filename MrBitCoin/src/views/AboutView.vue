<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>btcRate: ${{ btcRate }}</p>
  </div>
</template>

<script>
import { bitcoinService } from '../services/bitcoin.service'

export default {
  // name: 'About',
  data() {
    return {
      btcRate: null,
    }
  },
  async mounted() {
    try {
      this.btcRate = await bitcoinService.getRate()
    } catch (error) {
      console.error('Error fetching the BTC rate:', error)
    }
  },
}
</script>

<style></style>
