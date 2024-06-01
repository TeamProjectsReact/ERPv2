import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/LoginSignUp/SignIn";
import SignUp from "./components/LoginSignUp/SignUp";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}