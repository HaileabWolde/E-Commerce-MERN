import express from 'express'
import { createproduct,  getproduct} from '../controllers/product.js'
import Auth from '../middlewares/Auth.js'
import Admin from '../middlewares/Admin.js'

const router = express.Router()
router.get('/getproduct', getproduct)
router.post('/createProduct', Auth, Admin, createproduct)
export default router