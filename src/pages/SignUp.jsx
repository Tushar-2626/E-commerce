import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";

export default function SignUp() {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Submitted:", form);
     
    register(form);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600">
      <div className="bg-rose-200 shadow-lg p-8 rounded-xl w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <InputField
            label="Full Name"
            name="name"
            type="text"
            placeholder="Enter full name"
            value={form.name}
            onChange={handleChange}
          />

          <InputField
            label="Email"
            name="email"
            type="email"
            placeholder="Enter email"
            value={form.email}
            onChange={handleChange}
          />

          <InputField
            label="Password"
            name="password"
            type="password"
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
          />

          <button className="w-full bg-blue-600 text-white p-2 rounded">
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-center">
          Already have an account?
          <a href="/" className="text-blue-600"> Sign In</a>
        </p>
      </div>
    </div>
  );
}
