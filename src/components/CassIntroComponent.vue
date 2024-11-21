<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ref } from 'vue'

const color = ref('white')

function leafAnimation() {
  gsap.fromTo(
    '#leaf',
    {
      x: 400,
      y: -400,
      rotation: 0,
      opacity: 1
    },
    {
      x: -500,
      y: 1000,
      rotation: 180,
      duration: 2,
      opacity: 0,
      ease: 'power1.inOut',
      onComplete: () => {
        const animationElement = document.querySelector('.animation')
        if (animationElement instanceof HTMLElement) {
          animationElement.style.display = 'none'
        }
      }
    }
  )
}

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
  leafAnimation()
  lightrayAnimation()
  particlesAnimation()

})

</script>

<template>
  <section id="cassian-intro">
    <!-- <div class="animation">
      <img id="leaf" src="../assets/leaf.svg" alt="leaf">
    </div> -->

    <div class="intro">
      <div class="particles-container"></div>

      <div class="image">
        <img src="../assets/cassian-model.webp" alt="" />
        <div class="image-shadow"></div>
      </div>

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

      <div class="text">
        <div class="name">
          <p>🌿✨</p>
          <h2>Cassian Floros</h2>
          <h2 class="title-shadow">Cassian Floros</h2>
          <h3>カシアン・フロロス</h3>
        </div>

        <div class="tags-list">
          <ul>
            <li>Elf</li>
            <li>1000+ years old</li>
          </ul>
        </div>

        <div class="hastags">
          <ul>
            <li><b>Live:</b> #BroadCASSt</li>
            <li><b>Art:</b> #Cassthetic</li>
            <li><b>Clips & Memes:</b> #ROFLoros</li>
            <li><b>Assets & Thumbnails:</b> #Cassets</li>
          </ul>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur. Hendrerit erat urna egestas arcu. Elementum
          fringilla venenatis commodo morbi turpis amet varius. In viverra egestas in ullamcorper
          massa risus amet. Est pulvinar donec dignissim massa. Sapien morbi est nisi ipsum eget
          sit. Sagittis lacus aliquet feugiat ridiculus. A faucibus nibh enim nisl sed varius
          sodales. Elementum scelerisque suscipit a quis.
        </p>

        <div class="icons">
          <i class="bi bi-youtube"></i>
          <i class="bi bi-twitter-x"></i>
        </div>

        <div class="mascot">
          <p>This is a dewdrop!</p>
          <img src="../assets/dewdrops.gif" alt="" class="mascot" />
        </div>
      </div>
    </div>

    <div class="spacer"></div>
  </section>
</template>

<style scoped>
h2::after,
h2::before {
  content: none;
}

#cassian-intro {
  position: relative;
  /* overflow: visible; */
  font-family: 'Cormorant Garamond';
  height: calc(100vh + 15px);
  top: -115px;
  box-sizing: border-box;

}

.animation {
  width: 100vw;
  height: 100%;
  background: linear-gradient(#00adb6, #c8d5da);
  box-sizing: border-box;
}

ul {
  list-style-type: none;
  display: flex;
}

b {
  color: #146665;
}

.intro {
  position: relative;
  display: flex;
  flex-direction: row;
  background: #eaeaea;
  color: black;
  padding: 10px;
  height: 100%;
  padding-top: 145px;
  box-sizing: border-box;
  align-items: center;

}

.spacer {
  height: 115px;
  background: #eaeaea;
  position: relative;
  z-index: 999;
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

.lightray-animation {
  position: relative;
  top: -300px;
}

.lightray-container {
  position: absolute;
  left: -365px;
  top: 5px;
  z-index: 1;
  width: 500px;
  height: 900px;
  transform: rotate(55deg);
  transform-origin: 50% 0%;
  /* border: 1px solid red; */
}

.container-2 {
  left: -390px;
}

.container-2 .lightray {
  width: 20px;
}

.container-2 .sun {
  top: 36px;
  left: -15px;
  filter: blur(47px);
}

.container-2 .sun-a {
  top: 50px;
}

.sun {
  position: absolute;
  top: 50px;
  left: -175px;
  /* width: 200px;
  height: 200px; */
  width: 300px;
  height: 200px;
  background: linear-gradient(to right, white, transparent);
  clip-path: polygon(0% 50%, 100% 0%, 100% 100%, 0% 100%);
  transform: rotate(5deg);
}

/* .sun-a {
  top: 40px;
  left: -55px;
  filter: blur(30px);
} */

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

/* light animation end */

.image {
  position: relative;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
}

.image-shadow {
  width: 300px;
  height: 80px;
  background: lightgray;
  border-radius: 50%;
  position: relative;
  top: -70px;
  z-index: -1;
  mix-blend-mode: multiply;
}

.text {
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  justify-content: space-around;
  width: 60%;
}

p {
  text-align: justify;
}

.name {
  text-align: center;
}

.name p {
  font-size: 60px;
  margin: 0px;
  text-align: center;
}

h2 {
  font-family: 'Abhaya Libre', serif;
  font-weight: bold;
  /* font-family: "Neonderthaw", cursive; */
  background: linear-gradient(#7a4d20, #dfa67d, #7a4d20);
  background-clip: text;
  font-size: 60px;
  margin: 0px;
  z-index: 999;
}

.title-shadow {
  font-family: 'Neonderthaw', cursive;
  position: absolute;
  top: 90px;
  right: 100px;
  opacity: 0.5;
  font-weight: 100;
}

h3 {
  text-align: center;
  margin: 0px;
  color: #146665;
  font-size: 30px;
  margin-top: 15px;
}

.tags-list ul {
  justify-content: center;
}

.tags-list li {
  font-weight: bold;
  border: 1px solid #ca7726;
  padding: 5px;
  border-radius: 5px;
  margin: 0px 5px;
}

.hastags ul {
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.icons {
  font-size: 30px;
  color: #146665;
  text-align: center;
}

i {
  margin: 5px;
}

.mascot {
  /* margin: auto; */
  text-align: center;
}

.mascot img {
  width: 150px;
  height: 150px;
  /* background: grey; */
  margin: auto;
  text-align: center;
}

.mascot p {
  text-align: center;
}
</style>

<style>
.particle {
  position: relative;
  background: white;
  border-radius: 50%;
  z-index: 999;
  filter: blur(2px);
}
</style>
