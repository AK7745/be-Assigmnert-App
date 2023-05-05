import express from "express";
import bodyParser from "body-parser";
import { connectDB } from "./database/database.js";
import userRoute from "./routes/user-routes.js";
import blogRoute from "./routes/blog-routes.js";
import pricingRoute from "./routes/pricing-routes.js";

const app=express();

app.use(bodyParser.json());
connectDB()
app.use('/user',userRoute)
app.use('/blogs',blogRoute)
app.use('/pricing',pricingRoute)
app.listen(3000,()=>console.log("Listening on port 3000"))