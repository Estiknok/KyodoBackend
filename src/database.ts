import mongoose, { ConnectOptions } from 'mongoose';
import config from './config';

export async function connectDB() {
    try{
        //TODO: Add to the config the user and password for the mongo db
        const options: ConnectOptions = {
            auth: {
                username: config.MONGO_USER,
                password: config.MONGO_PASSWORD
            },
            authSource: "admin"
        }

        const db = await mongoose.connect(`mongodb://${ process.env.MONGO_USER }:${ process.env.MONGO_PASSWORD }@${ process.env.MONGO_HOST }:${ process.env.MONGO_PORT }/${process.env.MONGO_DATABASE}`);
        console.log(`Database connected: ${db.connection.name}`);
    }
    catch(err){
        console.log(`mongodb://${config.MONGO_HOST}:${config.MONGO_PORT}/${config.MONGO_DATABASE}`)
        console.log(err);
    }   
}