import { createFileRoute } from '@tanstack/react-router'
import { useAuth } from '../../context/AuthContext'
import { ProtectedRoutes } from '../../components/ProtectedRoutes'

export const Route = createFileRoute('/_protected/dashboard')({
  component: () => (
    <ProtectedRoutes allowGuest>
      <RouteComponent />
    </ProtectedRoutes>
  )
})

function RouteComponent() {
  const { user } = useAuth()
  console.log("User Data:", user );

  return (
    <div className="p-4 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      {user ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold">Welcome, {user.username}!</h2>
          <p className="mt-2 text-lg">Your role is: {user.role}</p>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold">Welcome, Guest.</h2>
          <p className="mt-2 text-lg">No role assigned to you</p>
        </div>
      )}
    </div>
  )
}

