<script setup lang="ts">
import MemberCommonSection from '@/components/MemberPages/MemberCommonSection.vue';
import MemberMusicStreamsSection from '@/components/MemberPages/MemberMusicStreamsSection.vue';
import MemberCreditsComponent from '@/components/MemberPages/MemberCreditsComponent.vue';
import IntroComponent from '@/components/MemberPages/IntroComponent.vue';
import { ref } from 'vue';
import data from '../../data.json'

const titleColor = ref(data.channels.Lucien.titleColor)
const color = ref(data.channels.Lucien.color)
const font = ref(data.channels.Lucien.font)

</script>

<template>
  <main>
    <IntroComponent memberName="Lucien" class="lucien-section"></IntroComponent>
    <MemberCommonSection memberName="Lucien" class="lucien-section"></MemberCommonSection>
    <MemberMusicStreamsSection memberName="Lucien" class="lucien-section layout-1"></MemberMusicStreamsSection>
    <MemberCreditsComponent memberName="Lucien" class="lucien-section"></MemberCreditsComponent>
  </main>
</template>

<style>
.lucien-section h2 {
  font-family: v-bind(font);
  background: v-bind(titleColor);
  background-clip: text;
  -webkit-text-stroke: 1px v-bind(color);
}

.lucien-section {
  font-family: 'Cormorant Garamond';
}
</style>
