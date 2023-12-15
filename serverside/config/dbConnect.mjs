import mongoose from "mongoose";
const connectDB = async(url)=>{
    try{
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Connnected to MongoDb') 
    }
    catch(error){
        console.log('Failed to connect to MongoDb:', error.message)
    }
}
export default connectDB;