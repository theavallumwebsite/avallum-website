<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import router from './router';
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
let isHashNavigation = false;


function onScroll() {
  if (isHashNavigation) return

  const isScrollingDown = window.scrollY > lastScrollY; // Detect if scrolling down
  const isScrollingUp = window.scrollY < lastScrollY; // Detect if scrolling up
  lastScrollY = window.scrollY; // Update last scroll position

  if (isScrollingDown) {
    scrollToSectionByDirection(1);
  }

  if (isScrollingUp) {
    scrollToSectionByDirection(-1);
  }
}

function scrollToSectionByDirection(direction: number) {
  const targetIndex = currentSectionIndex.value + direction;

  if (targetIndex >= 0 && targetIndex < sections.value.length) {
    const targetSection = sections.value[targetIndex];
    const targetSectionMiddle = targetSection.offsetTop + targetSection.offsetHeight / 2;

    if (
      (direction === 1 && window.scrollY + window.innerHeight >= targetSectionMiddle) ||
      (direction === -1 && window.scrollY <= targetSectionMiddle)
    ) {
      scrollToSection(targetIndex);
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
    sections.value = Array.from(document.querySelectorAll('section:not(.animation):not(.footer)'));
    window.addEventListener('scroll', onScroll);
  }, 100);
}

function cleanupScrollBehavior() {
  window.removeEventListener('scroll', onScroll);
  sections.value = [];
  currentSectionIndex.value = 0;
}

function scrollTo(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}


window.addEventListener('hashchange', () => {
  isHashNavigation = true;
});

onMounted(() => {
  // initializeScrollBehavior()

});


onUnmounted(() => {
  // cleanupScrollBehavior();
});


// router.beforeEach((to, from, next) => {
//   cleanupScrollBehavior();
//   initializeScrollBehavior();
//   next();

// });



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
          <a @click.prevent="scrollTo('members')">Members</a>
          <a @click.prevent="scrollTo('streams')">Streams</a>
          <a @click.prevent="scrollTo('music')">Music</a>
          <a @click.prevent="scrollTo('birthday')">Birthdays</a>
          <a @click.prevent="scrollTo('merch')">Merch</a>
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
  flex-wrap: wrap;
  gap: 3vw;
}

h1 {
  margin: 2px 0px;
  padding-left: 20px;
}

.gale-header p,
.gale-header a,
.gale-header h1 {
  font-family: 'Pirata One';
  color: transparent;
  background: linear-gradient(#E5C373, #AC8246, #C0A054);
  background-clip: text;
  -webkit-text-stroke: 0.3px #613a0a;
}

.cassian-header p,
.cassian-header a,
.cassian-header h1 {
  color: white;
  font-family: 'Abhaya Libre';
}

.cassian-header h1 {
  background: linear-gradient(#7A4D20, #DFA67D, #7A4D20);
  background-clip: text;
  color: transparent;
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

a:hover {
  animation: scale 0.2s alternate linear forwards;
}

@keyframes scale {
  100% {
    transform: scale(1.1);
  }
}

@media screen and (max-width: 768px) {

  header {
    font-size: 80%;
  }

  h1 {
    padding-left: 0px;
    /* text-align: center; */
  }

  nav {
    padding: 0px 10px;
  }

  .nav-sections {
    justify-content: flex-end;
    align-items: flex-end;
    gap: 3vw;

  }

  .wrapper p {
    font-size: 2.2vw;
  }
}
</style>
