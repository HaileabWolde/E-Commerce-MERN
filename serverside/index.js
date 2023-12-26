import express from 'express'
import { config } from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import connectDB from './config/dbConnect.mjs'
import ErrorObject from './utils/ErrorObject.js'
import userRoute from './routes/userRoute.js'
import productRoute from './routes/productRoute.js'
import orderRoute from './routes/orderRoute.js'

config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
// Enable CORS
app.use(cors());
app.use(cookieParser());

app.get('/', (req, res)=>{
    res.json('Hello')
})
app.get('/config/paypal', (req, res)=>{
   res.status(200).json(process.env.CLIENT_ID)  
})
app.use('/user', userRoute)
app.use('/product', productRoute)
app.use('/order', orderRoute)
app.use(ErrorObject)
const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, ()=>{
            console.log(`Server is listening on port ${PORT}`)
        })
    }
    catch(error){
        console.log(error.message)
    }
   
}
start()