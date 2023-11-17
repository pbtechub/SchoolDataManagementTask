import { config } from "dotenv";
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()


// let uri = 'mongodb+srv://bhimanprash16:securemymongodb@cluster0.sx6zw8y.mongodb.net/?retryWrites=true&w=majority'
let uri = process.env.MONGO_URL

const mongoosedb = mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('mongodb is connected'))
.catch((err) =>  console.log("err",err))

export default mongoosedb;


