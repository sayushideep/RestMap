const express= require("express");
const mongoose = require("mongoose");
const helmet= require("helmet");
const morgan= require("morgan");
const dotenv= require("dotenv");
var cors = require("cors");
const app= express();
const restroomRouter= require("./routes/restroom");

dotenv.config();

mongoose.connect(process.env.MONGO_URL,
    ()=>{
    console.log('Database Connected')
});


//midleware
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/restrooms",restroomRouter);


app.listen(8801,()=>{
    console.log("backend server is running....")
})