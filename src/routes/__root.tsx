import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Navbar from '../components/Navbar'

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <hr className='border-gray-400' />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})



// <Link to="/" className="[&.active]:font-bold">
//   Home
// </Link>{' '}
// <Link to="/about" className="[&.active]:font-bold">
//   About
// </Link>