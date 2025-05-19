import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/unauthorized')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='flex flex-col items-center'>
      <h2 className='text-4xl font-bold my-4'>Unauthorized Access</h2>
      <p className='my-4'>
        You do not have permission to access this page
      </p>
      <p className='my-4'>
        <Link to='/dashboard' className='text-blue-500 hover:underline'>
          Go back to dashboard
        </Link>{' '}
        or{' '}
        <Link to='/login' className='text-blue-500 hover:underline'>
         Go back to login
        </Link>
      </p>
    </div>
  )
}
