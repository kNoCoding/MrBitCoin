<template>
    <h2>{{ contact.name }}</h2>
    <small>{{ contact._id }}</small>
    <p>{{ contact.phone }}</p>
    <p>{{ contact.email }}</p>
</template>

<script>
export default {
    props: {
        contact: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style scoped></style>