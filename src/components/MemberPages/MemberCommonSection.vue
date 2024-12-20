<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import data from '../../../data.json'


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
    return member.value.name === 'Cassian Floros' ? member.value.extraColor : member.value.color;
});
const titleColor = ref(member.value.titleColor)
const extraColor = ref(member.value.extraColor)


onMounted(() => {
    const bg = document.querySelector('.bg') as HTMLElement
    const gradient = member.value.gradient
    if (bg) {
        bg.style.background = `linear-gradient(to bottom, ${gradient[0]}, ${gradient[1]})`;
    }
}

)

</script>



<template>
    <section id="additional-section">
        <div class="grid-container">
            <div class="bg"> </div>
            <div class="left fact fact-a">
                <svg width="79" height="87" viewBox="0 0 79 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.4927 60.5837C19.7521 56.2644 34.9999 33 76.5825 20.5215" stroke="#146665"
                        stroke-width="3" stroke-linecap="round" />
                    <path
                        d="M21.7216 63.0421C14.9288 72.0436 10.5256 78.0184 9.9048 71C9.38135 65.0823 9 60.5 9.90479 54.5968"
                        stroke="#146665" stroke-width="3" stroke-linecap="round" />
                </svg>
                <p>{{ member.facts[0] }}</p>
            </div>
            <div class="left polaroid polaroid-a-b">
                <img :src="member.polaroids[0]" alt="" class="polaroid polaroid-a">
                <p class="emoji">{{ member.emoji }}</p>
                <img :src="member.polaroids[1]" alt="" class="polaroid polaroid-b">
            </div>
            <div class="left fact fact-b">
                <svg width="79" height="87" viewBox="0 0 79 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.4927 60.5837C19.7521 56.2644 34.9999 33 76.5825 20.5215" stroke="#146665"
                        stroke-width="3" stroke-linecap="round" />
                    <path
                        d="M21.7216 63.0421C14.9288 72.0436 10.5256 78.0184 9.9048 71C9.38135 65.0823 9 60.5 9.90479 54.5968"
                        stroke="#146665" stroke-width="3" stroke-linecap="round" />
                </svg>
                <p>{{ member.facts[1] }}</p>
            </div>
            <div class="left polaroid polaroid-c">
                <img :src="member.polaroids[3]" alt="" class="polaroid polaroid-d">
            </div>
            <div class="left image">
                <img :src="member.model" alt="">
            </div>
            <div class="fact right fact-c">
                <svg width="79" height="87" viewBox="0 0 79 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.4927 60.5837C19.7521 56.2644 34.9999 33 76.5825 20.5215" stroke="#146665"
                        stroke-width="3" stroke-linecap="round" />
                    <path
                        d="M21.7216 63.0421C14.9288 72.0436 10.5256 78.0184 9.9048 71C9.38135 65.0823 9 60.5 9.90479 54.5968"
                        stroke="#146665" stroke-width="3" stroke-linecap="round" />
                </svg>
                <p>{{ member.facts[2] }}</p>
            </div>
            <div class="polaroid polaroid-d">
                <img :src="member.polaroids[4]" alt="" class="polaroid polaroid-d">
            </div>
            <div class="content">
                <div class="title">
                    <h3>Also known as</h3>
                    <h2>{{ member.alternativeNames }}</h2>
                </div>
                <p>{{ member.personality }}</p>
                <img src="" alt="">
            </div>
            <div class="fact right fact-d">
                <svg width="79" height="87" viewBox="0 0 79 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.4927 60.5837C19.7521 56.2644 34.9999 33 76.5825 20.5215" stroke="#146665"
                        stroke-width="3" stroke-linecap="round" />
                    <path
                        d="M21.7216 63.0421C14.9288 72.0436 10.5256 78.0184 9.9048 71C9.38135 65.0823 9 60.5 9.90479 54.5968"
                        stroke="#146665" stroke-width="3" stroke-linecap="round" />
                </svg>
                <p>{{ member.facts[3] }}</p>
            </div>
            <div class="polaroid polaroid-e">
                <img :src="member.polaroids[2]" alt="" class="polaroid polaroid-d">
            </div>


        </div>


    </section>
