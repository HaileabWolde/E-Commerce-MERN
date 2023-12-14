import express from 'express'
import { createproduct } from '../controllers/product.js'
import Auth from '../middlewares/Auth.js'
import Admin from '../middlewares/Admin.js'

const router = express.Router()

router.post('/createProduct', Auth, Admin, createproduct)
export default router