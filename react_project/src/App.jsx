import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Products from "./pages/Products";


export default function App() {
return (
<AuthProvider>
<Router>
<Routes>
<Route path="/" element={<SignIn />} />
<Route path="/signup" element={<SignUp />} />
<Route path="/home" element={<Home />} />
<Route path="/products" element={<Products />} />
</Routes>
</Router>
</AuthProvider>
);
}