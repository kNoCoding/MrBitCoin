<template>
    <main>
        <h1>Charts</h1>

        <section class="chart-section">
            <Bar class="bar-chart" v-if="loaded" :data="chartData" :options="options" />
            <Line class="line-chart" v-if="loaded" :data="lineChartData" :options="options" />
        </section>
    </main>
</template>

<script>
import { Bar, Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LineElement, PointElement } from 'chart.js'
import { bitcoinService } from '@/services/bitcoin.service'

ChartJS.register(Title, Tooltip, Legend, BarElement, LineElement, CategoryScale, LinearScale, PointElement)

export default {
    name: 'ChartComponent',
    components: { Bar, Line },
    data: () => ({
        loaded: false,
        chartData: {
            labels: ['Label 1', 'Label 2', 'Label 3'], // Your X-axis labels
            datasets: [{
                label: 'Dataset 1', // Name of the data set
                backgroundColor: '#f87979', // Color of the bars
                borderColor: '#f87979', // Border color for the Line chart
                fill: false, // Typically set for Line charts to not fill under the line
                data: [] // Your data points
                // data: [10, 20, 30] // Your data points
            }]
        },
        lineChartData: {
            labels: [],
            datasets: [{
                label: 'Dataset 2',
                backgroundColor: '#f87979', // Color of the bars
                borderColor: '#f87979', // Border color for the Line chart
                data: []

            }]
        },
        options: { // Common chart options for responsiveness
            responsive: true,
            // maintainAspectRat io: false, // Adjust based on your layout needs
        }
    }),
    async mounted() {
        this.loaded = false;

        try {
            const marketPriceHistory = await bitcoinService.getMarketPriceHistory();
            const avgBlockSize = await bitcoinService.getAvgBlockSize();
            console.log('avgBlockSize', avgBlockSize)


            //Bar chart stuff
            const labels = marketPriceHistory.values.map(entry => new Date(entry.x * 1000).toLocaleDateString())
            const data = marketPriceHistory.values.map(entry => entry.y)

            //Line chart stuff
            const lineLabels = avgBlockSize.values.map(entry => new Date(entry.x * 1000).toLocaleDateString())
            const lineData = avgBlockSize.values.map(entry => entry.y)

            this.chartData = {
                labels,
                datasets: [{
                    label: 'BTC Market Price',
                    backgroundColor: '#f87979',
                    borderColor: '#007bff', // Use a different color for the Line chart for distinction
                    fill: false, // Set false for Line chart
                    data
                }]
            }

            this.lineChartData = {
                labels: lineLabels,
                datasets: [{
                    label: 'Avg block size',
                    backgroundColor: '#f87979',
                    borderColor: '#007bff', // Use a different color for the Line chart for distinction
                    fill: false, // Set false for Line chart
                    data: lineData
                }]
            }
            this.loaded = true
        } catch (e) {
            console.error(e);
        }
    }
}
</script>

<style scoped>
main {
    padding: 1rem;
}

.chart-section {
    padding: 1rem;
    background-color: #fff;
    border-radius: 8px;
}

.bar-chart,
.line-chart {
    padding: 8px 16px;
    max-width: 100%;
}
</style>