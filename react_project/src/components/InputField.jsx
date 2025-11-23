export default function InputField({ label, ...props }) {
return (
<div className="flex flex-col gap-1">
<label className="font-medium">{label}</label>
<input
{...props}
className="border rounded p-2 w-full focus:outline-blue-500"
/>
</div>
);
}