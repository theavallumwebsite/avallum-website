<script setup lang="ts">
import MemberCommonSection from '@/components/MemberCommonSection.vue';
import MemberMusicStreamsSection from '@/components/MemberMusicStreamsSection.vue';
import MemberCreditsComponent from '@/components/MemberCreditsComponent.vue';
import IntroComponent from '@/components/IntroComponent.vue';
</script>


<template>
  <main>
    <IntroComponent memberName="Rosco" class="rosco-section"></IntroComponent>
    <MemberCommonSection memberName="Rosco" class="rosco-section"></MemberCommonSection>
    <MemberMusicStreamsSection memberName="Rosco" class="rosco-section layout-2"></MemberMusicStreamsSection>
    <MemberCreditsComponent memberName="Rosco" class="rosco-section"></MemberCreditsComponent>
  </main>
</template>

<style>
.rosco-section h2 {
  font-family: 'Sedgwick Ave Display';
  color: #FF0E7C;
}
</style>