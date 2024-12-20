<script setup lang="ts">
import gsap from 'gsap';
import { onMounted } from 'vue';

function dartAnimation() {

    const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;

    if (isSmallScreen) {
        gsap.fromTo('.dart',
            {
                left: '80vw',
                bottom: '100vh',
            },
            {
                left: '46vw',
                bottom: '87vh',
                duration: 0.7,
                ease: "power2.in",
                onComplete: bendDart
            })
    } else {
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

function boatWave() {
    const boat = document.querySelector('.boat')
    gsap.fromTo(boat,
        {
            bottom: '10vh',
            left: '10vw'
        },
        {
            left: '80vw',
            duration: 25,
            repeat: -1,
            ease: 'none'
        })

    gsap.fromTo(boat, {
        rotate: '-5deg'
    }, {
        rotate: '15deg',
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: 'none'
    })
}

onMounted(() => {
    dartAnimation()
    boatWave()
})

</script>

<template>
    <section>
        <img src="../../assets/dart.png" alt="" class="dart">
        <div class="background">
            <img src="../../assets/boat.png" alt="" class="boat">
            <div class="wanted-poster">
            </div>
        </div>

    </section>
</template>

<style scoped>
section {
    background: linear-gradient(#411f0089, #0f0700d3), url("../../assets/wood-bg.jpg");
    background-size: cover;
}

.background {
    width: 100vw;
    height: 100vh;
}

.wanted-poster {
    width: 87vw;
    height: 88vh;
    margin: auto;
    margin-top: 10vh;
    clip-path: polygon(6% 0.25%, 12% 7.27%, 16.73% 1.9%, 32% 4.25%, 39.88% 0.25%, 42.69% 7.38%, 45% 0.25%, 68% 4.25%, 84% 0.25%, 87.5% 6.31%, 91% 0.25%, 99.49% 7.58%, 99.38% 27.93%, 98.76% 47.62%, 98.44% 57.46%, 99.41% 74.72%, 95.76% 80.44%, 97.51% 86.99%, 96.25% 99%, 78% 97.25%, 57.75% 98%, 55.75% 88.75%, 53.25% 99%, 35.25% 97.75%, 18.5% 97.75%, 14.7% 94.17%, 13.5% 99.25%, 0% 98.25%, 2% 78.25%, 0% 50.25%, 4.39% 45.67%, 0% 38.25%, 1.39% 14.51%, 1.76% 8.27%);
    background: url("../../assets/cardboard.png"), linear-gradient(#f7e8c8, #d7c38e);
    box-shadow: inset 1px -3px 20px 5px rgb(52 18 0);
    overflow: hidden;
}


.boat {
    position: absolute;
    width: 10vw;
    opacity: 0.1;
    transform-origin: bottom center;
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


@media (max-width: 768px) {
    .wanted-poster {
        width: 95vw;
    }

    .boat {
        width: 30vw;
    }
}
</style>