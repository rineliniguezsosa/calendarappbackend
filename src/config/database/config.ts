import mongoose from "mongoose";

export const dbConnection = async() =>{
    try {
        const dbUrl = process.env.DB_URL;
        
        if (!dbUrl) {
            throw new Error('DB_URL environment variable is not defined');
        }
        await mongoose.connect(dbUrl);
        console.log('coneccted!!');
        
    } catch (error) {
        console.log("error: ",error);
        throw new Error('Error al inicializar la DB')
    }
}