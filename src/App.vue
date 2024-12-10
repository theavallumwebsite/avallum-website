<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import router from './router';
import AOS from 'aos';
import 'aos/dist/aos.css';


const route = useRoute()

const headerClass = computed(() => {
  if (route.name === 'Cassian') {
    return 'cassian-header';
  }
  if (route.name === 'Gale') {
    return 'gale-header';
  }
  if (route.name === 'Lucien') {
    return 'lucien-header';
  }
  if (route.name === 'Zander') {
    return 'zander-header';
  }
  if (route.name === 'Rosco') {
    return 'rosco-header';
  }
  return '';
});


const sections = ref<HTMLElement[]>([]);
const currentSectionIndex = ref(0);
let lastScrollY = 0;



function onScroll() {
  const isScrollingDown = window.scrollY > lastScrollY; // Detect if scrolling down
  const isScrollingUp = window.scrollY < lastScrollY; // Detect if scrolling up
  lastScrollY = window.scrollY; // Update last scroll position

  if (isScrollingDown) {
    scrollToNextSection();
  }

  if (isScrollingUp) {
    scrollToPreviousSection();
  }
}

function scrollToNextSection() {
  const nextIndex = currentSectionIndex.value + 1;

  if (nextIndex < sections.value.length) {
    const nextSection = sections.value[nextIndex];
    const nextSectionMiddle = nextSection.offsetTop + nextSection.offsetHeight / 2;

    if (window.scrollY + window.innerHeight >= nextSectionMiddle) {
      scrollToSection(nextIndex);
    }
  }
}

function scrollToPreviousSection() {
  const prevIndex = currentSectionIndex.value - 1;

  if (prevIndex >= 0) {
    const prevSection = sections.value[prevIndex];
    const prevSectionMiddle = prevSection.offsetTop + prevSection.offsetHeight / 2;

    if (window.scrollY <= prevSectionMiddle) {
      scrollToSection(prevIndex);
    }
  }
}

function scrollToSection(index: number) {
  if (index >= sections.value.length || index < 0) return;

  const section = sections.value[index];
  const sectionMiddle = section.offsetTop + section.offsetHeight / 2 - window.innerHeight / 2;

  window.scrollTo({
    top: sectionMiddle,
    behavior: 'smooth',
  });

  currentSectionIndex.value = index;
}

function initializeScrollBehavior() {
  setTimeout(() => {
    sections.value = Array.from(document.querySelectorAll('section:not(.animation)'));
    window.addEventListener('scroll', onScroll);

  }, 100);
}

function cleanupScrollBehavior() {
  window.removeEventListener('scroll', onScroll);
  sections.value = [];
  currentSectionIndex.value = 0;
}

function aosInitialize() {
  const sections = document.querySelectorAll('section');
  console.log("aos section", sections)

  sections.forEach((section) => {
    section.setAttribute('data-aos', 'slide-up');
  });

  AOS.init()
}

onMounted(() => {
  initializeScrollBehavior()
  setTimeout(() => {
    aosInitialize()
  }, 100)
});


onUnmounted(() => {
  cleanupScrollBehavior();
});

// for view changes 
router.beforeEach((to, from, next) => {
  console.log('Route change detected');
  cleanupScrollBehavior();
  initializeScrollBehavior();
  next();
  setTimeout(() => {
    aosInitialize()
  }, 100)
});



</script>

<template>
  <header :class="headerClass">
    <div class="wrapper">
      <p>This website is not affiliated with First Stage Production.</p>
      <nav>
        <RouterLink to="/" :class="headerClass">
          <h1>Avallum World</h1>
        </RouterLink>

        <div class="nav-sections" v-if="route.name === 'home'">
          <a href="#members">Members</a>
          <a href="#streams">Streams</a>
          <a href="#music">Music</a>
          <a href="#birthday">Birthdays</a>
        </div>

        <div v-else class="nav-sections member-header">
          <RouterLink to="/galegalleon">Gale</RouterLink>
          <RouterLink to="/cassianfloros">Cassian</RouterLink>
          <RouterLink to="/lucienlunaris">Lucien</RouterLink>
          <RouterLink to="/zandernetherbrand">Zander</RouterLink>
          <RouterLink to="/roscograves">Rosco</RouterLink>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  position: absolute;
  z-index: 999;
  width: 100vw;
}

header a,
header p {
  color: white;
}

.wrapper {
  position: relative;
  z-index: 1;
}

.wrapper p {
  font-size: 1vw;
  text-align: center;
}

nav {
  font-family: 'Gloock';
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 5px;
}

.nav-sections {
  display: flex;
  gap: 30px;
}

h1 {
  margin: 2px 0px;
  padding-left: 20px;
}

.gale-header p,
.gale-header a,
.gale-header h1 {
  color: #986721;
  font-family: 'Pirata One';
}

.cassian-header p,
.cassian-header a,
.cassian-header h1 {
  color: white;
  font-family: 'Abhaya Libre';
}

.rosco-header p,
.rosco-header a,
.rosco-header h1 {
  color: white;
  font-family: 'Pixelify Sans';
  filter: drop-shadow(3px 2px 0px darkblue);
}

.zander-header p,
.zander-header a,
.zander-header h1 {
  font-family: 'Damion';
  filter: drop-shadow(0px 0px 1px #CF5CD1);
}

.lucien-header p,
.lucien-header a,
.lucien-header h1 {
  color: white;
  font-family: 'New Rocker';
  -webkit-text-stroke: 0.4px black;
}
</style>
