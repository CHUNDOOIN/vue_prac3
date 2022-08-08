<template>
    <div>
        <Post v-for="(myData, i) in myData" :key="i" :myData="myData" />
        <!-- 
        <Post :myData="myData[0]" />
        <Post :myData="myData[1]" />
        <Post :myData="myData[2]" /> -->
    </div>
</template>

<script>
import Post from "./Post.vue";

export default {
    name: "Container",
    props: {
        myData: Array,
    },
    components: { Post },
    // mounted() {
    //     console.log(this.myData);
    // },
};
</script>
<style></style>
