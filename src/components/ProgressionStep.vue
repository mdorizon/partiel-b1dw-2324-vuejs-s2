<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        currentStep: Number,
    });
</script>

<template>
    <nav>
        <ul class="pagination pagination-md">
            <li class="page-item active"><RouterLink class="page-link" to="/inscription/step1">1</RouterLink></li>
            <li class="page-item" :class="{ active: props.currentStep >= 2 }"><RouterLink class="page-link" to="/inscription/step2">2</RouterLink></li>
            <li class="page-item" :class="{ active: props.currentStep >= 3 }"><RouterLink class="page-link" to="/inscription/step3">3</RouterLink></li>
            <li class="page-item" :class="{ active: props.currentStep >= 4 }"><RouterLink class="page-link" to="/inscription/step4">4</RouterLink></li>
        </ul>
    </nav>
</template>