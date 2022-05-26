import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddProduct from './pages/Dashboard/AddProduct';
import AddReviews from './pages/Dashboard/AddReviews';
import Dashboard from './pages/Dashboard/Dashboard';
import MakeAdmin from './pages/Dashboard/MakeAdmin';
import ManageAllOrder from './pages/Dashboard/ManageAllOrder';
import ManageProduct from './pages/Dashboard/ManageProduct';
import MyOrder from './pages/Dashboard/MyOrder';
import MyProfile from './pages/Dashboard/MyProfile';
import Home from './pages/Home/Home';
import PartDetails from './pages/Home/PartDetails';
import Login from './pages/login/Login';
import Register from './pages/login/Register';
import RequireAuth from './pages/login/RequireAuth';
import Navbar from './Shared/Navbar';

function App() {
  return (
    <div className='lg:max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>

        <Route path='part/:id' element={
          <RequireAuth>
            <PartDetails />
          </RequireAuth>
        } />

        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<MyProfile />}></Route>
          <Route path='my-order' element={<MyOrder />}></Route>
          <Route path='add-review' element={<AddReviews />}></Route>
          <Route path='manage-order' element={<ManageAllOrder />}></Route>
          <Route path='add-product' element={<AddProduct />}></Route>
          <Route path='manage-product' element={<ManageProduct />}></Route>
          <Route path='make-admin' element={<MakeAdmin />}></Route>
        </Route>

        <Route path='login' element={<Login />}></Route>
        <Route path='register' element={<Register />}></Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
