<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const headerColor = computed(() => {
  if (route.name === 'Cassian') {
    return { color: '#146665' }
  }
  if (route.name === 'Gale') {
    return { color: 'red' }
  }
  if (route.name === 'Lucien') {
    return { color: 'white' }
  }
  if (route.name === 'Zander') {
    return { color: '#146665' }
  }
  if (route.name === 'Rosco') {
    return { color: '#146665' }
  }
  return {}
})
</script>

<template>
  <header :style="headerColor">
    <div class="wrapper">
      <p>This website is not affiliated with First Stage Production.</p>
      <nav>
        <RouterLink to="/" :style="headerColor">
          <h1>Avallum World</h1>
          <!-- <p>A Vtuber group by FSP EN</p> -->
        </RouterLink>
        <div class="nav-sections" v-if="route.name === 'home'">
          <a href="#members">Members</a>
          <a href="#streams">Streams</a>
          <a href="#music">Music</a>
          <a href="#birthday">Birthdays</a>
        </div>

        <div v-else class="nav-sections member-header">
          <RouterLink to="/galegalleon" :style="headerColor">Gale</RouterLink>
          <RouterLink to="/cassianfloros" :style="headerColor">Cassian</RouterLink>
          <RouterLink to="/lucienlunaris" :style="headerColor">Lucien</RouterLink>
          <RouterLink to="/zandernetherbrand" :style="headerColor">Zander</RouterLink>
          <RouterLink to="/roscograves" :style="headerColor">Rosco</RouterLink>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  position: relative;
  z-index: 999;
}

.wrapper {
  position: relative;
  z-index: 1;
}

.wrapper p {
  font-size: small;
  text-align: center;
}

nav {
  font-family: 'Gloock';
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  padding: 0px 5px;
}

.nav-sections {
  display: flex;
  gap: 30px;
}

nav p {
  font-family: 'Montserrat';
}

nav h1 {
  margin: 2px 0px;
}

.cassian-header {
  color: #146665;
}

.gale-header {
  color: #146665;
}
</style>
