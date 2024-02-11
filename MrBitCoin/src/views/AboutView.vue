<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>btcRate: ${{ btcRate }}</p>
    <p>marketPriceHistory: {{ marketPriceHistory }}</p>
    <p>avgBlockSize: {{ avgBlockSize }}</p>
  </div>
</template>

<script>
import { bitcoinService } from '../services/bitcoin.service'

export default {
  name: 'About',
  data() {
    return {
      btcRate: null,
      marketPriceHistory: null,
      avgBlockSize: null,
    }
  },
  async mounted() {
    try {
      this.btcRate = await bitcoinService.getRate()
      this.marketPriceHistory = await bitcoinService.getMarketPriceHistory()
      console.log('this.marketPriceHistory', this.marketPriceHistory)
    } catch (error) {
      console.error('Error fetching the BTC rate:', error)
    }

    try {
      this.marketPriceHistory = await bitcoinService.getMarketPriceHistory()
      console.log('this.marketPriceHistory', this.marketPriceHistory)

    } catch (error) {
      console.error('Error fetching the market price history:', error)
    }

    try {
      this.avgBlockSize = await bitcoinService.getAvgBlockSize()
      console.log('this.avgBlockSize', this.avgBlockSize)

    } catch (error) {
      console.error('Error fetching the average block size:', error)
    }
  },
}
</script>

<style></style>
