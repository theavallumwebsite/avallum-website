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
                <i>This website is not affiliated with First Stage Production.</i>
                <p>This website was designed and developed by <b>Nana (@gukkietty on X)</b>.</p>
                <p>This was developed in <b>VueJS</b> (with typescript), with the <b>Holodex API</b> for all the stream
                    and
                    music
                    related data
                    (thanks to Matt for suggesting it to me), with the help of the GSAP library for animations. </p>
                <h3>Credits</h3>
                <p>Data Collection: Noise & Hannah B. (HUGE thank you to them for putting together all the data!)</p>
                <p>Mascots drawing: Nanni</p>
                <p>Please check the member pages for precise credits.</p>

            </div>
        </div>

    </section>
</template>

<style scoped>
section {
    height: 7vh;
    display: flex;
    align-items: baseline;
    justify-content: center;
    font-family: 'Gloock';
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
    font-family: 'Montserrat';
}

@media screen and (max-width: 768px) {

    section {
        height: 3vh;
    }
}
</style>