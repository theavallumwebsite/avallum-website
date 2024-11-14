<script setup lang="ts">
import { onMounted } from 'vue';
import gsap from 'gsap';

async function Animation() {
    gsap.fromTo("#leaf", {
    x: 400,
    y: -400,
    rotation: 0,
    opacity: 1   
}, {
    x: -500,  
    y: 1000,   
    rotation: 180,  
    duration: 2,  
    ease: "power1.inOut",  
})
}

onMounted(() => {
    Animation()
})


</script>


<template>
    <div class="background">
        <img id="leaf" src="../assets/leaf.svg" alt="leaf">
    </div>

    <section class="content">

    </section>
</template>


<style>

.background {
    width: 100vw;
    height: calc(100vh + 15px);
    position: relative;
    background: linear-gradient(#00ADB6, #C8D5DA);
    top: -115px;
}


</style>