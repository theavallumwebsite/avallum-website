<script setup lang="ts">
import MemberCommonSection from '@/components/MemberPages/MemberCommonSection.vue';
import MemberMusicStreamsSection from '@/components/MemberPages/MemberMusicStreamsSection.vue';
import MemberCreditsComponent from '@/components/MemberPages/MemberCreditsComponent.vue';
import IntroComponent from '@/components/MemberPages/IntroComponent.vue';
import { ref } from 'vue';
import data from '../../data.json'

const color = ref(data.channels.Cassian.extraColor)
const font = ref(data.channels.Cassian.font)



</script>

<template>
  <main class="cursor">
    <IntroComponent memberName="Cassian" class="cassian-section"></IntroComponent>

    <MemberCommonSection memberName="Cassian" class="cassian-section"></MemberCommonSection>
    <MemberMusicStreamsSection memberName="Cassian" class="cassian-section layout-1"></MemberMusicStreamsSection>
    <MemberCreditsComponent memberName="Cassian" class="cassian-section"></MemberCreditsComponent>
  </main>

</template>

<style scoped>
.cursor {
  cursor: url('../assets/dewdrop-cursor.png'), auto;
}

.star {
  stroke: #DFA67D;
  stroke-width: 2px;
  position: relative;
  width: 50px;
}

.star path {
  fill: v-bind(color);
}
</style>

<style>
.cassian-section {
  font-family: 'Cormorant Garamond';
}

.cassian-section.animation {
  position: absolute;
  top: 0;
  z-index: 997;
}



.cassian-section .hastag {
  color: v-bind(color);
}

.cassian-section h2::after,
.cassian-section h2::before {
  content: none;
}

.star {
  stroke: #DFA67D;
  stroke-width: 2px;
  position: relative;
  width: 50px;
}

.star path {
  fill: v-bind(color);
}
</style>