import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


export default function Home() {
const { currentUser } = useContext(AuthContext);


return (
<div className="min-h-screen flex items-center justify-center bg-green-100">
<div className="bg-white shadow p-8 rounded-xl text-center">
<h1 className="text-3xl font-bold">Welcome</h1>
<p className="mt-2 text-xl">{currentUser?.name}</p>
</div>
</div>
);
}