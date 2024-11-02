<script setup lang="ts"></script>

<template>
  <section id="hero">
    <div class="img-container">
      <img src="../assets/avallum-hero.webp" />
    </div>

    <p>
      Avallum is a five-person vtuber group created by
      <a href="https://firststage-pro.com/en/">First Stage Production</a>.
    </p>
    <p>Together, they're searching for <i>Avallum</i>.</p>
    <a href="#members" class="hero-a"><h2>Enter</h2></a>
  </section>
</template>

<style>
#hero {
  height: 88vh;
  text-align: center;
  position: relative;
  /* top: -16vh; */
  display: flex;
  flex-direction: column;
}

#hero img {
  max-width: 100%;
  height: auto;
}

#hero p > a {
  font-weight: 700;
}

.hero-a {
  margin-top: auto;
}
</style>
