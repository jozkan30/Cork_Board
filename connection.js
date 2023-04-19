import mongoose from "mongoose";

mongoose.set('strictQuery', false)


let connectionConfig ={
    useNewURLParser: true,
    useUnifiedTopology: true
}

const url = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/Wine'

mongoose.connect(url, connectionConfig)



mongoose.connection.on('connected', ()=> console.log("Connected to database"))
mongoose.connection.on('disconnected', ()=> console.log("Disconnected from database"))
mongoose.connection.on('error', error=> console.error("Database error", error))

export default mongoose.connection