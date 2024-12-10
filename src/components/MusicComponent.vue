<script setup lang="ts">
import { getMusic } from '../../api'
import data from '../../data.json'
import { ref, onMounted } from 'vue'
import { computed } from 'vue'
import CDComponent from './CDComponent.vue'

const allSongs = ref<any[]>([])
const selectedFilter = ref<string | null>(null)

function isUnarchived(title: string) {
  return title.toLowerCase().includes('unarchived') || title.toLowerCase().includes('unrachived');
}

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
    console.log('error covers', error)
  }
}

async function getOriginalSongs() {
  selectedFilter.value = 'original_Song'
  try {
    const originalSongPromise = data.IDs.map((channelId) => getMusic(channelId, 'Original_Song'))

    const originalSongResponse = await Promise.all(originalSongPromise)

    allSongs.value = []

    originalSongResponse.forEach((response) => {
      if (response.data) {
        const filteredSongs = response.data.filter((song: { title: string }) =>
          !/after\s*party/i.test(song.title) && // Matches "after party" with any number of spaces
          !/afterparty/i.test(song.title)    // Matches "afterparty" case-insensitively
        );
        allSongs.value.push(...filteredSongs)
      }
    })
  } catch (error) {
    console.log('error og song', error)
  }
}


async function getAllSongs() {
  try {
    const coverPromises = data.IDs.map((channelId) => getMusic(channelId, 'Music_Cover'))
    const karaokePromises = data.IDs.map((channelId) => getMusic(channelId, 'singing'))
    const originalSongPromises = data.IDs.map((channelId) => getMusic(channelId, 'Original_Song'))


    const [coversResponse, karaokeResponse, originalSongResponse] = await Promise.all([
      Promise.all(coverPromises),
      Promise.all(karaokePromises),
      Promise.all(originalSongPromises)
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

    originalSongResponse.forEach((response) => {
      if (response.data) {
        allSongs.value.push(...response.data)
      }
    })
    allSongs.value.sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime());
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
    const originalSong = await getMusic(channelId, 'Original_Song')
    console.log(cover, karaoke, originalSong)
    allSongs.value = []
    allSongs.value.push(...cover.data, ...karaoke.data, ...originalSong.data)
  } catch (error) {
    console.log(error)
  }
}

const filteredSongs = computed(() => {
  return allSongs.value.filter(
    (video) => (video.topic_id === 'Music_Cover' && video.songs) || video.topic_id === 'singing' || video.topic_id === 'Original_Song'
  )
    .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime());
})


onMounted(() => {
  getAllSongs()
  console.log(allSongs)
})
</script>

<template>
  <section id="music">
    <div class="music-top">
      <a href="https://www.youtube.com/watch?v=-WXRrpnYJwA">
        <CDComponent memberName="avallum" class="avallum-section"></CDComponent>
      </a>
      <h2>Music</h2>
      <p>Discover all of Avallum's music!</p>
      <p class="extra">For newly released songs, rememeber to search them directly on Youtube!</p>
    </div>

    <ul class="filter">
      <li @click="getCovers()" :class="{ selected: selectedFilter === 'cover' }">Cover</li>
      <li @click="getKaraoke()" :class="{ selected: selectedFilter === 'karaoke' }">Karaoke</li>
      <li @click="getOriginalSongs()" :class="{ selected: selectedFilter === 'original_song' }">Original Songs</li>
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
            <a :href="isUnarchived(video.title) ? '' : 'https://www.youtube.com/watch?v=' + video.id" target="_blank">
              <div class="song-info">
                <!-- Song Title -->
                <span class="cell">
                  <template v-if="video.topic_id === 'Music_Cover' && video.songs">
                    <span v-for="song in video.songs" :key="song.id">{{ song.name }}</span>
                  </template>
                  <template v-else>
                    {{ video.title }}
                  </template>
                </span>

                <!-- Original Artist (for Covers) -->
                <span class="cell center">
                  <template v-if="video.topic_id === 'Music_Cover' && video.songs">
                    <span v-for="song in video.songs" :key="song.id">{{ song.original_artist }}</span>
                  </template>
                </span>

                <!-- Channel Name -->
                <span class="cell center">{{ video.channel.english_name }}</span>

                <!-- Song Type -->
                <span class="cell center">
                  <template v-if="video.topic_id === 'Music_Cover'">Cover</template>
                  <template v-else-if="video.topic_id === 'singing'">Karaoke</template>
                  <template v-else-if="video.topic_id === 'Original_Song'">Original Song</template>
                </span>

                <!-- YouTube Link -->
                <span class="cell center">
                  <a v-if="!isUnarchived(video.title)"
                    :href="isUnarchived(video.title) ? '' : 'https://www.youtube.com/watch?v=' + video.id"
                    target="_blank">
                    <img src="../assets/youtube.png" alt="YouTube Logo" class="youtube-logo" />
                  </a>
                </span>
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
  background: url('../assets/gradient.png');
  background-size: cover;
  padding: 0px 10px;
  box-sizing: border-box;
}

#music i {
  padding-left: 40px;
}


.music-top {
  /* display: flex; */
  height: 300px;
  border-bottom: 1px solid gold;
  margin: auto;
  padding: 15px 0px;
}


.music-top .cd-container {
  float: left;
  margin: 0px;
  margin-right: 10px;
}

.music-top .cd-player {
  margin: 0px;
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
  width: 80vw;
  height: 40vh;
  margin: auto;
  padding: 0px;
  overflow: scroll;
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
