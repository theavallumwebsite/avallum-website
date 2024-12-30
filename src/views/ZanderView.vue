<script setup lang="ts">
import MemberCommonSection from '@/components/MemberPages/MemberCommonSection.vue';
import MemberMusicStreamsSection from '@/components/MemberPages/MemberMusicStreamsSection.vue';
import MemberCreditsComponent from '@/components/MemberPages/MemberCreditsComponent.vue';
import IntroComponent from '@/components/MemberPages/IntroComponent.vue';
import data from '../../data.json'
import gsap from 'gsap';
import { onMounted, ref } from 'vue';

const titleColor = ref(data.channels.Zander.titleColor)
const font = ref(data.channels.Zander.font)

function neonFlicker() {
  const h2Titles = document.querySelectorAll('h2')

  h2Titles.forEach((h2) => {
    gsap.fromTo((h2),
      {
        filter: 'drop-shadow(0px 0px 0.3rem #c000ca)'

      },
      {
        filter: 'drop-shadow(0px 0px 0rem #c000ca)',
        yoyo: true,
        duration: 1,
        repeat: -1,
        ease: 'power1.inOut'
      }

    )
  })
}

onMounted(() => {
  neonFlicker()
})

</script>


<template>
  <main class="cursor">
    <IntroComponent memberName="Zander" class="zander-section"></IntroComponent>
    <MemberCommonSection memberName="Zander" class="zander-section"></MemberCommonSection>
    <MemberMusicStreamsSection memberName="Zander" class="zander-section layout-2"></MemberMusicStreamsSection>
    <MemberCreditsComponent memberName="Zander" class="zander-section"></MemberCreditsComponent>
  </main>
</template>

<style>
.cursor {
  cursor: url('../assets/netherling-cursor.png'), auto;
}

.animation.zander-section {
  position: absolute;
  top: 0;
  z-index: 998;
}

.zander-section {
  font-family: 'Cormorant Garamond';
}

.zander-section h2::after,
.zander-section h2::before {
  content: none;
}

.zander-section h2 {
  font-family: v-bind(font);
  background: linear-gradient(#900098, #f541ff, #9800a0);
  background-clip: text;
  color: transparent;
  text-shadow: -1px -1px 2px rgba(213, 3, 255, 0.5), 1px 1px 2px rgba(57, 0, 52, 0.6);
  filter: drop-shadow(0px 0px 0.5rem #c831d0);
}
</style>
