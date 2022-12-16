const mongoose = require('mongoose')

const connectToDB = async () => {
         try {
             const con = await mongoose.connect(process.env.REACT_APP_MONGO_URI)
             console.log(`MongoDB Connected: ${con.connection.host}`.brightMagenta)
         } catch (error) {
             
         }
}

module.exports = connectToDB