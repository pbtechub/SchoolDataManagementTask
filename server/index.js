import express  from "express";
import bodyParser  from "body-parser";
import usersRouter from "./router/users.js";
import dotenv from "dotenv"
import cors from 'cors';
import mongoosedb  from "./connectDb.js";
 dotenv.config()

const app = express();

const PORT = process.env.PORT || 5500;   
console.log(mongoosedb);


app.use(bodyParser.json());
app.use(cors());
app.use('/users', usersRouter);



app.listen(PORT, ()=> {console.log(`Server is running on port: http://localhost:${PORT}`)});