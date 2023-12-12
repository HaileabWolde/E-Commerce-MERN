import './App.css';
import {Container} from 'react-bootstrap'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <>
     <main>
      <Header/>
    <Container>
   <h1 className="text-3xl font-bold">E-Commerce Application</h1>
   </Container>
     </main>
     <Footer/>
    </>
  
   )
}

export default App;
