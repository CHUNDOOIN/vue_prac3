<template>
    <div style="padding: 10px">
        <h4>νλ‘μ</h4>
        <input v-model="search" placeholder="π" />

        <div class="post-header" v-for="user in follower" :key="user">
            <div
                class="profile"
                :style="`background-image: url(${user.image})`"
            ></div>
            <span class="profile-name">{{ user.name }}</span>
        </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
    name: "myPage",
    data() {
        return {
            follower: [],
            followerOriginal: [],
            search: "",
        };
    },
    // setup() {
    //     let follower = ref([]);
    //     if (
    //         follower.filter((el) => {
    //             el.name.includes(this.search);
    //         })
    //     )
    //         // refμ λΉμ·ν¨
    //         // let test = reactive({ name: "kim" });

    //         return { follower };
    // },

    mounted() {
        axios
            .get("./follower.json")
            .then((a) => {
                this.followerOriginal = a.data.sort((a, b) =>
                    a.name > b.name ? 1 : -1
                );
                this.follower = [...this.followerOriginal];

                // console.log(" νλ‘μ", this.follower);
                // console.log("νλ‘μ μ΄λ¦μ μ λ ¬");
            })
            .catch((error) => console.log(error));
    },

    // updated(search) {
    //     this.follower.filter((el) => {
    //         el.name.includes(search);
    //     });
    // },

    watch: {
        search(a) {
            if (a === "") {
                this.follower = [...this.followerOriginal];
            }

            this.follower = this.followerOriginal.filter((el) =>
                el.name.toLowerCase().includes(a.toLowerCase())
            );
        },
    },
};
</script>
<style></style>
