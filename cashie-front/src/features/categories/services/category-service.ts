import CategoryDto from "../dtos/category-dto";
import { api } from '@/shared/api/api';

export const CategoryService = {
    async getAll(): Promise<CategoryDto[]> {
        const { data } = await api.get('/categories');
        return data;
    },

    async save(transaction: CategoryDto): Promise<CategoryDto> {
        const { data } = await api.post('/categories', transaction);
        return data;
    },

    async delete(id: number): Promise<void> {
        await api.delete(`/categories/${id}`);
    },

    async update(transaction: CategoryDto): Promise<CategoryDto> {
        const { data } = await api.put(
            `/categories/${transaction.id}`,
            transaction
        );
        return data;
    },
}