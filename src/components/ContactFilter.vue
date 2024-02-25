<template>
    <section class="contact-filter">
        <input type="text" @input="onFilter" v-model="filterBy.txt" placeholder="Filter contacts">
    </section>
</template>

<script>
export default {
    data() {
        return {
            filterBy: { txt: '' }
        }
    },
    methods: {
        onFilter() {
            this.$emit('filter', this.filterBy)
        }
    }
}
</script>

<style scoped>
.contact-filter {
    width: 100%;
    margin: 1rem 0;
}

input {
    padding: 6px 15px;
    border-radius: 8px;
    border-width: 0;
    background-color: #f2f4f6;
}

input:focus {
    outline: solid 1px;
    background-color: #e0e2e5;
    color: black;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
}
</style>