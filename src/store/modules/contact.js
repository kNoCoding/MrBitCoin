import { contactService } from '@/services/contact.service'
export default {
    state() {
        return {
            contacts: [],
        }
    },
    mutations: {
        setContacts(state, { contacts }) {
            state.contacts = contacts
        },
        removeContact(state, { contactId }) {
            const idx = state.contacts.findIndex(contact => contact._id === contactId)
            state.contacts.splice(idx, 1)
        },
        addContact(state, { contact }) {
            state.contacts.push(contact)
        },
        updateContact(state, { contact }) {
            const idx = state.contacts.findIndex(c => c._id === contact._id)
            state.contacts.splice(idx, 1, contact)
        }
    },
    actions: {
        async loadContacts({ commit }) {
            try {
                const contacts = await contactService.getContacts()
                commit({ type: 'setContacts', contacts })
            } catch (err) {
                console.log(err)
                throw err
            }
        },
        async removeContact({ commit }, { contactId }) {
            try {
                await contactService.deleteContact(contactId)
                commit({ type: 'removeContact', contactId })
            } catch (err) {
                console.log(err)
                throw err
            }
        },
        async saveContact({ commit }, { contactToSave }) {
            const contact = await contactService.saveContact(contactToSave)
            if (contactToSave._id) {
                commit({ type: 'updateContact', contact })
            } else {
                commit({ type: 'addContact', contact })
            }

        },
    },
    getters: {
        contacts(state) { return state.contacts }
    }
}