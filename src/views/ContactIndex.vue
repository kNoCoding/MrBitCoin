<script >
import ContactFilter from '@/components/ContactFilter.vue'
import ContactList from '@/components/ContactList.vue'

import { contactService } from '@/services/contact.service'

export default {
    data() {
        return {
            contacts: null,
            filterBy: { txt: '' }
        }
    },
    methods: {
        async removeContact(contactId) {
            const idx = this.contacts.findIndex(contact => contact._id === contactId)
            // this.contacts.splice(idx, 1) my try
            if (idx !== -1) {
                this.contacts.splice(idx, 1)
                await contactService.deleteContact(contactId)
            } else {
                console.error('Contact ID not found:', contactId);
            }
        },
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

<template>
    <main>

        <h1>Im the contact page</h1>

        <ContactFilter @filter="filterContacts" />
        <ContactList v-if="contacts" @remove="removeContact" :contacts="filteredContacts" />
    </main>
</template>

<style scoped>
main {
    overflow-y: auto;

}
</style>