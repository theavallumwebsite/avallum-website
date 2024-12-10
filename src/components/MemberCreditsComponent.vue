<script setup lang="ts">
import data from "../../data.json"
import { computed } from "vue";

const props = defineProps({
    memberName: {
        type: String,
        required: true
    }
})

const member = computed(() => {
    return data.channels[props.memberName as keyof typeof data.channels]
})
</script>

<template>
    <section>
        <div class="credits">
            <div class="membercredits">
                <h2>Member Credits</h2>
                <ul class="credit-list">
                    <li v-for="(credit, index) in member.credits" :key="index">
                        <p>{{ credit.role }}</p>
                        <a :href="credit.socialMedia" target="_blank">{{ credit.name }}</a>
                    </li>
                </ul>
            </div>
            <div class="pagecredits">
                <h2>Page Credits</h2>
                <ul class="credit-list">
                    <li v-for="(credit, index) in member.Pagecredits" :key="index">
                        <p>{{ credit.role }}</p>
                        <a :href="credit.socialMedia" target="_blank">{{ credit.name }}</a>
                    </li>
                </ul>
                <i>Please check the website credits for general credits.</i>
            </div>
        </div>


    </section>
</template>

<style scoped>
.credits {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3vh;
}

h2 {
    display: block;
    margin: auto;
    text-align: center;
}

ul {
    list-style: none;
    text-align: center;
}

.credit-list {
    column-count: 2;
}

.credit-list li {
    break-inside: avoid;
}

.pagecredits {
    text-align: center
}

li>p {
    font-weight: bold;
}
</style>