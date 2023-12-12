import {Container} from 'react-bootstrap'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import HomePage from './Pages/HomePage/HomePage';
function App() {
  return (
    <>
     <main>
      <Header/>
    <Container>
      <HomePage/>
   </Container>
     </main>
     <Footer/>
    </>
  
   )
}

export default App;
