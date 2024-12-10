<script setup lang="ts">
import MemberCommonSection from '@/components/MemberCommonSection.vue';
import MemberMusicStreamsSection from '@/components/MemberMusicStreamsSection.vue';
import MemberCreditsComponent from '@/components/MemberCreditsComponent.vue';
import LucienAnimation from '@/components/LucienAnimation.vue';
import IntroComponent from '@/components/IntroComponent.vue';
</script>

<template>
  <main>
    <IntroComponent memberName="Lucien" class="lucien-section"></IntroComponent>
    <LucienAnimation class="animation"></LucienAnimation>
    <MemberCommonSection memberName="Lucien" class="lucien-section"></MemberCommonSection>
    <MemberMusicStreamsSection memberName="Lucien" class="lucien-section layout-1"></MemberMusicStreamsSection>
    <MemberCreditsComponent memberName="Lucien" class="lucien-section"></MemberCreditsComponent>
  </main>
</template>


<style scoped>
.lucien-section {
  font-family: 'Cormorant Garamond';
}

.animation {
  position: absolute;
  top: 0;
}
</style>