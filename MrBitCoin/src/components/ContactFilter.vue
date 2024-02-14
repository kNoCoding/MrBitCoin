<template>
    <section class="contact-filter">
        <p>Filter</p>
        <input type="text" @input="onFilter" v-model="filterBy.txt">
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
    margin-bottom: 1rem;
}
</style>