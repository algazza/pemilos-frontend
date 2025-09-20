import axios from "axios";
import { apiUrl } from "@/lib/api";

const api = axios.create({
    baseURL: `${apiUrl}/api/v1`
})

export async function fetchUsers(page: number) {
    const response = await api.get(`/admin/user`, {
        params: { page },
    });
    return response.data;
}