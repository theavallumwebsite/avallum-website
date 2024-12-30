<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import data from '../../../data.json'
import GaleIntroComponent from './GaleIntroComponent.vue';
import CassianAnimation from './CassianAnimation.vue';
import LucienAnimation from './LucienAnimation.vue';
import ZanderIntroComponent from './ZanderIntroComponent.vue';

const props = defineProps({
    memberName: {
        type: String,
        required: true
    }
})

const member = computed(() => {
    return data.channels[props.memberName as keyof typeof data.channels]
})


const font = ref(member.value.font)
const color = computed(() => {
    return (member.value.name === 'Cassian Floros' || member.value.name === 'Gale Galleon')
        ? member.value.extraColor
        : member.value.color;

});
const titleColor = ref(member.value.titleColor)
// const extraColor = ref(member.value.extraColor)

function changeHastag() {
    const liList = document.querySelectorAll('.hastags li')
    const regex = /#/g

    liList.forEach((liItem) => {
        const text = (liItem as HTMLElement).textContent || (liItem as HTMLElement).innerText;

        if (text) {
            const updatedText = text.replace(regex, (match) => {
                return `<span class="hashtag">${match}</span>`;
            });
            liItem.innerHTML = updatedText;
        }
    });
}


function galeAddons() {
    const emoji = document.querySelector('.emoji')
    const mascotDiv = document.querySelector('.mascot')
    const iconsDiv = document.querySelector('.icons')
    const listDiv = document.querySelector('.lists')

    if (emoji) {
        const wantedHeading = document.createElement('h3')
        wantedHeading.textContent = 'Wanted'
        wantedHeading.classList.add('wanted')
        emoji.appendChild(wantedHeading);
    }

    if (listDiv && iconsDiv) {
        listDiv.before(iconsDiv)
    }
    const dollarSpan = document.createElement('span')
    dollarSpan.textContent = '10$'
    dollarSpan.classList.add('dollar')

    if (mascotDiv) {
        mascotDiv.insertAdjacentElement('beforebegin', dollarSpan)
    }
}

function roscoChanges() {
    const intro = document.querySelector('.intro')
    const content = document.querySelector('.content')
    const name = document.querySelector('.name')
    const image = document.querySelector('.image')
    const description = document.querySelector('.description')
    const icons = document.querySelector('.icons')
    const mascot = document.querySelector('.mascot')


    const textDiv = document.createElement('div')
    textDiv.classList.add('newDiv')
    content?.insertBefore(textDiv, description)

    if (content && image) {
        content.insertBefore(image, textDiv)
    }
    if (intro && name) {
        intro?.appendChild(name)
    }

    if (description && icons && mascot) {
        textDiv.appendChild(description)
        textDiv.appendChild(icons)
        textDiv.appendChild(mascot)
    }

}


onMounted(() => {
    changeHastag()
    console.log(member.value.name)
    if (member.value.name === "Gale Galleon") {
        galeAddons()
    }
    if (member.value.name === "Rosco Graves") {
        roscoChanges()
    }
})
</script>

<template>
    <section>
        <ZanderIntroComponent class="background" v-if="member.name === 'Zander Netherbrand'"></ZanderIntroComponent>
        <div class="intro">
            <video src="../../assets/rosco_background.mp4" v-if="memberName === 'Rosco'" class="rosco-video" autoplay
                loop muted playsinline></video>
            <div class="content">
                <div class="name">
                    <p class="emoji">{{ member.emoji }}</p>
                    <h2>{{ member.name }}</h2>
                    <h3>{{ member.jpName }} </h3>
                </div>

                <div class="lists">
                    <ul class="tags-list">
                        <li v-for="(tag, index) in member.tags" :key="index">{{ tag }}</li>
                    </ul>

                    <ul class="hastags">
                        <li v-for="(hastag, index) in member.hastags" :key="index">{{ hastag }}</li>
                    </ul>

                </div>


                <p class="description">{{ member.lore }}</p>

                <div class="icons">
                    <a :href="member.Youtube"><i class="bi bi-youtube"></i></a>
                    <a :href="member.X"><i class="bi bi-twitter-x"></i></a>
                </div>

                <div class="mascot">
                    <p>This is the fan mascot, a <b>{{ member.fanName }}</b>!</p>
                    <img :src="member.mascot" alt="" />
                </div>

            </div>
            <div class=" image">
                <img :src="member.mainArtTransparent" alt="" v-if="memberName === 'Zander' || memberName === 'Rosco'"
                    class="model">
                <div v-else class="model-div">
                    <img :src="member.model" alt="" class="model">
                    <div class="model-shadow"></div>
                </div>

            </div>
        </div>
        <GaleIntroComponent class="background" v-if="member.name === 'Gale Galleon'"></GaleIntroComponent>
        <CassianAnimation class="background" v-if="member.name === 'Cassian Floros'"></CassianAnimation>
        <LucienAnimation class="background" v-if="member.name === 'Lucien Lunaris'"></LucienAnimation>


    </section>

