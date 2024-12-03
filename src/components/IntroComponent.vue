<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import data from '../../data.json'

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
        <div class="intro">
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
                    <i class="bi bi-youtube"></i>
                    <i class="bi bi-twitter-x"></i>
                </div>

                <div class="mascot">
                    <p>This is a {{ member.fanName }}!</p>
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
    </section>
</template>

<style scoped>
section {
    font-family: 'Cormorant Garamond', serif;
    position: relative;
    z-index: 999;

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

.tags-list {
    color: v-bind(color);
}


.icons {
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
    width: 150px;
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
    background: linear-gradient(rgba(0, 0, 0, 0.844), transparent);
    padding: 20px;
    border-radius: 3%;
}


/* ROSCO */

.rosco-section .model {
    width: 60%;

}

/* zander */

.zander-section {
    z-index: 998;
    position: relative;
    margin-top: -75px;
}

.zander-section h2 {
    background: linear-gradient(#900098, #f541ff, #9800a0);
    background-clip: text;
    filter: drop-shadow(0px 0px 0.5rem #c831d0);
    text-shadow:
        -1px -1px 2px rgba(213, 3, 255, 0.5),
        1px 1px 2px rgba(57, 0, 52, 0.6);
    padding-right: 6px;
}

.zander-section h3 {
    margin: 0px;
}

.zander-section .name {
    margin-bottom: 10px;
}

.zander-section {
    background: linear-gradient(#11001bcc, #190026), url("../assets/zander_pc.png");
    background-size: cover;
    background-position: right;
    background-blend-mode: multiply;
}

.zander-section ul {
    justify-content: center;
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


.zander-section .tags-list {
    color: white;
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
    width: 75vw;
}

/* .zander-section .mascot {
    float: left;
} */

.zander-section .mascot p {
    width: 100%;
    text-align: center;
    margin: 0;
}

/* Cass */

.cassian-section h2 {
    font-weight: bold;
    background: linear-gradient(#7a4d20, #dfa67d, #7a4d20);
    background-clip: text;
}

.cassian-section .intro {
    flex-direction: row-reverse;
    color: black;
}

.cassian-section .tags-list li {
    font-weight: bold;
    border: 1px solid #ca7726;
    padding: 5px;
    border-radius: 5px;
    margin: 0px 5px;
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
    margin: auto;
    margin-top: 3vh;
}

.gale-section .content {
    justify-content: center;
}

.gale-section .icons {
    margin: 10px;
}

.gale-section .description {
    width: 80%;
    margin: 0px auto;
}

.gale-section .image {
    width: 27vw;
}

.gale-section .mascot {
    position: absolute;
    align-self: flex-end;
    bottom: 70vh;
}

.gale-section .model {
    position: relative;
    left: 1vw;
}

/* rosco */

.rosco-section {
    background: linear-gradient(#690031e0, #00042cb1), url('../assets/rosco_transparent.png'), url('../assets/check.png');
    /* background-blend-mode: lighten; */

}

.rosco-section .intro {
    flex-direction: column-reverse;

}

.rosco-section .content {
    display: flex;
    flex-direction: row;
    width: 100vw;
    justify-content: center;
}

.rosco-section .name {
    flex-grow: 4;
    width: 100%;
}

.rosco-section .lists ul {
    display: flex;
    flex-direction: column;
}

/* mobile */

@media (max-width: 768px) {

    .intro {
        flex-direction: column-reverse;
        height: 80vh;
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

    .content {
        width: 85vw;
    }

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


    .gale-section .content {
        width: 85vw;
    }

    .gale-section .image {
        width: 85vw;
    }


    .gale-section .mascot {
        position: relative;
        bottom: 0px;
        align-self: auto
    }


    .cassian-section .intro {
        flex-direction: column-reverse;

    }

    .cassian-section .model-div {
        align-items: normal;
    }

    .lucien-section .content {
        height: 50vh;
        width: 80vw;
    }

    .lucien-section .image {
        height: auto;
        border: none;
    }

    .lucien-section .image img {
        top: 18vh;
    }



}
</style>

<style>
.hashtag {
    color: v-bind(color);
}

.wanted {
    font-family: v-bind(font);
    font-size: 3vw;
    margin: 0px;
    color: transparent;
    -webkit-text-stroke: 0.3px v-bind(color);
}

.dollar {
    font-family: v-bind(font);
    color: v-bind(color);
    font-size: 3.5vw;
    position: relative;
    /* top: 5vh; */
    padding: 15px
}

.newDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20vw;
}

@media (max-width: 768px) {

    .dollar {
        padding: 0px
    }
}
</style>