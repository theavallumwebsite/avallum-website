<template>
  <section id="cassian-animation">
    <div class="light"></div>
    <div class="particles-container"></div>
    <div class="bigparticles-container"></div>
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



.video {
  width: 100vw;
  height: auto;
}

video {
  object-fit: cover;
  width: 100vw;
  opacity: 0.3;
}
</style>
