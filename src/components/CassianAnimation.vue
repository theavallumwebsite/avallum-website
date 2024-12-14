<script setup lang="ts">
import gsap from 'gsap';
import { onMounted } from 'vue';

function animation() {
  const plants = document.querySelectorAll('.plant')
  console.log(plants)

  plants.forEach((plant) => {
    gsap.fromTo(plant,
      {
        skewX: '5deg',
      },
      {
        skewX: '10deg',
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: 'linear'
      })
  })
}

onMounted(() => {
  animation()
});

</script>

<template>
  <section id="cassian-animation">
    <div class="addons">
      <img src="../assets/plant.png" alt="" class="plantA plant">
      <img src="../assets/plant.png" alt="" class="plantB plant">
    </div>
    <div class="video">
      <video src="../assets/cass_background.mp4" autoplay loop muted playsinline></video>
    </div>
  </section>

</template>

<style scoped>
section {
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
}

.addons {
  position: absolute;
  z-index: 999;
}

.plant {
  transform-origin: bottom center;
}


.plantA {
  width: 20vw;
  position: absolute;
  top: 60vh;
  left: 5vw;
  rotate: -10deg;
}

.plantB {
  width: 10vw;
  position: absolute;
  top: 80vh;
  left: 85vw;
  rotate: 20deg;
  transform: scaleX(-1);
}

.video {
  width: 100vw;
  height: 100vh;
}

video {
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  opacity: 0.3;
}
</style>
