import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/LoginSignUpTW/SignIn";
import SignUp from "./components/LoginSignUpTW/SignUp";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import DashHome from "./components/Dashboard/DashHome";
import Leaves from "./components/Leaves/Leaves";
import Reservation from "./components/Reservation/Reservation";
import SiteAdmins from "./components/SiteAdmins/SiteAdmins";
import RequestLeaves from "./components/Leaves/RequestLeaves";
import MyData from "./components/MyData/MyData";
import Employee from "./components/Employees/Employee";
import AdminDeptadd from "./components/Employees/AdminDeptadd";
import Vehicles from "./components/Vehicles/Vehicles";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        {/* <Route path="/Dashboard" element={<PrivateRoute ProtectRoute={<Dashboard /> }/> }/> */}
        <Route path="/Dashboard/" element={<PrivateRoute ProtectRoute={<Dashboard /> }/> } >
          <Route path="Home" element={<PrivateRoute ProtectRoute={<DashHome /> } /> } />
          <Route path="Leaves" element={<PrivateRoute ProtectRoute={<Leaves /> } /> } />
          <Route path="Reservation" element={<PrivateRoute ProtectRoute={<Reservation /> } /> } />
          <Route path="SiteAdmins" element={<PrivateRoute ProtectRoute={<SiteAdmins /> } /> } />
          <Route path="Leaves/RequestLeaves" element={<PrivateRoute ProtectRoute={<RequestLeaves />} /> } />
          <Route path='MyData' element={<PrivateRoute ProtectRoute={<MyData /> } /> } />
          <Route path='Employee' element={<PrivateRoute ProtectRoute={<Employee /> } /> } />
          <Route path="Employee/AdminDeptadd/:id" element={<PrivateRoute ProtectRoute={<AdminDeptadd />} /> } />
          <Route path="Vehicles" element={<PrivateRoute ProtectRoute={<Vehicles /> } /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}