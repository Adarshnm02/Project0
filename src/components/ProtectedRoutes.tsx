import { Navigate } from "@tanstack/react-router";
import { useAuth } from "../context/AuthContext";


export const ProtectedRoutes = ({ children, permissions, allowGuest } : {children: React.ReactNode; permissions?: string[], allowGuest?: boolean}) => {
    
const { user, hasPermission } = useAuth()
console.log("User", user, "Allow Guest", allowGuest, "Permissions", permissions);


//Allow guest user if 'allowGuest' is true
if(allowGuest && !user) {
    return children;
}

// Redirect to login if user is not authenticated
if(!user){
    return <Navigate to="/login" />
}

// Redirect to unauthorized if the user lacks required permissions
if(permissions && !permissions.every((p) => hasPermission(p))) {
    return <Navigate to="/unauthorized" />
}

// Render the children if the user is authenticated & has permissions
return children;

}