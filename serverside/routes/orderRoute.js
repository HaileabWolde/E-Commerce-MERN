import  express from 'express'
import Auth from '../middlewares/Auth.js'
import { createOrder } from '../controllers/order.js'
const router = express.Router()

router.post('/createOrder', Auth, createOrder)

export default router