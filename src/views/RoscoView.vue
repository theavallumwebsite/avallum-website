<script setup lang="ts">
import MemberCommonSection from '@/components/MemberCommonSection.vue';
import MemberMusicStreamsSection from '@/components/MemberMusicStreamsSection.vue';
import MemberCreditsComponent from '@/components/MemberCreditsComponent.vue';
import IntroComponent from '@/components/IntroComponent.vue';
import RoscoIntroComponent from '@/components/RoscoIntroComponent.vue';
</script>


<template>
  <main>
    <IntroComponent memberName="Rosco" class="rosco-section"></IntroComponent>
    <!-- <RoscoIntroComponent class="animation rosco-section"></RoscoIntroComponent> -->
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

.rosco-section {
  font-family: 'Quicksand';
}

.rosco-section h2 {
  font-family: 'Sedgwick Ave Display';
  color: #FF0E7C;
}



/* .rosco-section h2::after,
.rosco-section h2::before {
  content: none;
} */
</style>