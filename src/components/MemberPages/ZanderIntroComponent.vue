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

function bigParticlesAnimation() {
    const container = document.querySelector(".bigparticles-container")
    const bigParticles: HTMLDivElement[] = [];



    for (let i = 0; i < 10; i++) {
        const bigParticle = document.createElement('div')
        container?.appendChild(bigParticle)
        bigParticle.classList.add('bigParticle')
        bigParticles.push(bigParticle)
    }

    const size = gsap.utils.random(50, 100);

    bigParticles.forEach((bigParticle) => {
        gsap.fromTo(
            bigParticle,
            {
                width: `${size}px`,
                height: `${size}px`,
                opacity: gsap.utils.random(0.1, 0.8),
                top: gsap.utils.random(0, window.innerHeight),
                left: gsap.utils.random(0, window.innerWidth),
                filter: `blur(${gsap.utils.random(2, 5)}px)`,
            },
            {
                width: `${size}px`,
                height: `${size}px`,
                top: gsap.utils.random(0, window.innerHeight),
                left: gsap.utils.random(0, window.innerWidth),
                opacity: 1,
                yoyo: true,
                repeat: -1,
                duration: gsap.utils.random(30, 60)
            }
        )
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
            <img src="../../assets/smoke.png" alt="" class="smoke A">
            <img src="../../assets/smoke.png" alt="" class="smoke B">
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