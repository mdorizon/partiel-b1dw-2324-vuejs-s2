<script setup>
    import ProgressionStep from '../components/ProgressionStep.vue';
    import { ref, computed, onMounted } from 'vue'
    import { defineProps } from 'vue';

    const props = defineProps(['id']);

    const activity = ref([])
    const fetchAllActivities = computed(async () => {
        const response = await fetch('/data_activities.json')
        const data = await response.json()
        activity.value = data[props.id]
    })

    onMounted(() => {
        fetchAllActivities.value
    })
</script>

<template>
    <div class="card" v-for="(session, i) in activity.sessions">
        <h2>{{ session.date }} || {{ session.start_at }} - {{ session.end_at }}</h2>
        <p>{{ session.option }}</p>
        <p>places prises : {{ session.registered }} / places restantes : {{ session.available_places }}</p>
        <RouterLink class="btn btn-primary" :to="{ name: 'step3', params: { id: props.id, session: i }}">Choisir</RouterLink>
    </div>

    <div class="d-flex justify-content-center">
        <ProgressionStep currentStep=3 />
    </div>
</template>