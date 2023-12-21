import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {Container} from 'react-bootstrap'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import HomePage from './Pages/HomePage/HomePage';
import CartPage from './Pages/Cart/CartPage';
import SignIn from './Pages/SignIn/SignIn';
import PageDetails from './Pages/DetailsPage/DetailedPage';
import ProfileDetails from './Pages/ProfileDetails/ProfileDetails';
import Shipping from './Pages/Shipping/Shipping';
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
          <Route path="/cart/:id" element={<CartPage/>}/>
          <Route path='/signIn' element={<SignIn/>}/>
          <Route path='/product/:id' element={<PageDetails/>}/>
          <Route path="/shipping" element={<Shipping/>}/>
        </Routes>
   </Container>
     </main>
     <Footer/>
    </BrowserRouter>
   
   )
}

export default App;
