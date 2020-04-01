class Token {
    isValid(token) {
        const payload = this.getPayload(token)
        if(payload) {
            return payload.iss == "http://127.0.0.1:8000/api/auth/login" || "http://127.0.0.1:8000/api/auth/signup" ? true :
            false
        }

        return false
    }

    getPayload(token) {
        const payload = token.split('.')[1]
        return this.decode(payload)
    }

    decode(payload) {
        if(this.isBase64(payload)) {
            return JSON.parse(atob(payload)) //Decode the token to make it look better
        }
        return false
    }

    isBase64(str) {
        try {
            return btoa(atob(str)).replace(/=/g, "") == str
        }
        catch(err) {
            return false
        }
    }
}

export default Token = new Token();