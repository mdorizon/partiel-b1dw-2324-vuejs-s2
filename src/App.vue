<script setup>
  import { ref } from 'vue'
  import FirstStepForm from './views/FirstStepForm.vue';

  const PersonalData = ref([])

  const FirstFormDatas = (persoData) => { 
    PersonalData.value.push(persoData)
    console.log(PersonalData.value)
  }
</script>

<template>
  <section class="mt-5 d-flex align-items-center flex-column">
    <FirstStepForm @submitFirstForm="FirstFormDatas" />
  </section>
</template>

<style>
  @import "../node_modules/bootstrap/scss/bootstrap.scss";
  a {
    all: unset;
    text-decoration: none;
  }
</style>
