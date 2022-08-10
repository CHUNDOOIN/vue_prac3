<template>
    <div style="padding: 10px">
        <h4>팔로워</h4>
        <input v-model="search" placeholder="🔍" />

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
    //         // ref와 비슷함
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

                // console.log(" 팔로워", this.follower);
                // console.log("팔로워 이름순 정렬");
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
