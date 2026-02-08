import { api } from "@/shared/api/api";
import { LoginRequest } from "../dtos/login-request";
import { useAuthStore } from "../store/auth-store";

export const AuthenticationService = {

    async login(loginRequest: LoginRequest) {
        const { data } = await api.post('/auth/login', loginRequest);

        useAuthStore.getState().login(data.token, data.user)
        return data;
    },

}