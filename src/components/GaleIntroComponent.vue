<script setup lang="ts">
import gsap from 'gsap';
import { onMounted } from 'vue';

function dartAnimation() {
    gsap.fromTo('.dart',
        {
            left: '80vw',
            bottom: '100vh',
        },
        {
            left: '46vw',
            bottom: '80vh',
            duration: 0.7,
            ease: "power2.in",
            onComplete: bendDart
        })
}

function bendDart() {
    gsap.fromTo('.dart',
        {
            skewX: 18,
        },
        {
            skewX: 22,
            yoyo: true,   // Reverses the animation each time
            duration: 1.2,
            ease: "elastic.out",
        }
    )
}
onMounted(() => {
    dartAnimation()
})

</script>

<template>
    <section>
        <img src="../assets/dart.png" alt="" class="dart">
        <div class="background">
            <div class="wanted-poster">

            </div>
        </div>

    </section>
</template>

<style scoped>
section {
    background: linear-gradient(#411f0089, #0f0700d3), url("../assets/wood-bg.jpg");
    background-size: cover;
}

.background {
    width: 100vw;
    height: 100vh;
}

.wanted-poster {
    width: 87vw;
    height: 90vh;
    margin: auto;
    margin-top: 10vh;
    clip-path: polygon(5% 0%, 10% 2%, 20% 0%, 30% 3%, 40% 0%, 50% 4%, 60% 0%, 70% 3%, 80% 1%, 90% 0%, 95% 2%, 100% 0%,
            100% 10%, 98% 20%, 100% 30%, 97% 40%, 100% 50%, 98% 60%, 100% 70%, 99% 80%, 100% 90%, 97% 100%,
            90% 98%, 80% 100%, 70% 97%, 60% 100%, 50% 96%, 40% 100%, 30% 97%, 20% 100%, 10% 98%, 5% 100%, 0% 97%,
            0% 90%, 2% 80%, 0% 70%, 0% 50%, 2% 40%, 0% 30%, 1% 20%, 0% 10%, 2% 5%);
    background: url("../assets/cardboard.png"), linear-gradient(#f7e8c8, #d7c38e);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
}

.dart {
    position: absolute;
    z-index: 999;
    width: 20%;
    rotate: 10deg;
    /* border: 1px solid red; */
    transform-origin: bottom left;
    transform: skewX(18deg);
}
</style>