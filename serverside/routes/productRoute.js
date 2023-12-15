import express from 'express'
import { createproduct,  getproduct,  getSingleproduct} from '../controllers/product.js'
import Auth from '../middlewares/Auth.js'
import Admin from '../middlewares/Admin.js'

const router = express.Router()
router.get('/getproduct', getproduct)
router.get('/getsingleproduct/:id', getSingleproduct)
router.post('/createProduct', Auth, Admin, createproduct)
export default router