<template>
    <header>
        <p class="logo">MrBitCoin</p>

        <nav>
            <ul>
                <li>home</li>
                <li>about</li>
            </ul>
        </nav>

        <p>logged in user name</p>

        <p>bitcoin exchange rate</p>
    </header>
</template>

<script></script>

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

li {
    cursor: pointer;
    font-weight: 500;
}
</style>