import {
    ref
} from 'vue'

import {
    projectFirestore
} from '../firebase/config'

const getPosts = () => {

    const posts = ref([])
    const error = ref(null)

    const load = async() => {

        try {
            const snapshot = await projectFirestore.collection('posts').get()

            posts.value = snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })
        } catch (err) {
            error.value = err.message
        }
    }

    return {
        posts,
        error,
        load
    }
}

export default getPosts