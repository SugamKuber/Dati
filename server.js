const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose')
const url = "mongodb+srv://1234:1234@cluster0.gfqjm4z.mongodb.net/?retryWrites=true&w=majority";

(async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    } catch (err) {
        console.log('Error occured: ', err.toString())
    }
})()
const connection = mongoose.connection

connection.once('open', () => {
    console.log('Successfully connected to database')
})

app.use(cors());
app.use(express.json());

mongoose.Promise = global.Promise

app.use("/", require("./routes/noteRoute"));

app.listen(8000, function () {
    console.log("expresss server is running on port 8000");
})