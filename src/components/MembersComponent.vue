<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()


function nagivateTo(member: string) {
  router.push(`/${member}`)
}
</script>

<template>
  <section id="members" class="scroll">
    <img src="../assets/stars.jpg" alt="" />
    <h2>Members</h2>
    <div class="members-list">
      <div class="gale" @click="nagivateTo('galegalleon')">
        <h3>Gale Galleon 🍻</h3>
      </div>
      <div class="cassian" @click="nagivateTo('cassianfloros')">
        <h3>Cassian Floros 🌿</h3>
      </div>
      <div class="lucien" @click="nagivateTo('lucienlunaris')">
        <h3>Lucien Lunaris 🎸</h3>
      </div>
      <div class="zander" @click="nagivateTo('zandernetherbrand')">
        <h3>Zander Netherbrand ♈️</h3>
      </div>
      <div class="rosco" @click="nagivateTo('roscograves')">
        <h3>Rosco Graves 🕹️</h3>
      </div>
    </div>
  </section>
</template>

<style>
#members {
  background: linear-gradient(black, transparent);
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
  position: relative;
  top: 85%;
  margin-left: 20px;
}

#members img {
  display: inline;
  position: absolute;
  top: 0;
  mix-blend-mode: multiply;
  filter: saturate(0);
  opacity: 0.5;
}

.members-list {
  display: flex;
  justify-content: space-around;
  overflow-x: auto;
  position: relative;
  z-index: 1;
  height: auto;
  padding: 40px;
}

.members-list>div {
  /* display: flex; */
  height: 420px;
  width: 300px;
  aspect-ratio: 16 / 9;
  margin: 0px 20px;
  border: 1px solid gold;
  border-radius: 10px;
  transition:
    transform 0.3s,
    filter 0.3s;
}

.members-list div:hover {
  transform: scale(1.1);
  filter: drop-shadow(0px 0px 10px black);
  z-index: 2;
}

.members-list .gale {
  background: linear-gradient(transparent, black), url('../assets/gale_portrait.webp'), #f5c34c;
  background-position: center bottom;
  background-size: contain;
  background-repeat: no-repeat;
}

.members-list .cassian {
  background: linear-gradient(transparent, black), url('../assets/cassian_floros_portrait.webp'),
    #50c878;
  background-position: center bottom;
  background-size: contain;
  background-repeat: no-repeat;
}

.members-list .lucien {
  background: linear-gradient(transparent, black), url('../assets/lucien_lunaris_portrait.webp'),
    #bb0f28;
  background-position: center bottom;
  background-size: contain;
  background-repeat: no-repeat;
}

.members-list .zander {
  background: linear-gradient(transparent, black), url('../assets/zander_netherbrand_portrait.webp'),
    #9932cc;
  background-position: center bottom;
  background-size: contain;
  background-repeat: no-repeat;
}

.members-list .rosco {
  background: linear-gradient(transparent, black), url('../assets/rosco_graves_portrait.webp'),
    #fa1c9a;
  background-position: center bottom;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
