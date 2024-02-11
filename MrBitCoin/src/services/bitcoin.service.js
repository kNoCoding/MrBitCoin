import axios from 'axios'
import { storageService } from '../services/storage.service'

const RATE_KEY = 'btcRate'
const PRICE_HISTORY_KEY = 'marketPriceHistory'
const BLOCK_SIZE_KEY = 'averageBlockSize'

const btcRateUrl = 'https://blockchain.info/tobtc?currency=USD&value=1'
const marketPriceHistoryUrl = 'https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true'
const averageBlockSizeUrl = 'https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true'

export const bitcoinService = {
    getRate,
    getMarketPriceHistory,
    getAvgBlockSize,
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

async function getMarketPriceHistory() {
    const cachedMarketPriceHistory = storageService.load(PRICE_HISTORY_KEY)
    if (cachedMarketPriceHistory) return cachedMarketPriceHistory
    try {
        const response = await axios.get(marketPriceHistoryUrl)
        storageService.save(PRICE_HISTORY_KEY, response.data)
        console.log('response.data', response.data)

        return response.data
    } catch (error) {
        console.error('Error fetching the market price history(averageBlockSize):', error)
        throw error
    }
}

async function getAvgBlockSize() {
    const cachedAverageBlockSize = storageService.load(BLOCK_SIZE_KEY)
    if (cachedAverageBlockSize) return cachedAverageBlockSize
    try {
        const response = await axios.get(averageBlockSizeUrl)
        storageService.save(BLOCK_SIZE_KEY, response.data)
        console.log('response.data', response.data)

        return response.data
    } catch (error) {
        console.error('Error fetching the average block size(marketPriceHistory):', error)
        throw error
    }
}