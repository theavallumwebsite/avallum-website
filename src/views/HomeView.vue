<script setup lang="ts">
import StreamingComponent from '@/components/StreamingComponent.vue'
import MusicComponent from '@/components/MusicComponent.vue'
import MembersComponent from '@/components/MembersComponent.vue'
import HeroComponent from '@/components/HeroComponent.vue'
import BirthdayComponent from '@/components/BirthdayComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
// @ts-ignore
import MerchComponent from '@/components/MerchComponent.vue';



</script>

<template>
  <main>
    <HeroComponent></HeroComponent>
    <MembersComponent></MembersComponent>
    <StreamingComponent></StreamingComponent>
    <MusicComponent></MusicComponent>
    <BirthdayComponent></BirthdayComponent>
    <MerchComponent></MerchComponent>
    <FooterComponent></FooterComponent>
  </main>
</template>
