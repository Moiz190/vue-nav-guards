import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
    const loginCreds = ref({
        email: '',
        password: '',
    })

    const handleLogin = (email: string, password: string) => {
        loginCreds.value.email = email
        loginCreds.value.password = password
    }

    return {
        loginCreds,
        handleLogin,
    }
})