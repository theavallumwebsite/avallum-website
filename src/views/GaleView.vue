<script setup lang="ts">
import MemberCommonSection from '@/components/MemberPages/MemberCommonSection.vue';
import MemberMusicStreamsSection from '@/components/MemberPages/MemberMusicStreamsSection.vue';
import MemberCreditsComponent from '@/components/MemberPages/MemberCreditsComponent.vue';
import IntroComponent from '@/components/MemberPages/IntroComponent.vue';
import { ref } from 'vue';
import data from '../../data.json'

const font = ref(data.channels.Gale.font)

</script>

<template>
  <main class="cursor">
    <IntroComponent memberName="Gale" class="gale-section"></IntroComponent>
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
  font-family: v-bind(font);
  color: transparent;
  background: linear-gradient(#E5C373, #AC8246, #C0A054);
  background-clip: text;
  -webkit-text-stroke: 1px #986721;
}

.gale-section {
  font-family: 'Quicksand';
}
</style>

<style scoped>
.cursor {
  cursor: url('../assets/pipsqueak-cursor.png'), auto;
}
</style>