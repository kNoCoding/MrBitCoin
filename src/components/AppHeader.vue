<template>
    <header>
        <p class="logo"><router-link to="/">MrBitCoin</router-link></p>

        <button @click="toggleMenu" class="menu-button">Menu</button>

        <nav v-show="!isMobile || menuOpen">
            <ul>
                <li @click="closeMenu"><router-link to="/">home</router-link></li>
                <li @click="closeMenu"><router-link to="/contact">contact</router-link></li>
                <li @click="closeMenu"><router-link to="/chart">charts</router-link></li>
            </ul>
        </nav>
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
            isMobile: false,
            menuOpen: false,
        }
    },
    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        },
        checkMobile() {
            this.isMobile = window.innerWidth < 768;
            this.menuOpen = false;
        },
        closeMenu() {
            this.menuOpen = false;
        },
    },
    async mounted() {
        this.checkMobile();
        window.addEventListener('resize', this.checkMobile);

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
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.checkMobile);
    }

}
</script>

<style scoped>
header {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: max-content max-content;
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


.menu-button {
    display: none;
    background-color: darkorange;
    color: white;
    border: none;
    border-radius: .5em;
    font-size: 1rem;
}

@media (max-width: 767px) {
    header {
        grid-template-columns: max-content max-content;
        grid-template-areas:
            "logo menu"
            "nav nav";
        justify-content: space-between;

    }

    .logo {
        grid-area: logo;
    }

    .menu-button {
        display: block;
        grid-area: menu;
    }

    nav {
        grid-area: nav;
    }

    nav ul {
        flex-direction: column;
        gap: 0.5rem;
        padding: 1rem;
    }

    nav ul li a {
        display: block;
    }
}
</style>