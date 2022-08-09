<template>
    <div
        @click="filterSend"
        :class="`${filters} filter-item`"
        :style="`background-image : url(${imgUrl})`"
    >
        <slot></slot>
        <!-- <button >버튼</button> -->
    </div>
</template>
<script>
export default {
    name: "filterBox",

    props: {
        imgUrl: String,
        filters: Array,
    },

    methods: {
        filterSend() {
            this.emitter.emit("select", this.filters);
        },
    },
    mounted() {},
};
</script>
<style>
.filter-item {
    width: 100px;
    height: 100px;
    margin: 10px 10px 10px auto;
    padding: 8px;
    display: inline-block;
    color: white;
    background-size: cover;
    background-position: center;
}
</style>
