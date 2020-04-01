import Token from './token'
import Storage from './storage'

class User {
    login(data) {
        axios.post('/api/auth/login', data)
            .then(res => this.responseAfterLogin(res))
            .catch(error => console.log(error.response.data))
    }

    signup(data) {
        axios.post('/api/auth/signup', data)
            .then(res => this.responseAfterLogin(res))
            .catch(error => this.errors = error.response.data.errors)
    }

    responseAfterLogin(res) {
        const token = res.data.access_token
        const username = res.data.user

        if(Token.isValid(token))
        {
            console.log(token)
            Storage.store(token, username)
            window.location = "/forum"
        }
    }

    hasToken() {
        const storedToken = Storage.getToken()
        if(storedToken){
            return Token.isValid(storedToken) ? true : this.logout()
        }

        return false
    }

    loggedIn() {
        return this.hasToken()
    }

    logout(){
        Storage.clear()
        window.location = "/forum"
    }

    name() {
        if(this.loggedIn()){
            return Storage.getUsername()
        }
    }

    id() { //id is the sub: part of the payload
        if(this.loggedIn()){
            const payload = Token.getPayload(Storage.getToken())
            return payload.sub
        }
    }

    own(id) {
        return this.id() == id
    }

    admin() {
        return this.id() == 10
    }
}

export default User = new User();