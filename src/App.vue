<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
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
        <div class="nav-sections">
          <a href="#members">Members</a>
          <a href="#streams">Streams</a>
          <a href="#music">Music</a>
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
