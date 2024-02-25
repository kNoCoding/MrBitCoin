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
    },
    actions: {
        async incrementLater({ commit }, { by }) {
            setTimeout(() => commit({ type: 'increment', by }), 1500)
        }
    },
    getters: {
        count(state) { return state.count }
    }
}
const store = createStore(options)

export default store
