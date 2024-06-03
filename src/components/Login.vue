<template>
    <div>
        <input v-model="loginCreds.email" type="email" placeholder="email" />
        <input v-model="loginCreds.password" type="password" placeholder="password" />
        <button @click="handleLogin">login</button>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { useAuthStore } from '../store';
const router = useRouter()
const authStore = useAuthStore()
const loginCreds = ref({
    email: '',
    password: ''
})
const handleLogin = () => {
    const { email, password } = loginCreds.value
    authStore.handleLogin(email, password)
    localStorage.setItem('email', email)
    localStorage.setItem('password', password)
    router.push('/home')
}
</script>