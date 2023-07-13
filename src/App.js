import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Blogs from "./pages/Blogs/Blogs";
import AddProduct from "./pages/Dashboard/AddProduct";
import AddReviews from "./pages/Dashboard/AddReviews";
import Dashboard from "./pages/Dashboard/Dashboard";
import MakeAdmin from "./pages/Dashboard/MakeAdmin";
import ManageAllOrder from "./pages/Dashboard/ManageAllOrder";
import ManageProduct from "./pages/Dashboard/ManageProduct";
import MyOrder from "./pages/Dashboard/MyOrder";
import MyProfile from "./pages/Dashboard/MyProfile";
import Payment from "./pages/Dashboard/Payment";
import DataNotFound from "./pages/DataNotFound/DataNotFound";
import Home from "./pages/Home/Home";
import PartDetails from "./pages/Home/PartDetails";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import RequireAdmin from "./pages/login/RequireAdmin";
import RequireAuth from "./pages/login/RequireAuth";
import MyPortFolio from "./pages/MyPortFolio/MyPortFolio";
import Navbar from "./Shared/Navbar";
import AllParts from "./pages/Home/AllParts";

function App() {
  return (
    <div className=" mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/all-parts" element={<AllParts />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/my-portfolio" element={<MyPortFolio />}></Route>

        <Route
          path="part/:id"
          element={
            <RequireAuth>
              <PartDetails />
            </RequireAuth>
          }
        />

        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile />}></Route>
          <Route path="my-order" element={<MyOrder />}></Route>
          <Route path="payment/:id" element={<Payment />}></Route>
          <Route path="add-review" element={<AddReviews />}></Route>
          <Route
            path="manage-order"
            element={
              <RequireAdmin>
                <ManageAllOrder />
              </RequireAdmin>
            }
          />
          <Route
            path="add-product"
            element={
              <RequireAdmin>
                <AddProduct />
              </RequireAdmin>
            }
          />
          <Route
            path="manage-product"
            element={
              <RequireAdmin>
                <ManageProduct />
              </RequireAdmin>
            }
          />
          <Route
            path="make-admin"
            element={
              <RequireAdmin>
                <MakeAdmin />
              </RequireAdmin>
            }
          />
        </Route>

        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="*" element={<DataNotFound />}></Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
