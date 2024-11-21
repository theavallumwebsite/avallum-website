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
    return data.channels[props.memberName]
})

const font = ref(member.value.font)
const color = ref(member.value.color)
const titleColor = ref(member.value.titleColor)
const extraColor = ref(member.value.extraColor)


onMounted(() => {
    const bg = document.querySelector('.bg') as HTMLElement
    const gradient = member.value.gradient
    if (bg) {
        console.log('test')
        bg.style.background = `linear-gradient(to bottom, ${gradient[0]}, ${gradient[1]})`;
    }
}

)

</script>

<template>

    <section id="additional-section">

        <div class="column1">
            <div class="facts facts-left">
                <div class="light">
                    <div class="fact fact-a">
                        <svg width="79" height="87" viewBox="0 0 79 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.4927 60.5837C19.7521 56.2644 34.9999 33 76.5825 20.5215" stroke="#146665"
                                stroke-width="3" stroke-linecap="round" />
                            <path
                                d="M21.7216 63.0421C14.9288 72.0436 10.5256 78.0184 9.9048 71C9.38135 65.0823 9 60.5 9.90479 54.5968"
                                stroke="#146665" stroke-width="3" stroke-linecap="round" />
                        </svg>
                        <p>{{ member.facts[0] }}</p>
                    </div>

                    <div class="fact fact-b">
                        <svg width="79" height="87" viewBox="0 0 79 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.4927 60.5837C19.7521 56.2644 34.9999 33 76.5825 20.5215" stroke="#146665"
                                stroke-width="3" stroke-linecap="round" />
                            <path
                                d="M21.7216 63.0421C14.9288 72.0436 10.5256 78.0184 9.9048 71C9.38135 65.0823 9 60.5 9.90479 54.5968"
                                stroke="#146665" stroke-width="3" stroke-linecap="round" />
                        </svg>
                        <p>{{ member.facts[1] }}</p>
                    </div>
                </div>
            </div>

            <div class="polaroids polaroids-left">
                <div class="polaroid-group">
                    <img :src="member.polaroids[0]" alt="" class="polaroid polaroid-a">
                    <img :src="member.polaroids[1]" alt="" class="polaroid polaroid-b">
                    <p class="emoji">{{ member.emoji }}</p>
                </div>
                <img :src="member.polaroids[2]" alt="" class="polaroid polaroid-c">
            </div>

            <div class="image">
                <img :src="member.model" alt="">
            </div>

            <div class="facts facts-right">
                <div class="dark">
                    <div class="fact fact-c">
                        <svg width="79" height="87" viewBox="0 0 79 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.4927 60.5837C19.7521 56.2644 34.9999 33 76.5825 20.5215" stroke="#146665"
                                stroke-width="3" stroke-linecap="round" />
                            <path
                                d="M21.7216 63.0421C14.9288 72.0436 10.5256 78.0184 9.9048 71C9.38135 65.0823 9 60.5 9.90479 54.5968"
                                stroke="#146665" stroke-width="3" stroke-linecap="round" />
                        </svg>
                        <p>{{ member.facts[2] }}</p>
                    </div>

                    <div class="fact fact-d">
                        <svg width="79" height="87" viewBox="0 0 79 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.4927 60.5837C19.7521 56.2644 34.9999 33 76.5825 20.5215" stroke="#146665"
                                stroke-width="3" stroke-linecap="round" />
                            <path
                                d="M21.7216 63.0421C14.9288 72.0436 10.5256 78.0184 9.9048 71C9.38135 65.0823 9 60.5 9.90479 54.5968"
                                stroke="#146665" stroke-width="3" stroke-linecap="round" />
                        </svg>
                        <p>{{ member.facts[3] }}</p>
                    </div>
                </div>
            </div>

            <div class="polaroids polaroids-right">
                <img :src="member.polaroids[3]" alt="" class="polaroid polaroid-d">
                <img :src="member.polaroids[4]" alt="" class="polaroid polaroid-e">
            </div>

            <div class="bg-wrap">
                <div class="bg"></div>
            </div>
        </div>

        <div class="column2">
            <div class="content">
                <div class="title">
                    <h3>Also known as</h3>
                    <h2>{{ member.alternativeNames }}</h2>
                </div>
                <p>{{ member.lore }}</p>
                <img src="" alt="">
            </div>
        </div>

    </section>

</template>

<style scoped>
section {
    overflow: hidden;
    display: flex;
    justify-content: center;
    /* background: linear-gradient(white, lightgrey); */
    background: linear-gradient(rgba(255, 255, 255, 0.8), rgba(119, 119, 119, 0.8)), url("../assets/grid-pattern.jpg");
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
    font-size: 40px;
    margin: 0px;
}

h3 {
    font-family: 'Cormorant Garamond';
    color: v-bind(color);
    margin: 0px;
}


.bg {
    position: absolute;
    height: 100vh;
    width: 100%;
    top: 0px;
    left: 0px;
    clip-path: polygon(0 0, 100% 0%, 80% 100%, 0% 100%);
    overflow: visible;
    z-index: -1;
    filter: drop-shadow(0px 0px 10px black);
}

.column1 {
    display: flex;
    position: relative;
    z-index: 999;
    height: 100vh;
    align-items: center;
    flex-direction: row;
    width: 55%;
}

.column2 {
    /* width: 600px; */
    height: 100vh;
    color: black;
    text-align: center;
    margin: auto;
    position: relative;
    z-index: 998;
    display: flex;
    padding: 30px;
    width: 50%;

}

.image {
    position: relative;
    width: 10vw;
    height: auto;
    /* border: 1px solid; */
}

