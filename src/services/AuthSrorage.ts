class AuthStorage{
    setToken(token: string){
        window.localStorage.setItem('token', token)
    }
    getToken(){
        return window.localStorage.getItem('token')
    }
    isAuthenticated(){
        const token = this.getToken()
        return !!token;
    }
    removeToken(){
        window.localStorage.removeItem('token')
    }
}
export const WinStorage = new AuthStorage()
