<template>
    <div class="contact-preview">
        <h2>{{ contact.name }}</h2>
        <small>{{ contact._id }}</small>
        <p>{{ contact.phone }}</p>
        <p>{{ contact.email }}</p>
    </div>
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

<style scoped>
.contact-preview {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
}

.contact-preview * {
    margin: 0;
    padding: 0.25rem 0;
    /* Add some vertical space between elements */
}

.contact-preview h2 {
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
    padding-bottom: 0.5rem;
    /* Extra space below the title */
}

.contact-preview small {
    color: #666;
    padding-bottom: 0.5rem;
    /* Extra space below the ID */
}

.contact-preview p {
    line-height: 1.4;
}
</style>