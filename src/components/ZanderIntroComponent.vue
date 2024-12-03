<script setup lang="ts">
import gsap from 'gsap';
import { onMounted } from 'vue';

function smokeAnimation() {
    gsap.fromTo(
        '.A',
        {
            left: "-60vw",

        },
        {
            left: "100vw",
            duration: 30,
            repeat: -1,
            ease: 'none'
        })
    gsap.fromTo(
        '.B',
        {
            left: "-60vw",

        },
        {
            left: "50vw",
            duration: 25,
            repeat: -1,
            ease: 'none'
        })

}


onMounted(() => {
    smokeAnimation()

}

)

</script>

<template>
    <section>
        <div class="smoke-animation">
            <img src="../assets/smoke.png" alt="" class="smoke A">
            <img src="../assets/smoke.png" alt="" class="smoke B">
        </div>
    </section>
</template>

<style scoped>
section {
    width: 100vw;
    display: flex;
    align-items: end;
}


.smoke-animation {
    height: 50vh;
    width: 200vh;
    position: relative;
    bottom: -10vh;
    opacity: 0.3;
    display: flex;

}

.smoke {
    position: relative;
    bottom: -10vh;
    width: 130%;
    height: 400px;
    left: -114vh;
}
</style>