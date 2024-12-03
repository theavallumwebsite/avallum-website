<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ref } from 'vue'

const color = ref('white')


function lightrayAnimation() {
  const lightrays = document.querySelectorAll('.lightray')

  lightrays.forEach((ray) => {
    gsap.to(ray, {
      duration: gsap.utils.random(2, 4),
      opacity: gsap.utils.random(0.2, 1),
      height: gsap.utils.random(600, 800),
      repeat: -1,
      yoyo: true,
      ease: 'power4.inOut'
    })
  })
}



function particlesAnimation() {
  const container = document.querySelector(".particles-container")

  const particles: HTMLDivElement[] = [];



  for (let i = 0; i < 25; i++) {
    const particle = document.createElement('div')
    container?.appendChild(particle)
    particle.classList.add('particle')
    particles.push(particle)
  }

  particles.forEach((particle) => {
    const size = gsap.utils.random(5, 12);
    gsap.fromTo(
      particle, {
      width: `${size}px`,
      height: `${size}px`,
      opacity: gsap.utils.random(0.2, 0.5),
      top: gsap.utils.random(200, 800),
      left: gsap.utils.random(100, 1200),
    },
      {
        top: gsap.utils.random(300, 1400),
        repeat: -1,
        duration: gsap.utils.random(10, 20),
        ease: "sine.inOut",
      }
    )
  })
}

onMounted(() => {
  lightrayAnimation()
  particlesAnimation()

})

</script>

<template>
  <section id="cassian-animation">


    <div class="animation">
      <div class="particles-container"></div>

      <div class="lightray-animation">
        <div class="lightray-container">
          <div class="sun"></div>
          <div class="sun"></div>
          <div class="lightray lightray-og"></div>
          <div class="lightray lightray-a"></div>
          <div class="lightray lightray-b"></div>
          <div class="lightray lightray-c"></div>
          <div class="lightray lightray-d"></div>
          <div class="lightray lightray-e"></div>
        </div>
        <div class="lightray-container container-2">
          <div class="lightray lightray-og"></div>
          <div class="lightray lightray-a"></div>
          <div class="lightray lightray-b"></div>
          <div class="lightray lightray-c"></div>
          <div class="lightray lightray-d"></div>
          <div class="lightray lightray-e"></div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.animation {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #eaeaea;
}


.particles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 999;
}



/* light animation */


.lightray-container {
  position: absolute;
  top: 10vh;
  z-index: 1;
  width: 500px;
  height: 900px;
  transform: rotate(55deg);
  transform-origin: 50% 0%;
  /* border: 1px solid red; */
}

.container-2 .lightray {
  width: 20px;
}

.container-2 .sun {
  top: 36px;
  /* left: -15px; */
  filter: blur(47px);
}

/* .container-2 .sun-a {
  top: 50px;
} */

.sun {
  position: absolute;
  width: 200px;
  height: 200px;
  background: linear-gradient(to right, white, transparent);
  clip-path: polygon(0% 50%, 100% 0%, 100% 100%, 0% 100%);
  transform: rotate(15deg);
}


.lightray {
  position: absolute;
  top: 150px;
  opacity: 1;
  left: -170px;
  z-index: 1;
  width: 5px;
  height: 730px;
  background: linear-gradient(v-bind(color), transparent);
  filter: blur(3px) brightness(1.5);
  transform: rotate(-100deg);
  transform-origin: 50% 0%;
}

.lightray-a {
  transform: rotate(-105deg);
  background-size: 10% 100%;
}

.lightray-b {
  transform: rotate(-95deg);
}

.lightray-c {
  transform: rotate(-90deg);
}

.lightray-d {
  transform: rotate(-78deg);
}

.lightray-e {
  transform: rotate(-85deg);
}

.lightray-f {
  transform: rotate(-87deg);
}
</style>

<style>
.particle {
  position: relative;
  background: v-bind(color);
  border-radius: 50%;
  z-index: 999;
  filter: blur(2px);
}
</style>
