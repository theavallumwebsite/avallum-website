<script setup lang="ts">
import { useRouter } from 'vue-router'
import gsap from 'gsap';
import { onMounted } from 'vue';

const router = useRouter()

function nagivateTo(member: string) {
  router.push(`/${member}`)
}



</script>

<template>
  <section id="members">
    <h2>Members</h2>
    <div class="members-list">
      <div @click="nagivateTo('galegalleon')" class="container">

        <div class="gale">
          <h3>Gale Galleon 🍻</h3>
        </div>
        <img src="../assets/pipsqueak.png" alt="" class="mascot">
      </div>
      <div class="container">
        <div class="cassian" @click="nagivateTo('cassianfloros')">
          <h3>Cassian Floros 🌿</h3>
        </div>
        <img src="../assets/dewdrop.png" alt="" class="mascot">
      </div>
      <div class="container">

        <div class="lucien" @click="nagivateTo('lucienlunaris')">
          <h3>Lucien Lunaris 🎸</h3>
        </div>
        <img src="../assets/dewdrop.png" alt="" class="mascot">
      </div>
      <div class="container">

        <div class="zander" @click="nagivateTo('zandernetherbrand')">
          <h3>Zander Netherbrand ♈️</h3>
        </div>
        <img src="../assets/netherling.png" alt="" class="mascot">
      </div>
      <div class="container">
        <div class="rosco" @click="nagivateTo('roscograves')">
          <h3>Rosco Graves 🕹️</h3>
        </div>
        <img src="../assets/roscal.png" alt="" class="mascot">
      </div>
    </div>
  </section>
</template>

<style scoped>
#members {
  background: linear-gradient(rgba(0, 0, 0, 0.99), rgba(38, 38, 38, 0.96)), url('/avallum-website/src/assets/black-stars.png');
  background-blend-mode: darken;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#members h2 {
  text-align: center;
  position: relative;
  z-index: 1;
  margin-bottom: 100px;
  margin-left: auto;
  margin-right: auto;
}

#members h3 {
  font-family: 'Gloock';
  font-size: 1rem;
}


.members-list {
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  z-index: 1;
}

.container {
  position: relative;
  z-index: 999;
  width: 100%;
  max-width: 400px;
  padding-bottom: 30%;
  border: 1px solid burlywood;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 1vw;
}

.container>div {
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  text-align: center;
  overflow: hidden;
  border-radius: 10px;
}

.container>div h3 {
  margin: 0;
  padding: 10px 0;
  text-overflow: ellipsis;
  /* white-space: nowrap; */
  overflow: hidden;
}


.container:hover {
  animation: scale 0.3s alternate linear forwards;
}

@keyframes scale {
  100% {
    transform: scale(1.1);
  }
}


.mascot {
  /* width: 5vw; */
  width: 10vw;
  position: absolute;
  top: 10px;
  z-index: 998;
  opacity: 0;
  rotate: -10deg;
  transform: translate(0px, -50px);
}

.container:hover .mascot {
  animation: mascotSlideUp alternate 0.3s forwards;
}

@keyframes mascotSlideUp {
  100% {
    width: 10vw;
    opacity: 1;
    transform: translate(-10px, -120px);
    z-index: 999;
  }
}

.members-list .gale {
  background: linear-gradient(transparent, black), url('../assets/gale_portrait.webp'), #f5c34c;
  background-position: center bottom;
  background-size: cover;
  background-repeat: no-repeat;
}

.members-list .cassian {
  background: linear-gradient(transparent, black), url('../assets/cassian_floros_portrait.webp'),
    #50c878;
  background-position: center bottom;
  background-size: cover;
  background-repeat: no-repeat;
}

.members-list .lucien {
  background: linear-gradient(transparent, black), url('../assets/lucien_lunaris_portrait.webp'),
    #bb0f28;
  background-position: center bottom;
  background-size: cover;
  background-repeat: no-repeat;
}

.members-list .zander {
  background: linear-gradient(transparent, black), url('../assets/zander_netherbrand_portrait.webp'),
    #9932cc;
  background-position: center bottom;
  background-size: cover;
  background-repeat: no-repeat;
  text-wrap: wrap;
}

.members-list .rosco {
  background: linear-gradient(transparent, black), url('../assets/rosco_graves_portrait.webp'),
    #fa1c9a;
  background-position: center bottom;
  background-size: cover;
  background-repeat: no-repeat;
}


@media screen and (max-width: 768px) {
  .members-list {
    flex-wrap: wrap;

  }

  #members h2 {
    margin: auto;
  }

  .container {
    height: 10vh;
    width: 33vw;
  }
}
</style>
