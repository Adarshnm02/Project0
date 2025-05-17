import axios from "axios";

const API_URL = "http://localhost:3001";

export interface Product {
    id: string;
    name: string;
    price: number;
}


// Login User

export const loginUser = async (username: string, password: string) => {
    try{
        const response = await axios.get(`${API_URL}/users`, {
            params: {
                username,
                password
            }
        });
        return response.data[0] || null;
    }catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
}

// Fetch Products

export const getProducts = async (): Promise<Product[] | null> => {
    try {
        const response = await axios.get<Product[]>(`${API_URL}/products`);
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};

// Delete Product

export const deleteProduct = async (id: string): Promise<void> => {
    try {
        await axios.delete(`${API_URL}/products/${id}`);
    } catch (error) {
        console.error("Error deleting product:", error);
    }
};