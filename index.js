const express = require("express");
const mongoose = require("mongoose");
const UserRouter = require("./authentication/SponserRegister");
const SponserRouter = require("./authentication/SponserRegister");
// const cors = require("cors");
const app = express();

const PORT = 4000;

 mongoose.connect("mongodb+srv://neha-:210280481@cluster0.ljuzc3b.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("Database connected successfully");
}).catch((e)=>{
    console.log(e);
})
app.use(express.json());
// app.use(cors());
app.use(SponserRouter);
app.listen(PORT, ()=>{
    console.log(`the server is running at ${PORT}`);
})