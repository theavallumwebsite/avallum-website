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
                <i>This website is not affiliated with First Stage Production (FSP please don't bonk me pls)</i>
                <p>Avallum World was designed and developed by <a href="https://x.com/gukkietty">Nana (@gukkietty on
                        X)</a>.</p>
                <p>I decided to do this website because I needed to gain more developing experience, so what better than
                    to do a website about my favorite vtubers? I have a lot of love for Avallum and the community, and I
                    hope to convey that much through this website.</p>

                <h3>General Credits </h3>
                <h4>(HUGE thank you to these people!)</h4>
                <i>Please check the member pages for their credits.</i>
                <p>Data Collection: <a href="https://x.com/noxise8">Noise</a> & <a
                        href="https://x.com/Beenana0_0">Hannah B.</a></p>
                <p>Pop up Roscal, Dewdrop: <a href="https://x.com/ryuttoz">Nanni</a></p>
                <p>Pop up Pipsqueak, Netherling: <a href="https://x.com/risas_puffs">Risa</a></p>
                <p>Pop up Lunarist: <a href="https://x.com/ren_deru16">Renderu</a></p>
                <p>Birthday Hats: <a href="https://x.com/ashurnotazer">Azure</a></p>
                <h3>For my fellow developers (and anyone curious)</h3>
                <p>Avallum World was developed in <b>VueJS</b> (typescript), with the <b>Holodex API</b> for all the
                    stream
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

a {
    font-weight: bold;
}

.closeButton {
    float: right;
    padding-right: 10px;
    font-family: sans-serif;
    margin: 0px;
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

.modal h3 {
    text-transform: uppercase;
}

@media screen and (max-width: 768px) {
    section {
        height: 7vh;
    }
}
</style>