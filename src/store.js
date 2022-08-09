import { createStore } from "vuex";
import data from "./assets/data.js";

const store = createStore({
    state() {
        return {
            name: "kim",
            age: "20",
            likes: data,
        };
    },
    mutations: {
        changeName(state) {
            state.name = "CHUN";
        },

        changeAge(state) {
            state.age = 36;
        },

        like(state, i) {
            if (state.likes[i].liked) {
                state.likes[i].liked = false;
                state.likes[i].likes--;
            } else {
                state.likes[i].liked = true;
                state.likes[i].likes++;
            }
        },
    },
});

export default store;
