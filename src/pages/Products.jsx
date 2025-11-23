import { useEffect, useState } from "react";


export default function Products() {
const [products, setProducts] = useState([]);


useEffect(() => {
fetch("https://fakestoreapi.com/products")
.then((res) => res.json())
.then((data) => setProducts(data));
}, []);


return (
<div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 p-8">
<h1 className="text-3xl font-bold text-center mb-6 text-white">Products</h1>


<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
{products.map((item) => (
<div key={item.id} className="bg-red-200 shadow p-4 rounded-lg">
<img
src={item.image}
alt={item.title}
className="h-40 mx-auto object-contain mb-4"
/>
<h2 className="font-semibold text-sm mb-2">{item.title}</h2>
<p className="text-green-600 font-bold mb-2">${item.price}</p>
<p className="text-xs text-gray-500">{item.category}</p>
</div>
))}
</div>
</div>
);
}