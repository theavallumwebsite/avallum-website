<script setup lang="ts">
import MemberCommonSection from '@/components/MemberPages/MemberCommonSection.vue';
import MemberMusicStreamsSection from '@/components/MemberPages/MemberMusicStreamsSection.vue';
import MemberCreditsComponent from '@/components/MemberPages/MemberCreditsComponent.vue';
import IntroComponent from '@/components/MemberPages/IntroComponent.vue';
import data from '../../data.json'
import { ref } from 'vue'

const color = ref(data.channels.Rosco.color)
const font = ref(data.channels.Rosco.font)


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
</style>

<style>
.rosco-section {
  font-family: 'Quicksand';
}

.rosco-section h2 {
  font-family: v-bind(font);
  color: v-bind(color);
  filter: drop-shadow(1px 2px 0px white);
}
</style>