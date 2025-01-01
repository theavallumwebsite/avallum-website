<script setup lang="ts">
function scrollTo(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<template>
  <section id="hero">
    <div class="img-container">
      <!-- <img src="../assets/avallum-hero.webp" /> -->
    </div>

    <p>
      Avallum is a five-person vtuber group created by
      <a href="https://firststage-pro.com/en/">First Stage Production</a>.
    </p>
    <p>They debuted on <b>January 28th, 2024</b>.</p>

    <a @click.prevent="scrollTo('members')" class="hero-a">
      <h2>Discover more about them</h2>
    </a>
  </section>
</template>

<style>
#hero {
  height: 100Vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  background: linear-gradient(transparent, black);
  border-bottom: 0.5px solid gold;

}

.img-container {
  height: 80vh;
  overflow: hidden;
  background: linear-gradient(rgba(0, 0, 0, 0.522), transparent), url('../assets/avallum-hero.webp');
  background-size: cover;
  background-position: center top;

}

#hero img {
  max-width: 100%;
  height: auto;

}

#hero p>a {
  font-weight: 700;
}

.hero-a {
  margin-top: auto;
}

@media screen and (max-width: 768px) {
  .img-container {
    height: 30vh;
    margin-top: 11vh;
    margin-bottom: 10vh;
  }


  #hero a {
    margin: 0px;
  }
}
</style>
