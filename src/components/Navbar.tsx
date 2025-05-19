import { Link, useMatchRoute, useNavigate } from '@tanstack/react-router';
import { useAuth } from '../context/AuthContext';


const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate()
    const matchRoute = useMatchRoute()
    const isLoginPage = matchRoute({ to: "/login" });
    const handleLogout = () => {
        logout()
        navigate({ to: '/dashboard' })
    }

    return (
        <nav className="bg-blue-500 p-4">
            <ul className="flex space-x-4">
                {user ? (
                    <>
                        <li>
                            <Link to="/products" className="text-white hover:underline">Products</Link>
                        </li>
                        <li>
                            <button onClick={handleLogout} className="text-white bg-transparent hover:underline">Logout</button>
                        </li>
                    </>
                ) : (
                    <>
                    {isLoginPage? (
                          <li>
                            <Link to="/dashboard" className="text-white hover:underline">Dashboard</Link>
                        </li>
                    ) : (
                          <li>
                            <Link to="/login" className="text-white hover:underline">Login</Link>
                        </li>
                    )}
                    </>
                )}



            </ul>
        </nav>
    );
};

export default Navbar;

