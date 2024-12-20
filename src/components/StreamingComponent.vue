<script setup lang="ts">
import { getLiveStatus } from '../../api'
import { ref, onMounted } from 'vue'

const liveStatus = ref<any>(null)
const upcomingLive = ref<any[]>([])

async function fetchLiveStatus() {
  try {
    const response = await getLiveStatus()

    const currentDate = new Date()
    const oneMonth = new Date()
    oneMonth.setMonth(currentDate.getMonth() + 1)

    liveStatus.value = response.data.filter((video: any) => video.status === 'live')

    upcomingLive.value = response.data.filter(
      (video: any) =>
        video.status === 'upcoming' &&
        !video.title.toLowerCase().includes('free chat') &&
        new Date(video.start_scheduled) <= oneMonth
    )

  } catch (error) {
    console.error('error')
  }
}

onMounted(() => {
  fetchLiveStatus()
})
</script>

<template>
  <section id="streams">
    <div class="currentlyStreaming">

      <h2>Who's streaming?</h2>
      <p class="extra">Oh, look...</p>
      <div v-if="liveStatus && liveStatus.length > 0" class="streamsContainer">
        <div v-for="video in liveStatus" :key="video.id">
          <h3>{{ video.channel.name }} is Live!</h3>
          <div class="space-wrapper">
            <div class="iframe-wrapper">
              <iframe v-if="liveStatus" width="560" height="315" :src="`https://www.youtube.com/embed/${video.id}`"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <p>No one is live.</p>
      </div>

    </div>

    <div class="upcomingStreams">
      <h2>Upcoming Streams</h2>
      <div v-if="upcomingLive && upcomingLive.length > 0" class="upcomingContainer">
        <div v-for="video in upcomingLive" :key="video.id" class="iframe-wrapper">
          <div class="space-wrapper">
            <iframe v-if="upcomingLive" width="560" height="315" :src="`https://www.youtube.com/embed/${video.id}`"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="iframe"></iframe>
          </div>
        </div>
      </div>
      <div v-else>
        <p>No streams scheduled.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
#streams {
  display: flex;
  scrollbar-width: none;
}

#streams::-webkit-scrollbar {
  display: none;
}

li {
  list-style-type: none;
}

h2 {
  margin: 0px auto;
}

.currentlyStreaming {
  background: linear-gradient(80deg, #050505e4, #000000), url('../assets/black-stars.png');
  border-right: 1px solid rgb(153, 131, 6);
  width: 65vw;
  height: 100vh;
  /* overflow: scroll; */
  padding: 20px;
  text-align: center;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.streamsContainer {
  overflow: scroll;
  height: 80vh;
}

.upcomingContainer {
  overflow: scroll;
  height: 80vh;
}

.upcomingStreams {
  width: 40vw;
  height: 100vh;
  padding-left: 10px;
  /* overflow: scroll; */
  padding: 20px;
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.space-wrapper {
  margin: 30px;
}

.iframe-wrapper {
  position: relative;
  width: calc(100% - 20px);
  height: 0;
  padding-bottom: 56.25%;
  box-sizing: border-box;
}

.iframe-wrapper iframe {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}


@media screen and (max-width: 768px) {
  #streams {
    flex-direction: column;
  }

  .currentlyStreaming {
    width: 100vw;
    height: 50vh;
    padding: 0px;
  }

  .upcomingStreams {
    width: 100vw;
    height: 50vh;
    padding: 0px;
  }

  .streamsContainer {
    height: 45vh;
  }

  .upcomingContainer {
    height: 45vh;
  }

  .upcomingStreams h2 {
    margin: 0px auto;
  }

}
</style>
