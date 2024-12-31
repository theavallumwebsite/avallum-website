<script setup lang="ts">
import { onMounted, ref } from 'vue';
import data from '../../data.json'
import galeBirthday from "../assets/gale-birthday.png";
import cassianBirthday from "../assets/cassian-birthday.png";
import lucienBirthday from "../assets/lucien-birthday.png";
import zanderBirthday from "../assets/zander-birthday.png";
import roscoBirthday from "../assets/rosco-birthday.png";

const closestBirthday = ref()
const countdown = ref({ days: 0, hours: 0, minutes: 0, seconds: 0 })
const remainingMembers = ref<any>(null)

const birthdayPortrait: Record<string, string> = {
    "Gale Galleon": galeBirthday,
    "Cassian Floros": cassianBirthday,
    "Lucien Lunaris": lucienBirthday,
    "Zander Netherbrand": zanderBirthday,
    "Rosco Graves": roscoBirthday,
};

function extractBirthdays() {
    const channels = data.channels
    return Object.values(channels).map(channel => ({
        name: channel.name,
        birthday: channel.birthday
    }))
}

function findClosestBirthday() {
    const today = new Date();
    const todayTime = today.getTime()

    const birthdays = extractBirthdays().map(({ name, birthday }) => {
        const birthdayDate = new Date(birthday)

        if (birthdayDate.getTime() < todayTime) {
            birthdayDate.setFullYear(today.getFullYear() + 1);
        }

        const difference = birthdayDate.getTime() - todayTime
        return { name, birthdayDate, difference }

    })



    const calculatedClosestBirthday = birthdays
        .sort((a, b) => Math.abs(a.difference) - Math.abs(b.difference))[0];

    const channels = Object.values(data.channels);
    const closestChannel = channels.find(channel => channel.name === calculatedClosestBirthday.name);

    closestBirthday.value = {
        name: calculatedClosestBirthday.name,
        birthday: calculatedClosestBirthday.birthdayDate,
        formattedBirthday: calculatedClosestBirthday.birthdayDate.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
        }),
        birthdayHat: closestChannel?.birthdayHat || null
    }

    birthdayCountdown()
    getModel()
}

function birthdayCountdown() {
    if (!closestBirthday.value) return

    const birthdayDate = closestBirthday.value.birthday
    const birthdayTime = birthdayDate.getTime()
    console.log(birthdayDate, birthdayTime)

    const interval = setInterval(() => {
        const now = new Date().getTime()
        const timeDifference = birthdayTime - now

        if (timeDifference <= 0) {
            clearInterval(interval)
            countdown.value = { days: 0, hours: 0, minutes: 0, seconds: 0 }
        } else {
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

            countdown.value = { days, hours, minutes, seconds }
        }
    }, 1000)
}


function getModel() {
    const channels = Object.values(data.channels);

    const closestBirthdayChannel = channels.find(channel => channel.name === closestBirthday.value.name);

    closestBirthday.value.portrait = birthdayPortrait[closestBirthday.value.name]
        || (closestBirthdayChannel ? closestBirthdayChannel.portrait : null);

    remainingMembers.value = channels
        .filter(channel => channel.name !== closestBirthday.value.name)
        .map(channel => {
            const birthdayDate = new Date(channel.birthday);
            const formattedBirthday = birthdayDate.toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
            });
            return { ...channel, formattedBirthday, portrait: channel.portrait };
        })

}


onMounted(() => {
    findClosestBirthday()

})
</script>

<template>
    <section id="birthday">
        <h2>Birthdays</h2>
        <i>Please note that this uses your local time and not JST.</i>
        <div class="birthdays">
            <div class="left">
                <!-- <img :src="closestBirthday.birthdayHat" alt="" class="birthdayHat"
                    v-if="closestBirthday && closestBirthday.birthdayHat"> -->
                <img :src="closestBirthday.portrait" alt="" class="mainModel" v-if="closestBirthday">
            </div>
            <div class="right">
                <div class="text" v-if="closestBirthday">
                    <img src="../assets/birthdaycake.png" alt="" class="birthdaycake">
                    <h3>The next birthday is <b>{{ closestBirthday.name }}</b>'s on <b>{{
                        closestBirthday.formattedBirthday }}th</b>.
                    </h3>
                    <p>It's in {{ countdown.days }} days, {{ countdown.hours }} hours.</p>
                </div>
                <div v-else>
                    <p>No birthdays. (if you see this please scream at me on X because you're not supposed to lmao)</p>
                </div>
                <div class="otherBirthdays models" v-if="remainingMembers">
                    <div v-for="member in remainingMembers" :key="member.name" class="modelDiv" :class="member.name">
                        <h3 class="extra">{{ member.name }}</h3>
                        <p>{{ member.formattedBirthday }}th</p>
                        <img :src="member.portrait" alt="" class="model" :class="member.name">
                    </div>
                </div>
            </div>

        </div>

    </section>
</template>

<style scoped>
section {
    background: linear-gradient(rgba(38, 38, 38, 0.9), rgba(0, 0, 0, 0.94)), url('../assets/black-stars.png');
    background-blend-mode: darken;
    text-align: center;
    /* overflow: visible; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

i {
    display: block;
    margin: 0px;
}

b {
    color: transparent;
    background: linear-gradient(180deg, #ac8246, #f8d175, #ac8246);
    background-clip: text;
}


.birthdays {
    display: flex;
}

.right {
    width: 50vw;
}


.models {
    display: flex;
}

.left {
    width: 50vw;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    margin: 0px;
}

.mainModel {
    width: 80%;
}


.modelDiv {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.model {
    width: 90%;
}

.otherDiv img {
    position: relative;
    bottom: 0px;
}


.text {
    margin: 3vw 0px;
}


.birthdaycake:hover {
    animation: scale 0.3s alternate linear forwards;
}

@keyframes scale {
    100% {
        transform: scale(1.1);
    }
}

@media screen and (max-width: 768px) {
    .birthdays {
        flex-direction: column;
    }

    .left,
    .right {
        width: 100vw;
    }

    .left {
        justify-content: center;
        align-items: center;
    }

    .birthdaycake {
        width: 20vw;
        float: left;
    }

    .mainModel {
        width: 80%;
        border-bottom: 3px solid white;
        position: relative;
        z-index: 998;
        margin-bottom: 3vh;
    }

    .text {
        margin-bottom: 5vh;
    }
}
</style>
