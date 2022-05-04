import './App.css';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import TopBar from './components/topbar/TopBar';
import Footer from './components/footer/Footer';
import { useContext } from 'react';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Error from './pages/error/Error';
import DataStructure from './pages/datastructure/DataStructure';
import About from './pages/about/About';
import Privacy from './pages/privacy/Privacy';
import AddNote from './pages/addnote/AddNote';
import Contact from './pages/contact/Contact';
import { UserContext } from './context/Context';

function App() {
  const { user } = useContext(UserContext);
  return (
    <Router>
      <div className='app'>
        <header>
          <TopBar />
        </header>
        <main className='app-body'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            {!user && <Route exact path='/register' element={<Register />} />}
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/datastructure' element={<DataStructure />} />
            {user && <Route exact path='/addnote' element={<AddNote />} />}
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/privacy' element={<Privacy />} />
            <Route exact path='*' element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