</template>

<style scoped>
.background {
    position: absolute;
    top: 0;
    z-index: -1;
}

section {
    /* font-family: 'Cormorant Garamond', serif; */
    position: relative;
    z-index: 998;
}

h2::after,
h2::before {
    content: none;
}

h2 {
    font-family: v-bind(font);
    font-size: 3.2vw;
    margin: 0px;
    /* color: v-bind(titleColor); */
}

h3 {
    font-weight: 300;
    margin: 0px;
    color: v-bind(color);
    font-weight: bold;
    margin-top: -10px;
}

p {
    text-align: justify;
}

ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    padding: 0px;
}

b {
    color: v-bind(color);
}



.intro {
    display: flex;
    padding: 20px;
    padding-top: 11vh;
    box-sizing: border-box;
    height: 100vh;
}

.content {
    text-align: center;
    width: 55vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.name {
    text-align: center;
}

.name p {
    font-size: 4vw;
    margin: 0px;
    text-align: center;
}

.emoji {
    margin: 0px;
}

.tags-list {
    color: v-bind(color);
}


.icons a {
    color: v-bind(color);
    font-size: 20px;
}

.icons i {
    margin: 5px;
}

.mascot p {
    text-align: center;
}

.mascot img {
    width: 10vw;
    /* border: 12px double v-bind(color); */
}


.image {
    width: 45vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

.model-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.model {
    position: relative;
    z-index: 999;
    width: 80%;
}

.model-shadow {
    position: relative;
    bottom: 4vh;
    width: 60%;
    height: 50px;
    background: black;
    border-radius: 50%;
    z-index: 1;
    opacity: 0.5;
}


/* LUCI */

.lucien-section h2 {
    background: v-bind(titleColor);
    background-clip: text;
    -webkit-text-stroke: 1px v-bind(color);
}

.lucien-section .content {
    background: linear-gradient(rgba(0, 0, 0, 0.979), transparent);
    padding: 20px;
    border-radius: 3%;
}

.lucien-section .content .description {
    width: 40vw;
    margin: auto;
}

.lucien-section .tags-list {
    list-style-image: url('../../assets/lucien_li.svg');

}




/* zander */



.zander-section {
    z-index: 998;
    position: relative;
}

.zander-section h2 {
    padding-right: 6px;
}

.zander-section h3 {
    margin: 0px;
}

.zander-section .name {
    margin-bottom: 10px;
}

.zander-section {
    background: linear-gradient(#11001bcc, #190026), url("../../assets/zander_pc.png");
    background-size: cover;
    background-position: right;
    background-blend-mode: multiply;
}

.zander-section ul {
    /* justify-content: center; */
    gap: 10px;
    margin: 5px;
}

.zander-section .intro {
    flex-direction: column;
}

.zander-section .content {
    width: 60%;
}


.zander-section .content p {
    width: 70%;
    margin: 15px auto;
}

.zander-section .content .emoji {
    margin: auto;
}

.zander-section .tags-list {
    color: white;
    padding-bottom: 0.5vh;
}

.zander-section .hastags li {
    border: 1px solid v-bind(color);
    padding: 5px;
    border-radius: 4%;
    box-shadow: 0px 0px 4px #f541ff;
}

.zander-section .model {
    position: absolute;
    bottom: -10vh;
    right: 0;
    width: 70vw;
    max-width: 1000px;
    z-index: -2;
}


.zander-section .mascot p {
    width: auto;
    text-align: center;
    margin: 0;
}


/* Cass */


.cassian-section h2 {
    font-weight: bold;
    background: linear-gradient(#7a4d20, #dfa67d, #7a4d20);
    background-clip: text;
    -webkit-text-stroke: 0.5px #ffb700;
}

.cassian-section .intro {
    flex-direction: row-reverse;
    color: rgb(216, 216, 216);
}

.cassian-section .tags-list li {
    font-weight: bold;
    border: 1px solid #d89a5c;
    padding: 5px;
    border-radius: 5px;
    margin: 0px 5px;
}

.cassian-section .model {
    top: 2vh;
}


/* Gale */

.gale-section {
    color: black;
    font-family: 'Quicksand';
}

.gale-section .hastags {
    font-weight: bold;
}

.gale-section .intro {
    width: 85vw;
    height: 100vh;
    margin: auto;

}

.gale-section .content {
    justify-content: center;

}

.gale-section .icons {
    margin: 10px;
    color: #7a4d20;
}

.gale-section .description {
    width: 80%;
    margin: 0px auto;
}

.gale-section .image {
    width: 25vw;


}

.gale-section .mascot {
    position: absolute;
    align-self: flex-end;
    bottom: 55vh;
}

.gale-section .model-div {
    position: relative;
    top: 2vh;
}

.gale-section .model {
    position: relative;
    left: 1vw;
}

/* rosco */


.rosco-section {
    background: linear-gradient(#690031e0, #00042cb1), url('../../assets/rosco_transparent.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.rosco-section h2 {
    filter: drop-shadow(-5px 5px 0px darkblue);
    font-size: 5vw;
    color: v-bind(titleColor);
}

.rosco-section h3 {
    color: white;
}

.rosco-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.2;
    mix-blend-mode: luminosity;
}

.rosco-section .intro {
    flex-direction: column-reverse;
    padding: 0px;
    justify-content: center;
}

.rosco-section .content {
    display: flex;
    flex-direction: row;
    width: 100vw;
    justify-content: space-around;
    align-items: center;
    position: relative;
    z-index: 998;
}

.rosco-section .image {

    width: 30vw;
}

.rosco-section .name {
    width: 100%;
}

.rosco-section .emoji {
    margin-bottom: -5vh;
}


.rosco-section .lists ul {
    display: flex;
    flex-direction: column;
    font-family: 'Pixelify Sans';
    color: white;
}

.rosco-section .model {
    border-bottom: 10px solid v-bind(color);
    width: 100%;
}

.rosco-section .icons {
    filter: drop-shadow(-5px 5px 0px darkblue);
}



/* mobile */

@media (max-width: 768px) {

    h2 {
        font-size: 1.3rem;
        /* font-size: 100%; */
    }

    h3 {
        font-size: 0.8rem;
        font-size: 75%;
    }

    p,
    li {
        font-size: 80%;
    }

    .intro {
        flex-direction: column-reverse;
        /* height: 80vh; */
        overflow: hidden;

    }

    .content {
        width: 100vw;
    }

    .image {
        width: 85vw;
        height: 20vh;
        overflow: hidden;
        border-bottom: 3px solid v-bind(color);
    }

    .model-shadow {
        display: none;
    }

    .image img {
        position: relative;
        top: 23vh;
    }


    h3 {
        margin: auto;
    }

    /* .content {
        width: 85vw;
    } */

    .mascot {
        position: relative;
        bottom: 0px;
        align-self: auto
    }

    .mascot img {
        width: 25vw;
    }

    .model-div {
        align-items: normal;
    }

    .hastags {


        flex-wrap: wrap;
    }


    .gale-section .intro {
        padding: 0px;
        width: 94vw;
        height: 95vh;
        margin: auto;
    }

    .gale-section .content {
        width: 94vw;
        height: 60vh;
        justify-content: space-evenly;
    }

    .gale-section .image {
        width: 94vw;
        height: 20vh;
    }

    .gale-section ul {
        flex-wrap: wrap;
    }

    .gale-section .icons {
        /* float: right;
        width: 50vw; */
        margin: 0px;
        font-size: 13px;
    }

    .gale-section .name h2 {
        font-size: 1.55rem;
    }

    .gale-section .name h3 {
        font-size: 1rem;
    }


    .gale-section .description {
        width: 92%;
    }


    .gale-section .mascot {
        position: relative;
        bottom: 0px;
        align-self: auto;
    }

    .gale-section .mascot img {
        width: 20vw;
    }

    .gale-section .mascot p {
        margin: 0px;
    }

    .gale-section .model {
        margin: auto;

    }

    .cassian-section .intro {
        flex-direction: column-reverse;
        height: 100%;
        justify-content: space-between;
    }

    .cassian-section .content {
        width: 90vw;
    }



    .cassian-section .model-div {
        align-items: normal;
        width: 100vw;
    }

    .cassian-section .model {
        top: 27vh;
        left: 5vw;
        margin: auto;
    }

    .cassian-section .image {
        width: 90vw;
    }

    .lucien-section .intro {
        padding: 0px;
        padding-top: 10vh;
    }


    .lucien-section .lists {
        margin: 1vh;
    }

    .lucien-section .lists ul {
        flex-wrap: wrap;
    }

    .lucien-section .hastags {
        margin: 0px;
    }

    .lucien-section .content {
        height: 80vh;
        width: 90vw;
        margin: auto;
        padding: 0px;
        overflow: hidden;
        justify-content: space-around;
    }

    .lucien-section .content .description {
        width: 90%;
        margin: 0px auto;
    }

    .lucien-section .content .tags-list {
        margin: 0px
    }

    .lucien-section .hastags {
        margin-top: 1vh;
    }

    .lucien-section .image {
        width: 100%;
        border: none;
        height: 20vh;
    }

    .lucien-section .image img {
        top: 26vh;
        width: 100%;
    }

    .zander-section {
        background-position: center;
    }

    .zander-section .intro {
        flex-direction: column-reverse;
        padding: 0px;
        padding-top: 0vh;
    }

    .zander-section .content {
        width: 100vw;
        margin: auto
    }

    .zander-section .image {
        width: 100vw;
        height: auto;
    }

    .zander-section .image img {
        position: relative;
        bottom: 0;
        width: 100%;
        top: 5vh;
    }

    .zander-section .mascot {
        width: 100%;
        margin: auto;
    }



    .rosco-section .intro {
        font-size: 0.9rem;
    }


    .rosco-section .content {
        flex-direction: column-reverse;
        width: 100vw;
        height: 80vh;
        justify-content: space-around;
    }

    .rosco-section .lists {
        order: 1;
    }

    .rosco-section .lists ul {
        flex-direction: row;
    }

    .rosco-section .image {
        width: 100%;
        order: 1;
    }

    .rosco-section .image img {
        top: 13vh;
    }

    .rosco-section .mascot p {
        margin: 0px;
    }

    .rosco-section .emoji {
        margin: auto;
    }

}
</style>

<style>
.hashtag {
    color: v-bind(color);
}

.wanted {
    font-family: v-bind(font);
    font-size: 2rem;
    margin: 0px;
    color: transparent;
    -webkit-text-stroke: 0.3px v-bind(color);
}

.dollar {
    font-family: v-bind(font);
    color: v-bind(color);
    font-size: 2rem;
    position: relative;
    padding: 15px;
}

.newDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30vw;
}

@media (max-width: 768px) {

    .dollar {
        padding: 0px;
    }

    .wanted {
        font-size: 1.8rem;
    }

    .newDiv {
        width: 90%;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        gap: 1vh;
    }

    .newDiv .description {
        margin: 0px;

    }
}
</style>