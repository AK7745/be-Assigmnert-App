import express from "express"; 
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./database/database.js";
import userRoute from "./routes/user-routes.js";
import blogRoute from "./routes/blog-routes.js";
import infoRoute from "./routes/info-routes.js";
import pricingRoute from "./routes/pricing-routes.js";
import daysRoutes from "./routes/days-routes.js";
import contactUsRoute from "./routes/contact-us-routes.js";
import { PORT , NODE_ENV,SSL_KEY_PATH,SSL_CERT_PATH} from "./constants.js";
import relations from "./entities/relations.js";
import levelRoutes from "./routes/levels-routes.js";
import documnetTypeRoute from "./routes/document-type-routes.js";
import orderRouter from "./routes/order-routes.js";
import subjectRoutes from "./routes/subject-routes.js";
import serviceRoute from "./routes/service-routes.js";
import https from "https";
import fs from "fs";



relations()
const app=express();  
app.use(cors({ origin: true, credentials: true }));



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
app.use('/document-type',documnetTypeRoute)
app.use('/order',orderRouter)
app.use('/subject',subjectRoutes)
app.use('/service',serviceRoute)
app.use('/info',infoRoute)
// app.use('/',(req,res)=>{
//     res.send('server is running')
// })
// if (NODE_ENV === "production") {
//     // Production environment - Enable HTTPS
//     const options = {
//       key: fs.readFileSync(SSL_KEY_PATH),
//       cert: fs.readFileSync(SSL_CERT_PATH),
//     };
  
//     const server = https.createServer(options, app);
//     server.listen(PORT, () => {
//       console.log(`HTTPS server is running on ${PORT}`);
//     });
//   } else {
//     // Development environment - Enable HTTP
//     app.listen(PORT, () => {
//       console.log(`HTTP server is running on ${PORT}`);
//     });
//   }