<script setup lang="ts">
import CassianAnimation from '@/components/CassianAnimation.vue'
import MemberCommonSection from '@/components/MemberCommonSection.vue';
import MemberMusicStreamsSection from '@/components/MemberMusicStreamsSection.vue';
import MemberCreditsComponent from '@/components/MemberCreditsComponent.vue';
import IntroComponent from '@/components/IntroComponent.vue';
import { onMounted } from 'vue';

function duplicateH2() {
  const headings = document.querySelectorAll('h2');


  headings.forEach((heading) => {
    const headingElement = heading as HTMLElement;
    const clonedHeading = headingElement.cloneNode(true) as HTMLElement;
    clonedHeading.classList.add('duplicated');
    headingElement.parentNode?.insertBefore(clonedHeading, headingElement.nextSibling);
    // headingElement.appendChild(clonedHeading);
  });
}


// onMounted(() => (
//   duplicateH2()
// ))
</script>

<template>
  <main>
    <IntroComponent memberName="Cassian" class="cassian-section"></IntroComponent>
    <CassianAnimation class="animation"></CassianAnimation>
    <MemberCommonSection memberName="Cassian" class="cassian-section"></MemberCommonSection>
    <MemberMusicStreamsSection memberName="Cassian" class="cassian-section layout-1"></MemberMusicStreamsSection>
    <MemberCreditsComponent memberName="Cassian" class="cassian-section"></MemberCreditsComponent>
  </main>

</template>

<style scoped>
.animation {
  position: absolute;
  top: 0;
  z-index: 998;
}

.star {
  stroke: #DFA67D;
  stroke-width: 2px;
  position: relative;
  width: 50px;
}

.star path {
  fill: #146665;
}

h2.duplicated,
.cassian-section h2.duplicated {
  font-family: "Neonderthaw", serif;
  color: #DFA67D;
  position: relative;
  opacity: 0.5;
  font-weight: 300;
  margin-top: -50px;
}
</style>

<style>
.cassian-section .hastag {
  color: #146665;
}
</style>