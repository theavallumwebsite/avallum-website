<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'

const route = useRoute()


</script>

<template>
  <header>
    <div class="wrapper">
      <p>This website is not affiliated with FSP.</p>
      <nav>
        <RouterLink to="/">
          <h1>Avallum</h1>
          <p>A Vtuber group by FSP EN</p>
        </RouterLink>
        <div class="nav-sections" v-if="route.name === 'home'">
          <a href="#members">Members</a>
          <a href="#streams">Streams</a>
          <a href="#music">Music</a>
        </div>

        <div v-else class="nav-sections member-header">
          <RouterLink to="/galegalleon">Gale</RouterLink>
          <RouterLink to="/cassianfloros">Cassian</RouterLink>
          <RouterLink to="/lucienlunaris">Lucien</RouterLink>
          <RouterLink to="/zandernetherbrand">Zander</RouterLink>
          <RouterLink to="/roscograves">Rosco</RouterLink>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
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
</style>
