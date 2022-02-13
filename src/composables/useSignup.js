import {
    ref
} from "vue"
import {
    projectAuth
} from "../firebase/config"

const error = ref(null)

const signup = async(email, password, displayName) => {
    error.value = null

    try {
        const res = await projectAuth.createUserWithEmailAndPassword(email, password)

        if (!res) {
            throw new Error("Error creating user")
        }

        await res.user.updateProfile({
            displayName
        })

        error.value = null
        return res

    } catch (err) {
        error.value = err.message.replace(/firebase: |auth|(|)/gi, '')
    }
}

const useSignup = () => {
    return {
        error,
        signup
    }
}

export default useSignup