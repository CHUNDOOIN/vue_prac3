import axios from "axios";
import { createStore } from "vuex";
import data from "./assets/data.js";

const store = createStore({
    state() {
        return {
            name: "kim",
            age: "20",
            likes: data,
            more: {},
        };
    },
    mutations: {
        setMore(state) {
            state.more = data[0];
        },
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
    actions: {
        async getData(context) {
            await axios
                .get("https://codingapple1.github.io/vue/more0.json")
                .then((result) => {
                    console.log(result.data);
                    context.commit("setMore", result.data);
                });
        },
    },
});

export default store;
