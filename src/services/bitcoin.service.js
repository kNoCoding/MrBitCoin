import axios from 'axios'
import { storageService } from '../services/storage.service'

const RATE_KEY = 'btcRate'
const PRICE_HISTORY_KEY = 'marketPriceHistory'
const BLOCK_SIZE_KEY = 'averageBlockSize'

export const bitcoinService = {
    getRate,
    getMarketPriceHistory,
    getAvgBlockSize,
}

async function getRate() {
    const cachedRate = storageService.load(RATE_KEY)
    if (cachedRate) return cachedRate
    try {
        const response = await axios.get('https://blockchain.info/tobtc?currency=USD&value=1')
        storageService.save(RATE_KEY, response.data)
        return response.data
    } catch (error) {
        console.error('Error fetching the exchange rate(btcRate):', error)
        throw error
    }
}

async function getMarketPriceHistory(amount = 3, timePeriod = 'months') {
    const cachedMarketPriceHistory = storageService.load(PRICE_HISTORY_KEY)
    if (cachedMarketPriceHistory) return cachedMarketPriceHistory
    try {
        const response = await axios.get(`https://api.blockchain.info/charts/market-price?timespan=${amount}${timePeriod}&format=json&cors=true`)
        storageService.save(PRICE_HISTORY_KEY, response.data)
        return response.data
    } catch (error) {
        console.error('Error fetching the market price history(averageBlockSize):', error)
        throw error
    }
}

async function getAvgBlockSize(amount = 3, timePeriod = 'months') {
    const cachedAverageBlockSize = storageService.load(BLOCK_SIZE_KEY)
    if (cachedAverageBlockSize) return cachedAverageBlockSize
    try {
        const response = await axios.get(`https://api.blockchain.info/charts/avg-block-size?timespan=${amount}${timePeriod}&format=json&cors=true`)
        storageService.save(BLOCK_SIZE_KEY, response.data)
        return response.data
    } catch (error) {
        console.error('Error fetching the average block size(marketPriceHistory):', error)
        throw error
    }
}