.image img {
    /* width: 300px; */
    /* margin: auto; */
    max-width: 30vw;
    min-width: 250px;
    height: auto;
    position: relative;
    left: -40px;
    /* object-fit: contain; */
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
}

.content p {
    position: relative;
    text-align: justify;
    max-width: 320px;
    margin: auto;
}

/* polaroids */

.polaroid {
    width: 130px;
    border: 17px solid rgb(230, 230, 230);
    border-bottom: 70px solid rgb(230, 230, 230);
    filter: drop-shadow(0 3px 0.2rem rgb(50, 50, 50));
}

.polaroids-left {
    position: relative;
    left: -100px;

}

.polaroid-group {
    position: relative;
    top: 180px;
}

.emoji {
    position: relative;
    font-size: 80px;
    top: -440px;
    left: -40px;
}

.polaroid-a {
    position: relative;
    transform: rotate(-15deg);
    top: 10px;
}

.polaroid-b {
    position: relative;
    top: -100px;
    right: 100px;
    transform: rotate(5deg);
}

.polaroid-c {
    transform: rotate(8deg);
    position: relative;
    left: -50px;
    bottom: 10px;
}

.polaroids-right {
    position: relative;
    right: 600px;
}

.polaroid-d {
    position: relative;
    top: -230px;
    left: 500px;
    transform: rotate(15deg);
}

.polaroid-e {
    position: relative;
    top: 200px;
    left: 500px;
    transform: rotate(340deg);
}

/* facts  */

.facts {
    z-index: 999;
    font-size: larger;
    position: relative;
    left: 5%;
    /* left: -15px; */

}

.facts svg {
    min-width: 100px;
}

.facts p {
    font-family: "Covered by your grace";
    min-width: 150px;
    margin: 0px;
}

.facts .light {
    position: relative;
    left: -100px;
}

.fact {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
}


.light .fact {
    flex-direction: row-reverse;
}

.facts .dark {
    color: black;
}

.facts .light svg path {
    stroke: white;
}

.facts .dark svg path {
    stroke: v-bind(color);
}

.facts .dark p {
    color: v-bind(color);
}

.facts .light p {
    text-align: right;
}

.fact-a {
    position: relative;
    top: -320px;
    right: -220px;
    /* top: 10%;
    right: -50%; */
}

.fact-a svg {
    transform: scaleX(-1);
    position: relative;
    bottom: -20px;
}


.fact-b {
    position: relative;
    top: 100px;
    right: -200px;
    /* top: 10%;
    right: -50%; */
}

.fact-b svg {
    transform: rotate(205deg);
}


.fact-c {
    position: relative;
    top: -200px;
    left: -30px;
}

.fact-c svg {
    position: relative;
    top: 15px;
}

.fact-d {
    position: relative;
    top: 200px;
    right: 50px;
}

.fact-d svg {
    transform: scaleY(-1);
    position: relative;
    bottom: 20px;
}


/* additional member css */

.lucien-section h2 {
    -webkit-text-stroke: 1px #BB0F28;
}

.lucien-section .image img {
    max-width: 40vw;
    position: relative;
    left: -100%;
}

.zander-section h2 {
    filter: drop-shadow(0px 0px 0.3rem #c000ca);
    text-shadow: rgb(253, 145, 255) 2px 1px 2px;
}

.zander-section .image img {
    width: 310px;
}

.cassian-section h2 {
    font-weight: bold;
}

.cassian-section .facts .dark svg path {
    stroke: v-bind(extraColor);
}

.cassian-section .facts .dark p {
    color: v-bind(extraColor);
}

.cassian-section h3 {
    color: v-bind(extraColor);
}


.gale-section .facts .dark svg path {
    stroke: v-bind(extraColor);
}

.gale-section .facts .dark p {
    color: v-bind(extraColor);
}

.gale-section h3 {
    color: v-bind(extraColor);
}


.gale-section .image img {
    max-width: 25vw;
    ;
}

.rosco-section,
.rosco-section h3 {
    font-family: 'Quicksand', sans-serif;
}

.rosco-section .image img {
    width: 220px;
}

.rosco-section .polaroid-d {
    left: 560px;
}

.rosco-section h2 {
    filter: drop-shadow(-2px 3px 0px #093891);
}

@media screen and (max-width: 768px) {
    section {
        flex-direction: column-reverse;
        font-size: 3vw;
        justify-content: center;
        align-items: center;
    }

    .column2 {
        width: 100%;
        height: 50vh;
        margin: 0px;
        padding: 5px;
    }

    .column2 .content p {
        width: 300px;
    }

    .column1 {
        width: 100%;
        height: 50vh;
    }

    .bg {
        width: 100%;
        transform: rotate(-50deg);
    }

    .column1 {
        transform: scale(0.5);
    }

    .polaroids {
        left: -310px;
        transform: scale(0.7);
    }


    .image {
        left: -100%;
    }

    .polaroid-group {
        top: 0px;
        left: -50px;
    }

    .polaroid-c {
        bottom: 80px;
    }

    .facts {
        left: -100%;
    }

    .facts-right {
        left: -60%;
    }

    .polaroid-d,
    .polaroid-e {
        left: -110px;
    }

    .polaroids-right {
        top: -15px;
    }


    /* .image {
        position: static;
        margin: auto;
    }

    .image img {
        margin: auto;
    }

    .facts svg {
        width: 40px;
        min-width: 0px;
    }

    .facts {
        left: -100px;
    }

    .polaroid {
        width: 20%;
        border: 10px solid white;
    } */
}
</style>