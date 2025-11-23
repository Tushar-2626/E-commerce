import { createContext, useState } from "react";


export const AuthContext = createContext();


export function AuthProvider({ children }) {
const [users, setUsers] = useState([]);
const [currentUser, setCurrentUser] = useState(null);


const register = (data) => {
setUsers((prev) => [...prev, data]);
};


const login = (email, password) => {
const foundUser = users.find(
(user) => user.email === email && user.password === password
);


if (foundUser) setCurrentUser(foundUser);
return foundUser;
};


return (
<AuthContext.Provider value={{ users, register, login, currentUser }}>
{children}
</AuthContext.Provider>
);
}