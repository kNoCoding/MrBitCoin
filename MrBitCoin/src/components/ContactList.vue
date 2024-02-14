<template>
    <section class="contact-list">
        <h2>Contact list:</h2>
        <ul>
            <li v-for="contact in contacts">
                <ContactPreview :contact="contact" />
            </li>
        </ul>
    </section>
</template>

<script>
import ContactPreview from './ContactPreview.vue'

export default {

    props: {
        contacts: {
            type: Array,
            required: true
        }
    },
    methods: {

    },
    components: {
        ContactPreview,
    }
}

</script>

<style scoped>
.contact-list {
    width: 100%;
    margin: auto;
}

.contact-list ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
    padding: 1rem;
    overflow-y: auto;
    list-style: none;
}

.contact-list li {
    background: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact-list li:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}
</style>