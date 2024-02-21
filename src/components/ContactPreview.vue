<template>
    <div class="contact-preview">
        <h2>{{ contact.name }}</h2>
        <small>{{ contact._id }}</small>
        <p>{{ contact.phone }}</p>
        <p>{{ contact.email }}</p>
        <div class="contact-buttons">
            <RouterLink :to="`/contact/${contact._id}`"><button>Details</button></RouterLink>
            <button @click="removeContact">Detele</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        contact: {
            type: Object,
            required: true,
        }
    },
    methods: {
        removeContact() {
            this.$emit('remove', this.contact._id)
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

.contact-preview h2 {
    font-weight: bold;
    color: #333;
    padding-bottom: 8px;
}

.contact-preview small {
    color: #666;
    padding-bottom: 8px;
}

.contact-preview p {
    line-height: 1.4;
    padding-bottom: 8px;
}

.contact-buttons {
    display: flex;
    /* flex-flow: column; */
    justify-content: start;
    gap: 8px;
    padding: 12px 0;
}
</style>