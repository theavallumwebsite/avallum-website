<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { getVideos, getMusic } from '../../../api';
import CDComponent from './../CDComponent.vue';
import data from '../../../data.json'



const props = defineProps({
    memberName: {
        type: String,
        required: true
    }
})

const member = computed(() => {
    return data.channels[props.memberName as keyof typeof data.channels]
})

function isUnarchived(title: string) {
    return title.toLowerCase().includes('unarchived') || title.toLowerCase().includes('unrachived');
}

const titleColor = ref(member.value.titleColor)
const font = ref(member.value.font)

const lateststream = ref<any>(null)

async function getLatestStream() {
    try {
        const response = await getVideos(member.value.id)
        lateststream.value = response.data[0].id;
    } catch (error) {
        console.error('error')
    }
}

const allSongs = ref<any[]>([])

async function getMemberMusic() {
    try {
        const cover = await getMusic(member.value.id, 'Music_Cover')
        const karaoke = await getMusic(member.value.id, 'singing')
        const originalSong = await getMusic(member.value.id, 'Original_Song')
        allSongs.value.push(...originalSong.data, ...cover.data, ...karaoke.data)
        allSongs.value.sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime());
    } catch (error) {
        console.log(error)
    }
}

function addDecoration() {
    const containers = document.querySelectorAll(".iframe")

    containers.forEach((container) => {
        const svgNamespace1 = "http://www.w3.org/2000/svg";
        const svg1 = document.createElementNS(svgNamespace1, 'svg');
        svg1.setAttribute('width', '102');
        svg1.setAttribute('height', '142');
        svg1.setAttribute('viewBox', '0 0 102 142');
        svg1.setAttribute('fill', 'none');


        const path1 = document.createElementNS(svgNamespace1, 'path');
        path1.setAttribute('d', 'M50.9374 0L64.6951 51.5615L101.875 70.641L64.6951 89.7205L50.9374 141.282L37.1797 89.7205L0 70.641L37.1797 51.5615L50.9374 0Z');
        path1.setAttribute('fill', 'black');


        svg1.appendChild(path1);
        svg1.classList.add("star")

        // container?.appendChild(svg1)
        container.insertBefore(svg1, container.firstChild)
    })

}

onMounted(() => {
    getLatestStream()
    getMemberMusic()
    if (props.memberName === "Cassian") {
        addDecoration()
    }
})
</script>

<template>
    <section id="streamsMusic">
        <div class="streams">
            <div class="debut">
                <h2>Debut</h2>
                <div class="iframe">
                    <div class="space-wrapper">
                        <div class="iframe-wrapper">
                            <iframe width="560" height="315" :src="member.debut" title="YouTube song player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div class="3Ddebut">
                <h2>3D Debut</h2>
                <div class="iframe">
                    <div class="space-wrapper">
                        <div class="iframe-wrapper">
                            <iframe width="560" height="315" :src="member.debut3D" title="YouTube song player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div class="lateststream">
                <h2>Latest stream</h2>
                <div class="iframe">
                    <div class="space-wrapper">
                        <div class="iframe-wrapper">
                            <iframe width="560" height="315" :src="`https://www.youtube.com/embed/${lateststream}`"
                                title="YouTube song player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="music">
            <h2 class="musicTitle">Music</h2>
            <CDComponent :memberName="memberName"></CDComponent>
            <ul class="music-grid">
                <li v-for="video in allSongs" :key="video.id" class="song-item">
                    <a :href="isUnarchived(video.title) ? '' : 'https://www.youtube.com/watch?v=' + video.id"
                        target="_blank">
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
                                    <img src="../../assets/youtube.png" alt="YouTube Logo" class="youtube-logo" />
                                </a>
                            </span>
                        </div>
                    </a>
                </li>
            </ul>

        </div>

    </section>

</template>

<style scoped>
h2 {
    display: block;
    text-align: center;
    margin: auto;
    padding: 10px;
    font-size: 2rem;
}

h2::after,
h2::before {
    content: none;
}


section {
    overflow: hidden;
}


