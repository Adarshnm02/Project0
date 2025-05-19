import { createFileRoute, useNavigate, redirect } from '@tanstack/react-router'
import { ProtectedRoutes } from '../../components/ProtectedRoutes'
import { PERMISSIONS } from '../../utils/roles'
import { getProducts, deleteProduct } from '../../api'
import { useAuth } from '../../context/AuthContext'

export const Route = createFileRoute('/_protected/products')({
  component: () => (
    <ProtectedRoutes permissions={[PERMISSIONS.VIEW_PRODUCT]}>
      <RouteComponent />
    </ProtectedRoutes>
  ),

  loader: async () => {
    return await getProducts();
  }
})

function RouteComponent() {
  const products = Route.useLoaderData()
  const { hasPermission } = useAuth()
  const navigate = useNavigate()

  const handleEdit = (id: string) => {
    alert(`Edit product with id: ${id}`);
    // Implement edit logic here
  }

  const handleDelete = async (id: string, e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!hasPermission(PERMISSIONS.DELETE_PRODUCT)) {
      navigate({ to: "/unauthorized" })
      return;
    }
    if (window.confirm("Are you sure you want to delete this product?")) {
      await deleteProduct(id);
      products?.filter((product) => product.id !== id);
    }
  }

  return (
    <div className="p-4 bg-gray-100 min-h-screen flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6">Product List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products?.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-2xl font-semibold">{product.name}</h3>
            <p className="text-gray-600 text-lg">Price: ${product.price}</p>
            <div className="flex justify-end space-x-4 mt-4">

              {hasPermission(PERMISSIONS.EDIT_PRODUCT) && (<button
                onClick={() => handleEdit(product.id)}
                className="text-blue-500 hover:underline"
              >
                Edit
              </button>)}

              <button
                onClick={(e) => handleDelete(product.id, e)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

