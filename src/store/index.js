import { createStore } from 'vuex'

const options = {
    strict: true,
    state() {
        return {
            count: 0,
        }
    },
    mutations: {
        increment(state, { by }) {
            state.count += by
        }
    }
}
const store = createStore(options)

export default store
