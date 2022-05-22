import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import PartDetails from './pages/Home/PartDetails';
import Navbar from './Shared/Navbar';

function App() {
  return (
    <div className='lg:max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='part/:id' element={<PartDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
