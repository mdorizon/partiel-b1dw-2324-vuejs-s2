<script setup>
    import { ref } from 'vue'

    const emit = defineEmits()

    const persoInfos = ref({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        zipCode: ''
    })

    const handleSubmit = () => {
        emit('submitFirstForm', JSON.parse(JSON.stringify(persoInfos.value)))
    }
</script>

<template>
        <h2>Informations personnelles</h2>
        <form class="col-8 mt-5 mb-5" @submit.prevent="handleSubmit">
            <div class="mb-3 gap-3">
                <input type="text" class="form-control mb-3" name="first-name" placeholder="prénom" v-model="persoInfos.firstName">
                <input type="text" class="form-control mb-3" name="last-name" placeholder="nom" v-model="persoInfos.lastName">
                <input type="text" class="form-control mb-3" name="email" placeholder="email" v-model="persoInfos.email">
                <input type="text" class="form-control mb-3" name="phone" placeholder="téléphone" v-model="persoInfos.phone">
                <input type="text" class="form-control" name="zip-code" placeholder="code postal" v-model="persoInfos.zipCode">
            </div>
            <div class="mb-3 gap-3">
                <button type="submit" class="btn btn-primary w-100">Submit</button>
            </div>
        </form>
</template>