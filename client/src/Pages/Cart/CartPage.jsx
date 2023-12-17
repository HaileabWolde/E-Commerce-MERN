import {useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { AddCartItem } from "../../actions/cart"
const CartPage = ()=>{
const dispatch = useDispatch()
const {id} = useParams()
const urlParams = new URLSearchParams(window.location.search)
const qtyFromUrl = urlParams.get('qty') || 1
useEffect(()=>{
    dispatch(AddCartItem(qtyFromUrl, id))
}, [id, qtyFromUrl])
const {cartItems, isloading} = useSelector((state)=> state.cart)

return (
    <div>
        <h1>Hello Cart Page</h1>
    </div>
)
}
export default  CartPage