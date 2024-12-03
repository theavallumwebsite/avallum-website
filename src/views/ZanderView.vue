<script setup lang="ts">
import MemberCommonSection from '@/components/MemberCommonSection.vue';
import MemberMusicStreamsSection from '@/components/MemberMusicStreamsSection.vue';
import MemberCreditsComponent from '@/components/MemberCreditsComponent.vue';
import IntroComponent from '@/components/IntroComponent.vue';
import ZanderIntroComponent from '@/components/ZanderIntroComponent.vue';
</script>


<template>
  <main>
    <IntroComponent memberName="Zander" class="zander-section"></IntroComponent>
    <ZanderIntroComponent class="animation"></ZanderIntroComponent>
    <MemberCommonSection memberName="Zander" class="zander-section"></MemberCommonSection>
    <MemberMusicStreamsSection memberName="Zander" class="zander-section layout-2"></MemberMusicStreamsSection>
    <MemberCreditsComponent memberName="Zander" class="zander-section"></MemberCreditsComponent>
  </main>
</template>

<style>
.animation {
  position: absolute;
  top: 0;
  z-index: 998;
}
</style>
