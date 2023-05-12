import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./database/database.js";
import userRoute from "./routes/user-routes.js";
import blogRoute from "./routes/blog-routes.js";
import pricingRoute from "./routes/pricing-routes.js";
import daysRoutes from "./routes/days-routes.js";
import contactUsRoute from "./routes/contact-us-routes.js";
import { PORT } from "./constants.js";
import relations from "./entities/relations.js";
import levelRoutes from "./routes/levels-routes.js";
relations()
const app=express();
// app.options('*', cors());  
app.use(cors({ origin: true, credentials: true }));

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
//   });

app.use(bodyParser.urlencoded({}))
app.use(bodyParser.json({limit:"50mb",
extended: true,
parameterLimit:5000}));
connectDB()
app.use("/uploads", express.static("uploads"));
app.use('/user',userRoute)
app.use('/blogs',blogRoute)
app.use('/pricing',pricingRoute)
app.use('/contact-us',contactUsRoute)
app.use('/level',levelRoutes)
app.use('/days',daysRoutes)
app.listen(PORT,()=>console.log(`The app is listening on ${PORT}`))