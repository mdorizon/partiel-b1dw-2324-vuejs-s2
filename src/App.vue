<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router';

  // données récupérée du premier formulaire
  const PersonalData = ref([])

  const router = useRouter();

  // une fois le formulaire rempli met les datas dans PersonalData
  const FirstFormDatas = (persoData) => {
    PersonalData.value.push(persoData)
    router.push('/inscription/step2');
  }
</script>

<template>
  <section class="mt-5 d-flex align-items-center flex-column">
    <div class="col-8">
      <RouterView @submitFirstForm="FirstFormDatas" />
    </div>
  </section>
</template>

<style>
  @import "../node_modules/bootstrap/scss/bootstrap.scss";
  a {
    all: unset;
    text-decoration: none;
  }
</style>
