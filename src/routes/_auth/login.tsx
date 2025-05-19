import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { loginUser } from "../../api";
import { useAuth } from "../../context/AuthContext";

export const Route = createFileRoute("/_auth/login")({
    component: RouteComponent,
})

function RouteComponent() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const {login: authLogin} = useAuth()
    const navigate = useNavigate();
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(!username || !password) {
            alert("Please fill in all fields");
            return;
        }else if(username && password) {
            const user = await loginUser(username, password);
            console.log("Form User:", user);
            if(user){
                authLogin(user);
                navigate({to: '/dashboard'})
            }
        }else{
            alert("Invalid username or password");
            setPassword("")
            setUsername("")
        }
    }
    return (
        <div className="flex flex-col items-center justify-center h-screen p-18 bg-gray-100">
            <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="******************"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
}
