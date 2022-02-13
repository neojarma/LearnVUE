import {
    ref,
    watchEffect
} from "vue";
import {
    projectFirestore
} from "../firebase/config";

const getCollection = (collection) => {
    const error = ref(null)
    const documents = ref()

    let collectionRef = projectFirestore.collection(collection)
        .orderBy('createdAt')

    const unsub = collectionRef.onSnapshot((snap) => {
        console.log('snap')
        let result = []

        snap.docs.forEach(doc => {
            doc.data().createdAt && result.push({
                ...doc.data(),
                id: doc.id
            })
        })

        documents.value = result
        error.value = ''
    }, err => {
        documents.value = null
        error.value = 'could not fetch data'
    })

    watchEffect((onInvalidate) => {
        //unsubscribe from collection
        onInvalidate(() => {
            unsub()
        })
    })

    return {
        documents,
        error
    }
}

export default getCollection