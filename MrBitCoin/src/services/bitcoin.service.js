import axios from 'axios'
import { storageService } from '../services/storage.service'

const RATE_KEY = 'btcRate'

const btcRateUrl = 'https://blockchain.info/tobtc?currency=USD&value=1&cors=true'

export const bitcoinService = {
    getRate,
    // getMarketPriceHistory,
    // getAvgBlockSize, 
}

async function getRate() {
    const cachedRate = storageService.load(RATE_KEY)
    if (cachedRate) return cachedRate
    try {
        const response = await axios.get(btcRateUrl)
        storageService.save(RATE_KEY, response.data)
        return response.data
    } catch (error) {
        console.error('Error fetching the exchange rate(btcRate):', error)
        throw error
    }
}