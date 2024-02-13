<template>
    <main>

        <h1>Im the contact page</h1>

        <ContactFilter />
        <ContactList v-if="contacts" :contacts="filteredContacts" />
    </main>
</template>

<script >
import ContactFilter from '@/components/ContactFilter.vue'
import ContactList from '@/components/ContactList.vue'
import ContactPreview from '@/components/ContactPreview.vue'

import { contactService } from '@/services/contact.service'

export default {
    data() {
        return {
            contacts: null,
            filterBy: { txt: '' }
        }
    },
    methods: {
        filterContacts(filterBy) {
            this.filterBy = filterBy
        },
    },
    computed: {
        filteredContacts() {
            const regex = new RegExp(this.filterBy.txt, 'i')
            return this.contacts.filter(contact => regex.test(contact.name))
        }
    },
    async created() {
        this.contacts = await contactService.getContacts()
    },
    components: {
        ContactFilter,
        ContactList,
    }
}

</script>

<style scoped></style>