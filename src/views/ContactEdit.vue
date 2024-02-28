<template>
    <main>
        <h1>Add/Edit contact</h1>

        <form v-if="contact" @submit.prevent="onSaveContact" class="contact-edit">
            <input type="text" v-model="contact.name" placeholder="Contact name">
            <input type="tel" v-model="contact.phone" placeholder="Contact phone number">
            <input type="email" v-model="contact.email" placeholder="Contact email">

            <div class="actions">
                <button>Save</button>
                <RouterLink to="/contact"><button>Cancel</button></RouterLink>
            </div>
        </form>
    </main>
</template>

<script>
import { contactService } from '@/services/contact.service'

export default {
    data() {
        return {
            contact: null,
        }
    },
    methods: {
        async onSaveContact() {
            try {
                await this.$store.dispatch({ type: 'saveContact', contactToSave: this.contact })
                this.$router.push('/contact')
            } catch (err) {
                console.log(err)
            }
        }
    },
    async created() {
        const { contactId } = this.$route.params

        if (contactId) {
            this.contact = await contactService.getContactById(contactId)
        } else {
            this.contact = contactService.getEmptyContact()
        }
    },
    beforeUpdate() {
        console.log('this.contact', this.contact)
    }
}
</script>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    max-width: 800px;
    margin: 0 auto;
}

h1 {
    margin-bottom: 1rem;
}

.contact-edit {
    background: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.contact-edit input[type="text"],
.contact-edit input[type="tel"],
.contact-edit input[type="email"] {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
}

.actions {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
}

.actions button {
    flex-grow: 1;
    padding: 0.5rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: darkorange;
    /* Or any color that matches your branding */
    color: #fff;
}

.actions button:hover {
    opacity: 0.9;
}
</style>