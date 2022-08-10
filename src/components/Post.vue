<template>
    <div class="post">
        <div class="post-header">
            <div class="profile"></div>
            <span class="profile-name">{{ myData.name }}</span>
        </div>
        <div
            class="post-body"
            :class="myData.filter"
            :style="{ backgroundImage: `url(${myData.postImage})` }"
        ></div>
        <div class="post-content">
            <p @click="$store.commit('like', i)">
                <span v-if="$store.state.likes[i].liked === true"
                    >💛 likes {{ $store.state.likes[i].likes }}</span
                >
                <span v-if="$store.state.likes[i].liked === false"
                    >🖤 likes {{ $store.state.likes[i].likes }}</span
                >
            </p>
            <p>
                <strong>{{ myData.name }}</strong> {{ myData.content }}
            </p>
            <p class="date">{{ myData.date }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "post",
    props: {
        myData: Object,
        i: Number,
    },
    mounted() {
        console.log(this.i);
    },
};
</script>

<style>
.post {
    width: 100%;
}
.profile {
    background-image: url("https://placeimg.com/100/100/arch");
    width: 30px;
    height: 30px;
    background-size: 100%;
    border-radius: 50%;
    float: left;
}
.profile-name {
    display: block;
    float: left;
    padding-left: 10px;
    padding-top: 7px;
    font-size: 14px;
}
.post-header {
    height: 30px;
    padding: 10px;
}
.post-body {
    background-image: url("https://placeimg.com/640/480/animals");
    height: 450px;
    background-position: center;
    background-size: cover;
}
.post-content {
    padding-left: 15px;
    padding-right: 15px;
    font-size: 14px;
}
.date {
    font-size: 11px;
    color: grey;
    margin-top: -8px;
}
</style>
