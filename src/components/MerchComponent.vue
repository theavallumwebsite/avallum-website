<script setup lang="ts">

import data from '../../data.json'

const merch = data.merch


const getClass = (index: number) => {
    return index === 0 ? 'merchItem firstItem' : 'merchItem';
}

</script>

<template>
    <section id="merch">
        <h2>Merch</h2>
        <h3>Support the boys!</h3>
        <div class="grid-container">
            <div v-for="(item, index) in merch" :key="index" :class="getClass(index)">
                <a :href="item.link" target="_blank">
                    <p v-if="index === 0" class="merch0">Permanent Sale (VPs only)</p>
                    <img :src="item.image" alt="">
                    <i>{{ item.name }}</i>
                </a>
            </div>

        </div>


    </section>

</template>

<style scoped>
section {
    padding: 0px 15px;
    text-align: center;
    height: 100vh;
    border-bottom: 1px solid gold;
}

h3 {
    margin: 0px;
    font-weight: normal;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 20px;
    overflow: scroll;
    height: 87vh;
    padding: 5px;
}

.merchItem img {
    width: 100%;
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.8));
}

.merchItem {
    text-align: center;
}

.merchItem:hover img,
.merchItem:hover p {
    transform: scale(1.05);
    transition: transform 0.5s;
}

.merch0 {
    height: 3vh;
    width: 10vw;
    position: relative;
    z-index: 999;
    padding: 2vh;
    padding-bottom: 3vh;
    padding-right: 30px;
    background: #fa1c9a;
    clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
    text-shadow: 0px 3px 1px black;
    font-family: 'Jersey 10';
    font-size: 1.25rem;
    margin: 0px;
}

.firstItem img,
.firstItem i {
    margin-top: -8vh;
}


@media screen and (max-width: 768px) {

    .grid-container {
        grid-template-columns: auto;
    }

    .merch0 {
        height: 3vh;
        width: 25vw;
        position: relative;
        z-index: 999;
        padding: 1vh;
        padding-bottom: 2vh;
        padding-right: 30px;
        background: #fa1c9a;
        clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
        text-shadow: 0px 3px 1px black;
        font-family: 'Jersey 10';
        font-size: 1rem;
        margin: 0px;
    }

}
</style>