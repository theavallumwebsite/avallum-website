<script setup lang="ts">
import MemberCommonSection from '@/components/MemberCommonSection.vue';
import MemberMusicStreamsSection from '@/components/MemberMusicStreamsSection.vue';
import MemberCreditsComponent from '@/components/MemberCreditsComponent.vue';
import IntroComponent from '@/components/IntroComponent.vue';
import GaleIntroComponent from '@/components/GaleIntroComponent.vue';
</script>

<template>
  <main>
    <IntroComponent memberName="Gale" class="gale-section"></IntroComponent>
    <GaleIntroComponent class="animation gale-section"></GaleIntroComponent>
    <MemberCommonSection memberName="Gale" class="gale-section"></MemberCommonSection>
    <MemberMusicStreamsSection memberName="Gale" class="gale-section layout-2"></MemberMusicStreamsSection>
    <MemberCreditsComponent memberName="Gale" class="gale-section"></MemberCreditsComponent>
  </main>
</template>

<style>
.animation.gale-section {
  position: absolute;
  top: 0;
  z-index: 997;
}


.gale-section h2::after,
.gale-section h2::before {
  content: none;
}

.gale-section h2 {
  font-family: 'Pirata One';
  color: transparent;
  background: linear-gradient(#E5C373, #AC8246, #C0A054);
  background-clip: text;
  -webkit-text-stroke: 1px #986721;
}

.gale-section {
  font-family: 'Quicksand';
}
</style>