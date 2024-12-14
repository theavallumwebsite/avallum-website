<script setup lang="ts">
import { onMounted } from 'vue';
import data from '../../data.json'

const merch = data.merch

onMounted(() => {
    console.log(merch)
})

</script>

<template>
    <section id="merch">
        <h2>Merch</h2>
        <div class="grid-container">
            <div v-for="(item, index) in merch" :key="index" class="merchItem">
                <a :href="item.link" target="_blank">
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
    height: 93vh;
    background: linear-gradient(transparent, black);
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    gap: 20px;
    overflow: scroll;
    height: 83vh;
}

.merchItem img {
    width: 100%;
}

.merchItem {
    text-align: center;
}

@media screen and (max-width: 768px) {

    .grid-container {
        grid-template-columns: auto;
    }

}
</style>