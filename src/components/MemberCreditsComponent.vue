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
        <div class="membercredits">
            <h2>Member Credits</h2>
            <ul>
                <li v-for="(credit, index) in member.credits" :key="index">
                    <p>{{ credit.role }}</p>
                    <a :href="credit.socialMedia" target="_blank">{{ credit.name }}</a>
                </li>
            </ul>
        </div>
        <div class="pageredits">
            <h2>Page Credits</h2>
        </div>

    </section>
</template>

<style scoped>
ul {
    list-style: none;
    text-align: center;
}

li>p {
    font-weight: bold;
}
</style>