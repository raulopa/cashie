export const AuthenticationService = {

    isAuthenticated(): boolean {
        return !!localStorage.getItem('token');
    }

}