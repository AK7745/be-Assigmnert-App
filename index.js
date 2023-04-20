import express from "express";
import bodyParser from "body-parser";
import { connectDB } from "./database/database.js";
import route from "./routes/user-routes.js";

const app=express();

app.use(bodyParser.json());
connectDB()
app.use('/user',route)
app.listen(3000,()=>console.log("Listening on port 3000"))