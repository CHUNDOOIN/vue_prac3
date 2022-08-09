<template>
    <div>
        <div v-if="nowPage == 0">
            <Post
                v-for="(myData, i) in myData"
                :key="i"
                :myData="myData"
                :i="i"
            />
        </div>
        <!-- 
        <Post :myData="myData[0]" />
        <Post :myData="myData[1]" />
        <Post :myData="myData[2]" /> -->

        <!-- 필터선택페이지 -->
        <div v-if="nowPage == 1">
            <div
                :class="choiceFilter"
                class="upload-image"
                :style="`background-image: url(${imgUrl})`"
            ></div>
            <div class="filters">
                <FilterBox
                    :imgUrl="imgUrl"
                    v-for="(filterData, i) in filters"
                    :key="i"
                    :filters="filters[i]"
                    >{{ filterData }}</FilterBox
                >

                <!-- <div class="filter-1"></div>
                <div class="filter-1"></div>
                <div class="filter-1"></div>
                <div class="filter-1"></div>
                <div class="filter-1"></div> -->
            </div>
        </div>

        <!-- 글작성페이지 -->
        <div v-if="nowPage == 2">
            <div
                :class="choiceFilter"
                class="upload-image"
                :style="`background-image: url(${imgUrl})`"
            ></div>
            <div class="write">
                <textarea
                    @input="$emit('write', $event.target.value)"
                    class="write-box"
                >
write!</textarea
                >
            </div>
        </div>
    </div>
</template>

<script>
import Post from "./Post.vue";
import FilterBox from "./FilterBox.vue";

export default {
    name: "Container",
    data() {
        return {
            filters: [
                "aden",
                "_1977",
                "brannan",
                "brooklyn",
                "clarendon",
                "earlybird",
                "gingham",
                "hudson",
                "inkwell",
                "kelvin",
                "lark",
                "lofi",
                "maven",
                "mayfair",
                "moon",
                "nashville",
                "perpetua",
                "reyes",
                "rise",
                "slumber",
                "stinson",
                "toaster",
                "valencia",
                "walden",
                "willow",
                "xpro2",
            ],
        };
    },
    props: {
        myData: Array,
        nowPage: Number,
        imgUrl: String,
        choiceFilter: String,
    },
    components: { Post, FilterBox },
    updated() {
        console.log("컨테이너", this.imgUrl);
    },
    methods: {},
};
</script>
<style>
.upload-image {
    width: 100%;
    height: 450px;
    background: cornflowerblue;
    background-size: cover;
}
.filters {
    overflow-x: scroll;
    white-space: nowrap;
}
.filter-1 {
    width: 100px;
    height: 100px;
    background-color: cornflowerblue;
    margin: 10px 10px 10px auto;
    padding: 8px;
    display: inline-block;
    color: white;
    background-size: cover;
}
.filters::-webkit-scrollbar {
    height: 5px;
}
.filters::-webkit-scrollbar-track {
    background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
    background: #555;
}
.write-box {
    border: none;
    width: 90%;
    height: 100px;
    padding: 15px;
    margin: auto;
    display: block;
    outline: none;
}
</style>
