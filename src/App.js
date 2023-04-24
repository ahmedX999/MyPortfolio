import './App.css';
import Accueil from './Accueil';
import Header from './Header';
import Footer from './Footer';
import Formation from './Formation';
import Experience from './Experience';
import Certification from './Certif';


import { Navbar,Nav,Container } from 'react-bootstrap';
import {
 
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Projets from './Projets';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      <Header />
    
  
      <Navbar  bg="light"  variant="light" expand="lg" ms-auto > 
        <Container  >
      
          <Nav  className=" py-3  mx-auto" >
            <Nav.Link as={Link} to="/">Accueil</Nav.Link>
            <Nav.Link as={Link} to="/formations">Formations</Nav.Link>
            <Nav.Link as={Link} to="/experiences">Experiences</Nav.Link>
            <Nav.Link as={Link} to="/projets">Projets</Nav.Link>
            <Nav.Link as={Link} to="/certificates">Certifications</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div>
        <Routes>
          <Route  path="/" element={<Accueil/>}/>
          <Route  path="/formations" element={<Formation/>}/>
          <Route  path="/certificates" element={<Certification/>}/>
          <Route  path="/experiences" element={<Experience/>}/>
          <Route  path="/projets" element={<Projets/>}/>
        
        </Routes>
        </div>
      
        <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
