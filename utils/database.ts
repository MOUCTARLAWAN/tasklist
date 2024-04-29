import mongoose, {ConnectOptions} from "mongoose";

let isConnected: boolean = false

export const connectToDB = async() => {
    mongoose.set('strictQuery', true)

    if(isConnected) {
        console.log('Mongodb is connected')
        return;
    }

    try {
        await mongoose.connect(
            // Active la nouvelle gestion dans mongdb pour utiliser le nouveau model de surveillance du server
            process.env.MONGODB_URI!, {
                dbName: 'tasks',
                useNewUrlParse: true,
                useUnifiedTopology: true,
            } as ConnectOptions 
        )
    } catch(error) {
        console.log(error)
    }
}