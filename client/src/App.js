import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import HomePage from './Pages/HomePage/HomePage';
import CartPage from './Pages/Cart/CartPage';
import SignIn from './Pages/SignIn/SignIn';
import PageDetails from './Pages/DetailsPage/DetailedPage';
function App() {
  return (
    <BrowserRouter>
     <Header/>
      <main>
      <Container>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path='/signIn' element={<SignIn/>}/>
          <Route path='/product:id' element={<PageDetails/>}/>
        </Routes>
   </Container>
     </main>
     <Footer/>
    </BrowserRouter>
   
   )
}

export default App;
