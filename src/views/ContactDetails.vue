<template>
    <section v-if="contact" class="contact-details">
        <RouterLink to="/contact"><button>Back</button></RouterLink>
        <div class="contact-card">
            <img :src="`https://robohash.org/${contact.name}`" :alt="`image of ${contact.name}`"
                :title="`image of ${contact.name}`">
            <h3>{{ contact.name }}</h3>
            <p>{{ contact.phone }}</p>
            <p>{{ contact.email }}</p>
            <small>{{ contact._id }}</small>
        </div>
    </section>
</template>

<script>
import { contactService } from '@/services/contact.service.js'
export default {
    data() {
        return {
            contact: null,
        }
    },
    async created() {
        const { contactId } = this.$route.params
        this.contact = await contactService.getContactById(contactId)
    }
}
</script>


<style scoped>
.contact-details {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.contact-card {
    width: 100%;
    max-width: 350px;
    background: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    text-align: center;
    margin-top: 1rem;
}

image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 1rem;
}

h3 {
    margin-bottom: 0.5rem;
}

p {
    margin-bottom: 0.25rem;
}

small {
    display: block;
    margin-top: 1rem;
    color: #666;
    font-size: 0.8rem;
}
</style>