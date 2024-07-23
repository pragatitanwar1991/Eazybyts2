const mongoos = require('mongoose');

require("dotenv").config();
const connectDB = async()=>{
    try {
        await mongoos.connect(process.env.MONGO_URL)
            console.log("Connected!!!")
    } catch (error) {
        console.log("Not Connected!!")
    }
}
module.exports = connectDB