// api.ts
import { useAuthStore } from '@/features/auth/store/auth-store';
import axios from 'axios';

export const api = axios.create({
    baseURL: import.meta.env.VITE_SPRING_APP_API_URL,
});

api.interceptors.request.use(config => {
    const token = useAuthStore.getState().token;

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});


api.interceptors.response.use(
    res => res,
    err => {
        if (err.response?.status === 403) {
            useAuthStore.getState().logout();
            window.location.href = '/login';
        }
        return Promise.reject(err);
    }
);
