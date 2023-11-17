import { config } from "dotenv";
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()



let uri = process.env.MONGO_URL

const mongoosedb = mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('mongodb is connected'))
.catch((err) =>  console.log("err",err))

export default mongoosedb;


