import {
    ref
} from 'vue'
import {
    projectFirestore
} from '../firebase/config'

const getPost = (id) => {
    const post = ref(null)
    const error = ref(null)

    const load = async() => {

        try {
            const snapshot = await projectFirestore.collection('posts').doc(id).get()

            if (!snapshot.exists) {
                console.log('Post not found')
            }

            post.value = {
                id: snapshot.id,
                ...snapshot.data()
            }
        } catch (err) {
            error.value = err.message
        }
    }

    return {
        post,
        error,
        load
    }
}

export default getPost