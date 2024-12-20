<script setup lang="ts">
import MemberCommonSection from '@/components/MemberPages/MemberCommonSection.vue';
import MemberMusicStreamsSection from '@/components/MemberPages/MemberMusicStreamsSection.vue';
import MemberCreditsComponent from '@/components/MemberPages/MemberCreditsComponent.vue';
import IntroComponent from '@/components/MemberPages/IntroComponent.vue';
</script>

<template>
  <main>
    <IntroComponent memberName="Lucien" class="lucien-section"></IntroComponent>
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