</template>

<style scoped>
section {
    overflow: hidden;
    display: flex;
    justify-content: center;
    background: linear-gradient(rgba(255, 255, 255, 0.8), rgba(119, 119, 119, 0.8)), url("../../assets/grid-pattern.jpg");
    background-size: 300px;
}

h2::after,
h2::before {
    content: none;
}


h2 {
    font-family: v-bind(font);
    background: v-bind(titleColor);
    background-clip: text;
    /* font-size: 40px; */
    margin: 0px;
}

h3 {
    font-family: 'Cormorant Garamond';
    color: v-bind(color);
    margin: 0px;
}


.grid-container {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;

}

.grid-container>div {
    align-self: center;
}

.left {
    position: relative;
    z-index: 999;
    flex-direction: row-reverse;
}

.left svg {
    transform: scaleX(-1);

}

.left svg path {
    stroke: white;
}

.right {
    color: v-bind(extraColor);
}

.polaroid img {
    width: 50%;
    max-width: 150px;
    border: 1em solid lightgray;
    border-bottom: 3em solid lightgray;
    filter: drop-shadow(0 3px 0.2rem rgb(50, 50, 50));
    margin: 0px;
}

.fact {
    display: flex;
    align-items: flex-start;
    font-family: 'Covered by your grace';
    font-size: 1.2vw;
}

.fact-d,
.fact-b {
    align-items: flex-end;
}


.fact svg {
    position: relative;
    width: 30%;
    top: 10px;
}

.fact-d svg,
.fact-b svg {
    top: 0px;
}


.fact-a {
    grid-area: 1 / 1 / 2 / 3;
}

.polaroid-a-b {
    grid-area: 2 / 1 / 4 / 3;
    padding-left: 10%;
    /* margin: 5%; */
}

.polaroid-a {
    position: absolute;
    left: 30%;
    bottom: 120px;
    transform: rotate(10deg)
}

.polaroid-b {
    transform: rotate(-10deg);
}


.emoji {
    position: relative;
    font-size: 80px;
    /* top: -420px; */
    margin: 0px;
}

.fact-b {
    grid-area: 4 / 1 / 5 / 3;
    text-align: right
}

.fact-b svg {
    transform: rotate(180deg);
}

.polaroid-c {
    grid-area: 5 / 1 / 7 / 3;

}

.polaroid-c img {
    transform: rotate(10deg);
    position: relative;
    left: 15%;
    max-width: 200px;
}

.grid-container .polaroid-c {
    justify-self: end;
}


.image {
    grid-area: 1 / 3 / 7 / 5;

}

.image img {
    /* width: 120%; */
    width: 100%;
    max-width: 450px;
    position: relative;
    /* left: -10%; */
}

.fact-c {
    grid-area: 1 / 5 / 3 / 7;
}

.polaroid-d {
    grid-area: 1 / 7 / 3 / 9;
}

.polaroid-d img {
    transform: rotate(-10deg);
}

.content {
    grid-area: 3 / 5 / 5 / 9;
    text-align: center;
    padding: 5px;
    color: black;
}

.content p {
    /* font-size: 90%; */
    text-align: justify;
    width: 80%;
    margin: auto;
}

.fact-d {
    grid-area: 5 / 5 / 7 / 7;
}

.fact-d svg {
    transform: scaleY(-1);
}

.polaroid-e {
    grid-area: 5 / 7 / 7 / 9;

}

.polaroid-e img {
    transform: rotate(10deg);
    position: relative;
    left: 30%;
}

.grid-container .bg {
    position: relative;
    z-index: 998;
    width: 100%;
    height: 100vh;
    grid-area: 1 / 1 / 7 / 4;
    clip-path: polygon(0 0, 100% 0%, 80% 100%, 0% 100%);
    align-self: stretch;
}

