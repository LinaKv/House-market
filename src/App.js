import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import Explore from "./pages/Explore";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignIn from "./pages/Signin";
import SignUp from "./pages/SignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Category from "./pages/Category";
import CreateListings from "./pages/CreateListings";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/Offers" element={<Offers />} />
          <Route path="/category/:categoryName" element={<Category />} />

          <Route path="/Profile" element={<PrivateRoute />}>
            <Route path="/Profile" element={<Profile />} />
          </Route>
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/CreateListings" element={<CreateListings />} />
        </Routes>

        <Navbar />
      </Router>

      <ToastContainer />
    </>
  );
}

export default App;
