const express = require("express");
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")

//import cookieParser from "cookie-parser";
const cors = require('cors');
//import db from "./config/Database.js";
//import router from "./routes/index.js";
const main = require("./routes/index.js");


dotenv.config();

const app = express();
 
app.use(cors({ credentials:true, origin:'http://localhost:3000' }));

app.use(cookieParser());
app.use(express.json());

//post functionality
app.use(bodyParser.urlencoded({
    extended: true
  }));


app.use(main);
 
app.listen(5000, ()=> console.log('Server running at port 5000'));