<script setup lang="ts">
import CassianAnimation from '@/components/CassianAnimation.vue'
import MemberCommonSection from '@/components/MemberCommonSection.vue';
import MemberMusicStreamsSection from '@/components/MemberMusicStreamsSection.vue';
import MemberCreditsComponent from '@/components/MemberCreditsComponent.vue';
import IntroComponent from '@/components/IntroComponent.vue';




</script>

<template>
  <main>
    <IntroComponent memberName="Cassian" class="cassian-section"></IntroComponent>
    <CassianAnimation class="animation cassian-section"></CassianAnimation>
    <MemberCommonSection memberName="Cassian" class="cassian-section"></MemberCommonSection>
    <MemberMusicStreamsSection memberName="Cassian" class="cassian-section layout-1"></MemberMusicStreamsSection>
    <MemberCreditsComponent memberName="Cassian" class="cassian-section"></MemberCreditsComponent>
  </main>

</template>

<style scoped>
.star {
  stroke: #DFA67D;
  stroke-width: 2px;
  position: relative;
  width: 50px;
}

.star path {
  fill: #146665;
}
</style>

<style>
.cassian-section {
  font-family: 'Cormorant Garamond';
}

.cassian-section.animation {
  position: absolute;
  top: 0;
  z-index: 997;
}



.cassian-section .hastag {
  color: #146665;
}

.cassian-section h2::after,
.cassian-section h2::before {
  content: none;
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
</style>