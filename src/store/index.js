import { contactService } from '@/services/contact.service'
import { createStore } from 'vuex'

const options = {
    strict: true,
    state() {
        return {
            count: 0,
            contacts: [],
        }
    },
    mutations: {
        increment(state, { by }) {
            state.count += by
        },
        setContacts(state, { contacts }) {
            state.contacts = contacts
        },
        removeContact(state, { contactId }) {
            const idx = state.contacts.findIndex(contact => contact._id === contactId)
            state.contacts.splice(idx, 1)
        },
    },
    actions: {
        async incrementLater({ commit }, { by }) {
            setTimeout(() => commit({ type: 'increment', by }), 1500)
        },
        async loadContacts({ commit }) {
            const contacts = await contactService.getContacts()
            commit({ type: 'setContacts', contacts })
        },
        async removeContact({ commit }, { contactId }) {
            await contactService.deleteContact(contactId)
            commit({ type: 'removeContact', contactId })

        },
    },
    getters: {
        count(state) { return state.count },
        contacts(state) { return state.contacts }
    }
}
const store = createStore(options)

export default store
