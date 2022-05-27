import Storage from "react-native-storage"
import AsyncStorage from "@react-native-async-storage/async-storage"

const storage = new Storage({
    size: 10,
    storageBackend: AsyncStorage,
    defaultExpires: 8 * 3600 * 1000,
    enableCache: true
})

export const saveLocalStorage = (key,data) => {
    storage.save({
        key: key,
        data: data,
        expires: 1 * 3600 * 1000 //miliseconds
    })
}

export const getLocalStorage = async (key) => {
    try{
        let result = await storage.load({
            key: key,
            autoSync: true,
            syncInBackground: true
        })

        return result
    }catch(error){
        return ""
    }
}