/* extra css */

.cassian-section h2 {
    font-weight: bold;
}

.cassian-section h3 {
    color: v-bind(extraColor);
}

.cassian-section .image img {
    width: 100%;
}

.lucien-section h2 {
    -webkit-text-stroke: 1px #BB0F28;
}

.lucien-section .right svg path {
    stroke: v-bind(color)
}

.lucien-section .right p {
    color: v-bind(color);
}



.zander-section .right svg path {
    stroke: v-bind(color)
}

.zander-section .right p {
    color: v-bind(color)
}



.gale-section .right svg path {
    stroke: v-bind(extraColor);
}

.gale-section .facts .dark p {
    color: v-bind(extraColor);
}

.gale-section h3 {
    color: v-bind(extraColor);
}


/* .gale-section .image img {
    max-width: 25vw;
} */

.rosco-section,
.rosco-section h3 {
    font-family: 'Quicksand', sans-serif;
}


.rosco-section h2 {
    filter: drop-shadow(-2px 3px 0px #093891);
}

.rosco-section .right svg path {
    stroke: v-bind(color);
}

.rosco-section .right p {
    color: v-bind(color);
}

.rosco-section .image img {
    width: 66%;
    left: auto;
}

/* mobile */

@media (max-width: 768px) {


    .grid-container {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr 1fr 5vh 1fr 1fr 0.5fr;
    }


    .grid-container>div {
        align-self: center;
        font-size: 1rem;
    }



    .polaroid img {
        border: 0.7em solid lightgray;
        border-bottom: 2em solid lightgray;
        width: 40%;
    }

    .content {
        grid-area: 1 / 1 / 3 / 4;
        align-self: start;
        position: relative;
        z-index: 999;
    }

    .content p {
        /* font-size: 80%; */
    }

    .fact {
        align-items: center;

    }

    .fact-a {
        grid-area: 4 / 1 / 5 / 2;
        top: 4vh;
    }

    .polaroid-a-b {
        grid-area: 3/1/4/2;
        top: 5vh;
    }

    .emoji {
        font-size: 40px;
        left: 31vw;
    }

    .polaroid-a {
        bottom: 70px;
    }

    .fact-b {
        grid-area: 6 / 1 / 6 / 2;
    }

    .polaroid-c {
        grid-area: 5 / 1 / 6 / 2;
    }

    .image {
        grid-area: auto;
        grid-area: 4 / 2 / 7 / 3;
    }

    .image img {
        width: 150%;
        right: 10vw;
        bottom: 10vh;
    }


    .fact-c {
        grid-area: auto;
        grid-area: 3 / 3 / 4 / 4;
    }

    .polaroid-d {
        grid-area: auto;
        grid-area: 4 / 3 / 5 / 4;
    }

    .fact-d {
        grid-area: auto;
        grid-area: 5 / 3 / 6 / 4;
    }

    .polaroid-e {
        grid-area: auto;
        grid-area: 6 / 3 / 7 / 4;
        z-index: 999;
    }

    .grid-container .bg {
        grid-area: 4 / 1 / 7 / 4;
        height: auto;
        clip-path: polygon(0 0, 0% 0%, 111% 111%, 0% 106%);
    }

    .cassian-section .image img {
        width: 150%;
        right: 10vw;
        bottom: 10vh;
    }

    .gale-section .image img {
        width: 135%;
        right: 6vw;
        bottom: 5vh;
    }

    .gale-section .content p {
        width: 90%;
    }

    .rosco-section .image img {
        width: 120%;
        right: 6vw;
        bottom: 5vh;
    }

    .zander-section .image img {
        left: -2vw;
    }


}

/* @media (max-width: 425px) {

    .content p {
        font-size: 100%;
    }

    .image img {
        width: 180%;
        left: -43%;
    }

    .grid-container .fact-c {
        align-self: end;
    }

    .fact svg {
        top: -10px
    }

    .fact-a {
        right: 15%;
    }
} */
</style>