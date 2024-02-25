import { createStore } from 'vuex'

const options = {
    state() {
        return {
            count: 0,
        }
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
}
const store = createStore(options)

export default store
