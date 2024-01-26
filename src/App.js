import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import MyNavbar from './components/MyNavbar';
import Job from './components/Job';
import Messaggistica from './components/Messaggistica';
import JobDetails from './components/JobDetails';
import JobSearchResults from './components/JobSearchResults';

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <MyNavbar />
        <Container lg>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile/:id' element={<Profile />} />
            <Route path='/job' element={<Job />} />
            <Route path='/jobdetails/:id' element={<JobDetails />}/>
            <Route path='/jobsearchresult/:url' element={<JobSearchResults />} />
          </Routes>
        </Container>
        <Messaggistica />
      </Container>
    </BrowserRouter>
  );
}

export default App;
