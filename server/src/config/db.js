const mongoose = require("mongoose")

const db_URL="mongodb+srv://mkmistryhd813:TmG93JRNtGyZm8xn@cluster0.z1rczuc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDB=()=>{
    return mongoose.connect(db_URL);
}
module.exports={connectDB}