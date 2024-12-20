<script setup lang="ts">
import MemberCommonSection from '@/components/MemberPages/MemberCommonSection.vue';
import MemberMusicStreamsSection from '@/components/MemberPages/MemberMusicStreamsSection.vue';
import MemberCreditsComponent from '@/components/MemberPages/MemberCreditsComponent.vue';
import IntroComponent from '@/components/MemberPages/IntroComponent.vue';

</script>


<template>
  <main>
    <IntroComponent memberName="Rosco" class="rosco-section"></IntroComponent>

    <MemberCommonSection memberName="Rosco" class="rosco-section"></MemberCommonSection>
    <MemberMusicStreamsSection memberName="Rosco" class="rosco-section layout-2"></MemberMusicStreamsSection>
    <MemberCreditsComponent memberName="Rosco" class="rosco-section"></MemberCreditsComponent>
  </main>
</template>

<style scoped>
.animation {
  position: absolute;
  top: 0;
  z-index: 997;
}



/* .rosco-section h2::after,
.rosco-section h2::before {
  content: none;
} */
</style>

<style>
.rosco-section {
  font-family: 'Quicksand';
}

.rosco-section h2 {
  font-family: 'Sedgwick Ave Display';
  color: #FF0E7C;
  filter: drop-shadow(3px 3px 0px white);
}
</style>