<script setup>
    import ProgressionStep from '../components/ProgressionStep.vue';

    import { ref, computed, onMounted } from 'vue'

    const activityList = ref([])
    const fetchAllActivities = computed(async () => {
        const response = await fetch('/data_activities.json')
        const data = await response.json()
        activityList.value = data
    })

    onMounted(() => {
        fetchAllActivities.value
    })
</script>

<template>
    <div class="card" v-for="(activity, i) in activityList">
        <h2>{{ activity.name }}</h2>
        <RouterLink class="btn btn-primary" :to="{ name: 'step3', params: { id: i }}">Choisir</RouterLink>
    </div>

    <div class="d-flex justify-content-center">
        <ProgressionStep currentStep=2 />
    </div>
</template>