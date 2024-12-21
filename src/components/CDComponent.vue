<script setup lang="ts">
import data from '../../data.json'
import gsap from 'gsap'
import { computed, onMounted } from 'vue';


const props = defineProps({
    memberName: {
        type: String,
        required: true
    }
})

const member = computed(() => {
    return data.channels[props.memberName as keyof typeof data.channels]
})


function cdAnimation() {
    const cd = gsap.fromTo(
        '.cd-images',
        {
            rotation: 0,
        },
        {
            rotation: 360,
            duration: 1,
            ease: 'power1.inOut',
            paused: true
        }
    )

    const cdImages = document.querySelector(".cd-images")


    cdImages?.addEventListener('mouseenter', () => {
        cd.play()
    })

    cdImages?.addEventListener('mouseleave', () => {
        cd.reverse()
    })
}

function addDecoration() {
    const container = document.querySelector(".cd-container")
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

    const svgNamespace2 = "http://www.w3.org/2000/svg";
    const svg2 = document.createElementNS(svgNamespace2, 'svg');
    svg2.setAttribute('width', '102');
    svg2.setAttribute('height', '142');
    svg2.setAttribute('viewBox', '0 0 102 142');
    svg2.setAttribute('fill', 'none');


    const path2 = document.createElementNS(svgNamespace2, 'path');
    path2.setAttribute('d', 'M50.9374 0L64.6951 51.5615L101.875 70.641L64.6951 89.7205L50.9374 141.282L37.1797 89.7205L0 70.641L37.1797 51.5615L50.9374 0Z');
    path2.setAttribute('fill', 'black');


    svg2.appendChild(path2);

    svg2.classList.add("star")
    svg2.classList.add("star1")

    container?.insertBefore(svg1, container.querySelector(".cd-player"));
    container?.appendChild(svg2)

}

const BASE_URL = import.meta.env.BASE_URL;

onMounted(() => {
    cdAnimation()
    if (props.memberName === "Cassian") {
        addDecoration()
    }
})
</script>

<template>
    <div class="cd-container">
        <div class="cd-player">
            <div class="cd-images">
                <img :src="memberName === 'avallum' ? `${BASE_URL}crossingfates-square.jpg` : `${BASE_URL}${member.ogSongImage}`"
                    alt="CD Image" class="image">
                <img src=" ../assets/cd.png" alt="" class="cd">
            </div>

        </div>

    </div>
</template>


<style scoped>
.cd-container {
    margin: 10px;
    height: auto;
}


.cd-player {
    max-height: 200px;
    max-width: 200px;
    width: 50%;
    aspect-ratio: 1 / 1;
    background: grey;
    padding: 5%;
    border-radius: 20%;
    margin: auto;
    overflow: hidden;
    filter: drop-shadow(1px 0px 4px black);
    margin: 5px auto;
    box-shadow: inset 0px 0px 0.5em rgba(255, 255, 255, 0.706);

}

.cd-images {
    width: 100%;
    height: 100%;
    aspect-ratio: 1 / 1;
    filter: drop-shadow(0px 0px 2px black);
    transform: rotate(10deg);
    transform-origin: 50% 50%;
}

.cd {
    /* max-height: 200px;
    max-width: 200px; */
    width: 100%;
    aspect-ratio: 1 / 1;
    position: relative;
    bottom: 101%;
    z-index: 998;
}

.image {
    /* max-height: 200px;
    max-width: 200px; */
    width: 100%;
    aspect-ratio: 1 / 1;
    position: relative;
    z-index: 999;
    mix-blend-mode: multiply;
    opacity: 0.8;
    mask-image: url("../assets/cd.png");
    -webkit-mask-image: url("../assets/cd.png");
    mask-repeat: no-repeat;
    mask-size: cover;
}

/* CASS */

.cassian-section .cd-player {
    background: linear-gradient(#DFDFDF, #146665);
    margin: 0px;
}

ç .cassian-section .cd-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
}

/* LUCI */

.lucien-section .cd-player {
    background: linear-gradient(#363636, #620000);
}

/* ROSCO */

.rosco-section .cd-player {
    background: linear-gradient(#DFDFDF, #191919);
}


/* GALE */

.gale-section .cd-player {
    background: linear-gradient(#e4c989, #7a531d);
}

/* ZANNY  */

.zander-section .cd-player {
    background: linear-gradient(#5E008C, #deb1f7);
}

/* avallum  */
.avallum-section .cd-player {
    background: linear-gradient(#e4c989, #7a531d);
    max-width: none;
    max-height: none;
}


@media screen and (max-width: 768px) {
    .cd-container {
        margin: 0px;
        width: auto;
    }

    .cd-player {
        margin: auto;
        width: 80%;
    }
}
</style>
