<script setup lang="ts">
import gsap from 'gsap';
import { onMounted } from 'vue';



function skyAnimation() {
    const sky = document.querySelector('.night-sky');
    const starCount = 200;
    const shootingStarCount = 3;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        sky?.appendChild(star);
    }
    const stars = document.querySelectorAll<HTMLDivElement>('.star');

    stars.forEach((star) => {
        gsap.fromTo(
            star,
            {
                opacity: 0,
                boxShadow: '0 0 5px rgba(255, 255, 255, 0)',
            },
            {
                opacity: gsap.utils.random(0.2, 1),
                boxShadow: `0 0 ${gsap.utils.random(5, 15)}px rgba(255, 255, 255, ${gsap.utils.random(0.5, 1)})`,
                yoyo: true,
                duration: gsap.utils.random(1, 2),
                repeat: -1,
                delay: Math.random() * 2,
            }
        )
    })

    for (let i = 0; i < shootingStarCount; i++) {
        const star = stars[Math.floor(Math.random() * stars.length)];
        shootingStarAnimation(star)
    }

    gsap.fromTo(
        '.cloudA',
        {
            left: "-30vw",

        },
        {
            left: "100vw",
            duration: 40,
            repeat: -1,
        }
    )

    gsap.fromTo(
        '.cloudB',
        {
            left: "-30vw",

        },
        {
            left: "100vw",
            duration: 40,
            repeat: -1,

        }
    )


}

// function moonAnimation() {

//     const tl = gsap.timeline();
//     tl.fromTo(
//         '.moons',
//         {
//             top: '-100vh'
//         },
//         {
//             top: '15vh',
//             duration: 3,
//             ease: ''
//         }
//     )

//     tl.fromTo(
//         '.moonA',
//         {
//             opacity: 1
//         },
//         {
//             opacity: 0,
//             duration: 3
//         }
//     )

//     tl.fromTo(
//         '.moonB',
//         {
//             opacity: 0
//         },
//         {
//             opacity: 1,
//             duration: 3
//         }
//     )

//     tl.fromTo(
//         '.moons',
//         {

//             width: '50%',
//             right: '90vw',


//         },
//         {
//             width: '20%',
//             right: '80vw',
//             duration: 3
//         }
//     )


// }

function shootingStarAnimation(star: HTMLDivElement) {
    const startX = parseFloat(star.style.left); // Current horizontal position
    const startY = parseFloat(star.style.top);
    const distance = 30; // Fixed distance in vw
    const direction = -1


    const endX = startX + distance * direction; // Move right or left by 'distance'
    const endY = startY + distance;

    star.classList.add('shootingStar');

    gsap.fromTo(
        star,
        {
            left: `${startX}vw`,
            top: `${startY}vh`,
            opacity: 1,
        },
        {
            left: `${endX}vw`,
            top: `${endY}vh`,
            opacity: 0,
            duration: 2,
            repeat: -1,
            delay: Math.random() * 2,
            onComplete: () => {
                star.style.opacity = '1'; // Reset opacity
                star.style.top = `${Math.random() * 100}vh`; // Reset to random vertical position
                star.style.left = `${Math.random() * 100}vw`; // Reset to random horizontal position
                setTimeout(() => shootingStarAnimation(star), gsap.utils.random(2000, 5000)); // Reanimate
            }
        }
    );
}



onMounted(() => {
    skyAnimation()
    // moonAnimation()
})
</script>

<template>
    <section>
        <div class="night-sky">
            <div class="background">
                <div class="moons">
                    <img src="../../assets/moon.png" alt="" class="moonA">
                    <img src="../../assets/moon-red.png" alt="" class="moonB">
                </div>
                <div class="clouds">
                    <img src="../../assets/cloud5.png" alt="" class="cloudA">
                    <img src="../../assets/cloud4.png" alt="" class="cloudB">
                </div>
            </div>

        </div>

    </section>
</template>

<style scoped>
section {
    width: 100vw;
    height: 100vh;
}

.night-sky {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgb(42, 42, 42), black);
    overflow: hidden;
    z-index: 997;
}

.moon-clouds {
    display: none;
    position: relative;
    top: 20vh;
    opacity: 1;
}

.moons {
    position: absolute;
    width: 20%;
    top: 15vh;
}

/*  */

.moonA {
    width: 100%;
    position: relative;
    left: 67vw;
}

.moonB {
    position: absolute;
    width: 100%;
    left: 67vw;
}



.cloudB {
    width: 30%;
    position: relative;
    left: 30vw;
    bottom: -30vh;
}

.cloudA {
    width: 22%;
    position: relative;
}
</style>

<style>
.night-sky .star {
    position: absolute;
    width: 2px;
    height: 2px;
    background: white;
    border-radius: 50%;
}

.shootingStar {
    filter: drop-shadow(0px 1px 1px white);
}
</style>