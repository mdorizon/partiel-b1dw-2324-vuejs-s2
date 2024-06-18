<script setup>
    import { ref } from 'vue'
    const emit = defineEmits(['submitFirstForm']);
    
    // les infos envoyé dans app vue si tout les tests sont passés
    const persoInfos = ref({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        zipCode: ''
    });
    // les infos stockées du formulaire pour être testés 
    const infosError = ref({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        zipCode: ''
    });
    // différents regex pour vérifier que les formats sont bons
    const validateName = (name) => /^[a-zA-Z]+$/.test(name);
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePhone = (phone) => /^\d{10}$/.test(phone);
    const validateZipCode = (zipCode) => /^\d{5}$/.test(zipCode);
    // fonction pour tester le format
    const validateForm = () => {
        infosError.value.firstName = validateName(persoInfos.value.firstName) ? '' : 'Le prénom ne doit contenir que des lettres';
        infosError.value.lastName = validateName(persoInfos.value.lastName) ? '' : 'Le nom ne doit contenir que des lettres';
        infosError.value.email = validateEmail(persoInfos.value.email) ? '' : 'Le format de l\'email est incorrect';
        infosError.value.phone = validatePhone(persoInfos.value.phone) ? '' : 'Le téléphone doit contenir 10 chiffres';
        infosError.value.zipCode = validateZipCode(persoInfos.value.zipCode) ? '' : 'Le code postal doit contenir 5 chiffres';
        return !Object.values(infosError.value).some(error => error);
    };
    // envoie des infos si les tests sont passés
    const handleSubmit = () => {
        if (validateForm()) {
            emit('submitFirstForm', JSON.parse(JSON.stringify(persoInfos.value)));
        }
    }
</script>

<template>
        <h2>Informations personnelles</h2>
        <form class="col-8 mt-5 mb-5" @submit.prevent="handleSubmit">
            <div class="mb-3 gap-3">
                <!-- first name -->
                <div v-if="infosError.firstName" class="text-danger">{{ infosError.firstName }}</div>
                <input type="text" class="form-control mb-3" name="first-name" placeholder="prénom" v-model="persoInfos.firstName">
                <!-- last name -->
                <div v-if="infosError.lastName" class="text-danger">{{ infosError.lastName }}</div>
                <input type="text" class="form-control mb-3" name="last-name" placeholder="nom" v-model="persoInfos.lastName">
                <!-- email -->
                <div v-if="infosError.email" class="text-danger">{{ infosError.email }}</div>
                <input type="text" class="form-control mb-3" name="email" placeholder="email" v-model="persoInfos.email">
                <!-- phone -->
                <div v-if="infosError.phone" class="text-danger">{{ infosError.phone }}</div>
                <input type="text" class="form-control mb-3" name="phone" placeholder="téléphone" v-model="persoInfos.phone">
                <!-- zip code -->
                <div v-if="infosError.zipCode" class="text-danger">{{ infosError.zipCode }}</div>
                <input type="text" class="form-control" name="zip-code" placeholder="code postal" v-model="persoInfos.zipCode">
            </div>
            <div class="mb-3 gap-3">
                <button type="submit" class="btn btn-primary w-100">Submit</button>
            </div>
        </form>
</template>