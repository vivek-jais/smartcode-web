require("dotenv").config();

const express = require("express");

const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const uploadRoutes = require("./routes/uploadRoutes")






const app = express();

//Middleware to handle CORS

app.use(
    cors({
        origin:process.env.CLIENT_URL || "*",
        methods: ["GET","POST","PUT","DELETE"],
        allowedHeaders:["Content-Type","Authorization"]
    })
)
//connect Database
 connectDB();


//Middleware
app.use(express.json());

//Routes
app.use('/api',uploadRoutes)



//Start Server
const PORT = process.env.PORT || 8000;

app.listen(PORT,async()=>{
   
    console.log(`Server is running on port ${PORT}`);
    
})



