import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {Container} from 'react-bootstrap'
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import CartPage from './Pages/CartPage';
import SignIn from './Pages/SignIn';
import PageDetails from './Pages/DetailedPage';
import ProfileDetails from './Pages/ProfileDetails';
import Shipping from './Pages/Shipping';
import PaymentMethod from './Pages/PaymentMethod';
import Order from './Pages/PlaceOrder';
import OrderScreen from './Pages/OrderScreen';
function App() {
  const {userInfo} = useSelector((state)=>state.user) 
  return (
    <BrowserRouter>
     <Header/>
      <main>
      <Container>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/profile" element={userInfo?.name ? <ProfileDetails/> : <Navigate to="/signIn"/>}/>
          <Route path="/cart/:id" element={userInfo?.name ? <CartPage/> : <Navigate to='/signIn'/>}/>
          <Route path='/order/:id' element={userInfo?.name ? <OrderScreen/>: <Navigate to='/signIn'/> }/>
          <Route path='/signIn' element={<SignIn/>}/>
          <Route path='/product/:id' element={<PageDetails/>}/>
          <Route path="/shipping" element={ userInfo?.name ?<Shipping/> : <Navigate to='/signIn'/>}/>
          <Route path="/payment" element={userInfo?.name ? <PaymentMethod/> : <Navigate to='/signIn'/>}/>
          <Route path="/placeorder" element={userInfo?.name ? <Order/> : <Navigate to='/signIn'/>}/>
        </Routes>
   </Container>
     </main>
     <Footer/>
    </BrowserRouter>
   
   )
}

export default App;
