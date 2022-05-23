import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './pages/Home/Home';
import PartDetails from './pages/Home/PartDetails';
import Login from './pages/login/Login';
import Register from './pages/login/Register';
import Navbar from './Shared/Navbar';

function App() {
  return (
    <div className='lg:max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='part/:id' element={<PartDetails />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='register' element={<Register />}></Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
