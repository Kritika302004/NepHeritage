
import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authroute.js"
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import productRoutes from "./routes/productroute.js";
import cartRoutes from "./routes/cartroute.js";
import analyticsRoutes from "./routes/analyticsroute.js"
//routes
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000
console.log(process.env.PORT); 

app.use(express.json()); //alows you to parse the body of the request
app.use(cookieParser());


app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/analytics", analyticsRoutes);

app.listen(5000, () => {
    console.log("Server is running on http://localhost:"+ PORT);
    //connection db
    connectDB();
});