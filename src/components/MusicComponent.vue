<script setup lang="ts">
import { getMusic } from '../../api'
import data from '../../data.json'
import { ref, onMounted } from 'vue'
import { computed } from 'vue'

const allSongs = ref<any[]>([])
const selectedFilter = ref<string | null>(null)

async function getKaraoke() {
  selectedFilter.value = 'karaoke'
  try {
    const karaokePromise = data.IDs.map((channelId) => getMusic(channelId, 'singing'))

    const karaokeResponse = await Promise.all(karaokePromise)

    allSongs.value = []

    karaokeResponse.forEach((response) => {
      if (response.data) {
        allSongs.value.push(...response.data)
      }
    })
  } catch (error) {
    console.log('error karaoke', error)
  }
}

async function getCovers() {
  selectedFilter.value = 'cover'
  try {
    const coverPromise = data.IDs.map((channelId) => getMusic(channelId, 'Music_Cover'))

    const coverResponse = await Promise.all(coverPromise)

    allSongs.value = []

    coverResponse.forEach((response) => {
      if (response.data) {
        allSongs.value.push(...response.data)
      }
    })
  } catch (error) {
    console.log('error covers, error')
  }
}

async function getAllSongs() {
  try {
    const coverPromises = data.IDs.map((channelId) => getMusic(channelId, 'Music_Cover'))
    const karaokePromises = data.IDs.map((channelId) => getMusic(channelId, 'singing'))

    const [coversResponse, karaokeResponse] = await Promise.all([
      Promise.all(coverPromises),
      Promise.all(karaokePromises)
    ])

    coversResponse.forEach((response) => {
      if (response.data) {
        allSongs.value.push(...response.data)
      }
    })

    karaokeResponse.forEach((response) => {
      if (response.data) {
        allSongs.value.push(...response.data)
      }
    })
  } catch (error) {
    console.error('songs error', error)
  }
}

async function getMemberMusic(member: keyof typeof data.channels) {
  if (selectedFilter.value === member) {
    selectedFilter.value = null
    allSongs.value = []
    getAllSongs()
    return
  }
  selectedFilter.value = member
  try {
    const channelId = data.channels[member].id
    const cover = await getMusic(channelId, 'Music_Cover')
    const karaoke = await getMusic(channelId, 'singing')
    console.log(cover, karaoke)
    allSongs.value = []
    allSongs.value.push(...cover.data, ...karaoke.data)
  } catch (error) {
    console.log(error)
  }
}

const filteredSongs = computed(() => {
  return allSongs.value.filter(
    (video) => (video.topic_id === 'Music_Cover' && video.songs) || video.topic_id === 'singing'
  )
})

// add original songs
// add type + member

onMounted(() => {
  getAllSongs()
})
</script>

<template>
  <section id="music" class="scroll">
    <div class="music-top">
      <a href="https://www.youtube.com/watch?v=-WXRrpnYJwA"><img src="../assets/crossing-fates.jpg" alt="" /></a>
      <h2>Music</h2>
      <p>Discover all of Avallum's music!</p>
      <p class="extra">For newly released covers, rememeber to search them directly on Youtube!</p>
    </div>

    <ul class="filter">
      <li @click="getCovers()" :class="{ selected: selectedFilter === 'cover' }">Cover</li>
      <li @click="getKaraoke()" :class="{ selected: selectedFilter === 'karaoke' }">Karaoke</li>
      <li @click="getMemberMusic('Gale')" :class="{ selected: selectedFilter === 'Gale' }">Gale</li>
      <li @click="getMemberMusic('Cassian')" :class="{ selected: selectedFilter === 'Cassian' }">
        Cassian
      </li>
      <li @click="getMemberMusic('Lucien')" :class="{ selected: selectedFilter === 'Lucien' }">
        Lucien
      </li>
      <li @click="getMemberMusic('Zander')" :class="{ selected: selectedFilter === 'Zander' }">
        Zander
      </li>
      <li @click="getMemberMusic('Rosco')" :class="{ selected: selectedFilter === 'Rosco' }">
        Rosco
      </li>
    </ul>

    <div class="music-content">
      <!-- <ul class="header-row">
        <li>Song</li>
        <li>Original artist</li>
        <li>By</li>
        <li>Type</li>
      </ul> -->
      <div>
        <ul class="music-grid">
          <li v-for="video in filteredSongs" :key="video.id" class="song-item">
            <a :href="video.title.toLowerCase().includes('unarchived') &&
                video.title.toLowerCase().includes('unrachived')
                ? ''
                : 'https://www.youtube.com/watch?v=' + video.id
              " target="_blank">
              <!-- For Karaoke (type: 'singing') -->
              <div v-if="video.topic_id === 'singing'" class="song-info">
                <span class="cell">{{ video.title }}</span>
                <span></span>
                <span class="cell center"> {{ video.channel.english_name }}</span>
                <span class="cell center">Karaoke</span>
                <span class="cell"><a v-if="
                  video.title.toLowerCase().includes('unarchived') &&
                  video.title.toLowerCase().includes('unrachived')
                " :href="'https://www.youtube.com/watch?v=' + video.id" target="_blank"><img
                      src="../assets/youtube.png" alt="" class="youtube-logo" /></a></span>
              </div>

              <!-- For Covers (type: 'Music_Cover') -->
              <div v-else-if="video.topic_id === 'Music_Cover' && video.songs" class="song-info">
                <span class="cell" v-for="song in video.songs" :key="song.id">{{ song.name }}</span>
                <span class="cell center" v-for="song in video.songs" :key="song.id">
                  {{ song.original_artist }}</span>
                <span class="cell center"> {{ video.channel.english_name }}</span>
                <span class="cell center">Cover</span>
                <span class="cell center"><a :href="'https://www.youtube.com/watch?v=' + video.id" target="_blank"><img
                      src="../assets/youtube.png" alt="" class="youtube-logo" /></a></span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style>
#music {
  background: repeat url('../assets/gradient.png');
  padding: 0px 10px;
  box-sizing: border-box;
}

#music i {
  padding-left: 40px;
}

.music-top {
  height: 300px;
  border-bottom: 1px solid gold;
  margin: auto;
  padding: 15px 0px;
}

.music-top img {
  height: 100%;
  float: left;
  margin-right: 10px;
}

.filter {
  width: 100%;
  display: flex;
  margin-bottom: 45px;
  padding: 0px;
  list-style-type: none;
  justify-content: space-between;
}

.filter li {
  cursor: pointer;
}

/* .header-row {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  list-style-type: none;
  width: 80%;
  font-weight: 500;
} */

.music-content {
  height: 55vh;
  overflow: scroll;
}

.music-grid {
  width: 80%;
  margin: auto;
  padding: 0px;
  /* max-height: 1000px; */
}

.song-item {
  list-style-type: none;
  border-bottom: 1px white solid;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.song-info {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}

.cell {
  word-wrap: break-word;
}

.center {
  text-align: center;
}

.youtube-logo {
  width: 20px;
}

.selected {
  font-weight: bold;
}
</style>
