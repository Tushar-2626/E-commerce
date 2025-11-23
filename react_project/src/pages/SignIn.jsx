import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";


export default function SignIn() {
const { login } = useContext(AuthContext);
const navigate = useNavigate();


const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");


const handleSubmit = (e) => {
e.preventDefault();
const result = login(email, password);
if (result) navigate("/products");
else setError("Invalid email or password");
};


return (
<div className="min-h-screen flex items-center justify-center bg-gray-100">
<div className="bg-white shadow-lg p-8 rounded-xl w-96">
<h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>


<form className="space-y-4" onSubmit={handleSubmit}>
<InputField
label="Email"
type="email"
placeholder="Enter email"
value={email}
onChange={(e) => setEmail(e.target.value)}
/>


<InputField
label="Password"
type="password"
placeholder="Enter password"
value={password}
onChange={(e) => setPassword(e.target.value)}
/>


{error && <p className="text-red-500 text-sm">{error}</p>}


<button className="w-full bg-blue-600 text-white p-2 rounded">Login</button>
</form>


<p className="mt-4 text-center">
Don't have an account?
<a href="/signup" className="text-blue-600"> Sign Up</a>
</p>
</div>
</div>
);
}