.space-wrapper {
    margin: 30px;
    /* margin-bottom: 0px; */
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



/* layout 1 */

.layout-1 {
    display: flex;
    flex-direction: row;
    padding: 20px;
}

.layout-1 .streams {
    width: 50%;
    height: 95%;
    overflow: scroll;
}

.layout-1 .music {
    width: 50%;
    overflow: hidden;
}

.layout-1 .music-grid {
    width: 90%;
    height: 55%;
    max-height: 75%;
    overflow: scroll;

}

/* layout 2 */


.layout-2 .streams {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 50vh;
}

.layout-2 .streams>div {
    /* flex: 1; */
    flex: 0 0 25%;
}

.layout-2 .music {
    height: 50vh;
    display: grid;
    grid-template-columns: 0.5fr 1fr 1fr;
    grid-template-rows: 0.2fr 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 0px;
    align-items: center;
    padding: 15px;
}

.layout-2 .music h2 {
    grid-area: 1 / 1 / 2 / 4;
    margin: 0px;
    align-self: start;
    position: relative;
    bottom: 50px;
}

.layout-2 .music-grid {
    width: 95%;
    overflow: scroll;
    /* border: 1px solid red; */
    grid-area: 2 / 2 / 3 / 4;
}

.layout-2 .cd-container {
    grid-area: 2 / 1 / 3 / 2;
    margin: 0px;
}


.layout-2 .space-wrapper {
    margin: 0px;
}



/* CASS */

.cassian-section {
    background: url("../../assets/cassian_bg.png"), linear-gradient(#3E3E3E, #000000);
    background-size: contain;
    background-blend-mode: multiply;

}

.cassian-section h2 {
    font-family: 'Abhaya Libre', serif;
    font-weight: bold;
    background: linear-gradient(#7a4d20, #dfa67d, #7a4d20);
    background-clip: text;
}

.cassian-section .cd-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}



/* LUCI */

.lucien-section {
    overflow: visible;
    background: url('../../assets/lucien_bg.png'), linear-gradient(#3E3E3E, #000000);
    background-size: contain;
}

.lucien-section h2 {
    font-family: v-bind(font);
    background: v-bind(titleColor);
    background-clip: text;
    -webkit-text-stroke: 0.5px #BB0F28;
}



/* rosco */

.rosco-section {
    background: rgb(24, 24, 24);
}

.rosco-section h2 {
    font-family: v-bind(font);
    color: v-bind(titleColor);
    filter: drop-shadow(1px 3px 0px white);
    margin: auto;
}

.rosco-section .streams {
    background: url('../../assets/halftone.png');
    background-size: contain;
}

.rosco-section .music h2::after {
    content: "let's go!";
    font-family: 'Pixelify Sans';
    color: black;
    position: relative;
    top: 20px;
    right: -40px;
    background: none;
}

.rosco-section .music {
    background: linear-gradient(#0300bd, transparent);
}

/* ZANNY */

.zander-section {
    background: linear-gradient(#190026, #5E008C);
}

.zander-section .music {
    align-items: normal;
}

.zander-section .musicTitle {
    display: flex;
    justify-content: center;
}

.zander-section .musicTitle::after,
.zander-section .musicTitle::before {
    display: flex;
    content: '';
    background: url('../../assets/zanny-tattoo.svg');
    height: 10vh;
    width: 15vw;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-blend-mode: color;
}

/* GALE */

.gale-section {
    background: url('../../assets/gale_background.png'), linear-gradient(#241b07, #513939);
    background-size: cover;
    background-blend-mode: multiply;
}

@media (max-width: 768px) {

    .layout-1 {
        flex-direction: column;
        padding: 0px;
    }

    .layout-1 .streams {
        width: 100%;
        height: 40%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        overflow: scroll;
    }

    .layout-1 .music {
        width: 100%;
        height: 60%;
    }

    .layout-1 .cd-container {
        width: 30%;
        margin: auto;
    }


    .layout-1 .streams>div {
        flex: 0 0 40%;
        height: 5vh;
    }

    .space-wrapper {
        margin: 0px;
    }

    .layout-1 .music-grid {
        height: 60%;
    }

    .layout-2 .music {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 3vh 1fr;
        height: 48vh;
    }

    .layout-2 .music-grid {
        grid-area: 3 / 1 / 3 / 4;
        height: 30vh;
    }

    .layout-2 .cd-container {
        grid-area: 2 / 2 /3 / 2;
    }
}
</style>



<style>
.cassian-section .iframe {
    display: flex;
    justify-content: center;
    align-items: center;
}

.cassian-section .space-wrapper {
    width: 100%;
}

.cassian-section .iframe .star {
    margin: 5px;
}
</style>