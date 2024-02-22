<template>
    <header>
        <p class="logo"><router-link to="/">MrBitCoin</router-link></p>

        <nav>
            <ul>
                <li><router-link to="/">home</router-link></li>
                <li><router-link to="/contact">contact</router-link></li>
                <li><router-link to="/chart">charts</router-link></li>
            </ul>
        </nav>

        <p>Hi, {{ userName }}</p>

        <!-- <p>BTC Rate:{{ btcRate }}</p> -->
    </header>
</template>

<script>
import { bitcoinService } from '@/services/bitcoin.service.js'
import { userService } from '@/services/user.service.js'

export default {
    data() {
        return {
            userName: null,
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
            this.btcRate = await bitcoinService.getRate()
        } catch (error) {
            console.error('Error fetching the BTC rate:', error)
        }
    }

}
</script>

<style scoped>
header {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: auto 1fr auto auto;
    column-gap: 1rem;
    align-items: center;

    background-color: gray;
    color: darkorange;

    padding: .5rem 1rem;
}

.logo {
    font-size: 1.5rem;
    cursor: pointer;
    border: 3px solid lightgray;
    border-radius: .75rem;
    padding: 0 .5rem;

    &:hover {
        background-color: darkorange;
        color: lightgray;
    }
}

ul {
    display: flex;
    gap: 1rem;
    padding: 0;
    list-style: none;
}

a {
    cursor: pointer;
    font-weight: 500;
    color: darkorange;
    text-decoration: none;

    &:hover {
        color: lightgray;
    }
}
</style>