import mongoose from "mongoose";

export const dbConection = async() =>{
    try {
        const dbUrl = process.env.DB_URL;
        console.log(dbUrl);
        
        if (!dbUrl) {
            throw new Error('DB_URL environment variable is not defined');
        }
        await mongoose.connect(dbUrl)
    } catch (error) {
        console.log(error);
        throw new Error('Error al inicializar la DB')
    }
}