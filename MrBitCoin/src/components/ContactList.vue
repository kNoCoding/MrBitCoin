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

<style scoped></style>