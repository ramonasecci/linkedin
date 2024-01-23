import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';
import Home from './components/Home';
import Profile from './components/Profile';
import MyNavbar from './components/MyNavbar';

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <MyNavbar />
        <Container lg>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile/:id' element={<Profile />} />
          </Routes>
        </Container>
      </Container>
    </BrowserRouter>
  );
}

export default App;
