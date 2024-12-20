<script setup lang="ts">
import { ref } from 'vue';

let showModal = ref<boolean>(false);
</script>

<template>
    <section id="footer" class="footer">
        <h3>Avallum World</h3>
        <p @click="showModal = true">About & Credits</p>
        <div v-if="showModal" class="modal" @click.self="showModal = false">
            <div class="about">
                <p @click="showModal = false" class="closeButton">X</p>
                <h3>About</h3>
                <i>This website is not affiliated with First Stage Production. No profit is being made off this
                    website.</i>
                <p>Avallum World was designed and developed by <b>Nana (@gukkietty on X)</b>.</p>
                <p>I decided to do this website because I love Avallum and I wanted to gain some more developing
                    experience for my own professional life. This is kinda my love letter to the community, and I hope
                    that this website is useful.</p>

                <h3>General Credits</h3>
                <p>Data Collection: Noise & Hannah B. (HUGE thank you to them for putting together all the data!)</p>
                <p>Mascots drawing: Nanni</p>
                <p>Mascots drawing: Risa</p>
                <p>Birthday Hat: Azure</p>
                <p>Free assets: Pixabay</p>
                <p>Cake image: Microsoft</p>
                <h3>For my fellow developers (and anyone curious)</h3>
                <p>This was developed in <b>VueJS</b> (in typescript), with the <b>Holodex API</b> for all the stream
                    and
                    music
                    related data
                    (thanks to Matt for suggesting it to me), with the help of the <b>GSAP</b> library for animations.
                    Everything was designed in <b>Figma</b>.</p>
                <h3>See a problem or have a question?</h3>
                <a href="https://x.com/gukkietty">Contact me!</a>

            </div>
        </div>

    </section>
</template>

<style scoped>
section {
    height: 7vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Gloock';
    background: rgb(11, 11, 11);
    /* background: linear-gradient(rgba(38, 38, 38, 0.9), rgba(0, 0, 0, 0.94)), url('../assets/black-stars.png');
    background-blend-mode: darken; */
}

p {
    margin-left: 1vw;
}


.closeButton {
    float: right;
    padding-right: 10px;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.about {
    width: 80vw;
    height: 70vh;
    background: rgb(37, 37, 37);
    border-radius: 10px;
    padding: 10px;
    text-align: center;
    font-family: 'Cormorant Garamond';
    overflow: scroll;
}

@media screen and (max-width: 768px) {

    section {
        height: 7vh;
    }
}
</style>