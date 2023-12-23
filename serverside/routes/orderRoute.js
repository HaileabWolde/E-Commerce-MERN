import  express from 'express'
import Auth from '../middlewares/Auth.js'
import { createOrder, getSingleOrder } from '../controllers/order.js'
const router = express.Router()

router.get('/SingleOrder/:id', getSingleOrder)
router.post('/createOrder', Auth, createOrder)

export default router