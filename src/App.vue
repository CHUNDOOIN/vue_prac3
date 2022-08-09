<template>
    <div class="header">
        <ul class="header-button-left">
            <li v-if="nowPage == 1" @click="nowPage--">Cancel</li>
            <li v-if="nowPage == 2" @click="nowPage--">Cancel</li>
        </ul>
        <ul class="header-button-right">
            <!-- <li @click="nowPage++">Next</li> -->
            <li v-if="nowPage == 1" @click="nowPage++">Next</li>
            <li v-if="nowPage == 2" @click="write">쓰기</li>
        </ul>
        <img src="./assets/logo.png" class="logo" />
    </div>

    <!-- vuex 연습
    <h4>안녕 {{ $store.state.name }}</h4>
    <button @click="$store.commit('changeName')">버튼</button>

    <p>내 나이는? {{ $store.state.age }}</p>
    <button @click="$store.commit('changeAge')">구라 ㄴㄴ 실제 나이는?</button> -->

    <Container
        @write="inputValue = $event"
        :myData="myData"
        :nowPage="nowPage"
        :imgUrl="imgUrl"
        :choiceFilter="choiceFilter"
    />
    <div class="btn-wrap">
        <button v-if="nowPage == 0" class="more-btn" @click="more">
            더보기
        </button>
    </div>

    <!-- <div class="sample-box">임시 박스</div> -->

    <div class="footer">
        <ul class="footer-button-plus">
            <input @change="upload" type="file" id="file" class="inputfile" />
            <label for="file" class="input-plus">+</label>
        </ul>
    </div>

    <!-- 탭에 따라 내용이 바뀌는 부분 구현 -->
    <!-- <div v-if="tab == 0">내용0</div>
    <div v-if="tab == 1">내용1</div>
    <div v-if="tab == 2">내용2</div>

    <button @click="tab = 0">버튼0</button>
    <button @click="tab = 1">버튼1</button>
    <button @click="tab = 2">버튼2</button>

    <div style="margin-top: 500px"></div> -->
</template>

<script>
import Container from "./components/Container.vue";
import data from "./assets/data.js";
import axios from "axios";

export default {
    name: "App",
    data() {
        return {
            btnCount: 0,
            myData: data,
            nowPage: 0,
            imgUrl: "",
            inputValue: "",
            choiceFilter: "",
        };
    },
    components: { Container },
    // mounted() {
    //     console.log(this.myData);
    // },
    methods: {
        async more() {
            this.btnCount++;
            console.log("더보기를 누르셨습니다.");

            if (this.btnCount === 1) {
                await axios
                    .get("https://codingapple1.github.io/vue/more0.json")
                    .then((result) => {
                        this.myData.push(result.data);
                    })
                    .catch((error) => console.log(error));
            }
            if (this.btnCount === 2) {
                await axios
                    .get("https://codingapple1.github.io/vue/more1.json")
                    .then((result) => {
                        this.myData.push(result.data);
                    })
                    .catch((error) => console.log(error));
            }
            if (this.btnCount > 2) {
                alert("게시글이 더이상 없는데요?");
            }
        },
        write() {
            var myPost = {
                name: "Dooin",
                userImage: "https://placeimg.com/100/100/arch",
                postImage: this.imgUrl,
                likes: 99,
                date: "May 15",
                liked: false,
                content: this.inputValue,
                filter: this.choiceFilter,
            };
            this.myData.unshift(myPost);
            this.nowPage = 0;
        },
        upload(e) {
            const imgFile = e.target.files;
            console.log(imgFile[0].type);
            this.imgUrl = URL.createObjectURL(imgFile[0]);
            console.log("이미지 URL", this.imgUrl);
            this.nowPage = 1;
        },
    },

    mounted() {
        this.emitter.on("select", (filter) => {
            this.choiceFilter = filter;
        });
    },
};
</script>

<style>
body {
    margin: 0;
}
ul {
    padding: 5px;
    list-style-type: none;
}
.logo {
    width: 22px;
    margin: auto;
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 13px;
}
.header {
    width: 100%;
    height: 40px;
    background-color: white;
    padding-bottom: 8px;
    position: sticky;
    top: 0;
}
.header-button-left {
    color: skyblue;
    float: left;
    width: 50px;
    padding-left: 20px;
    cursor: pointer;
    margin-top: 10px;
}
.header-button-right {
    color: skyblue;
    float: right;
    width: 50px;
    cursor: pointer;
    margin-top: 10px;
}
.footer {
    width: 100%;
    position: sticky;
    bottom: 0;
    padding-bottom: 10px;
    background-color: white;
}
.footer-button-plus {
    width: 80px;
    margin: auto;
    text-align: center;
    cursor: pointer;
    font-size: 24px;
    padding-top: 12px;
}
.sample-box {
    width: 100%;
    height: 600px;
    background-color: bisque;
}
.inputfile {
    display: none;
}
.input-plus {
    cursor: pointer;
}

.btn-wrap {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.more-btn {
    border-radius: 3px;
    border: none;

    background-color: rgb(191, 191, 191);
    cursor: pointer;
}

.more-btn:hover {
    background-color: black;
    color: white;
}

#app {
    box-sizing: border-box;
    font-family: "consolas";
    margin-top: 60px;
    width: 100%;
    max-width: 460px;
    margin: auto;
    position: relative;
    border-right: 1px solid #eee;
    border-left: 1px solid #eee;
}
</style>
