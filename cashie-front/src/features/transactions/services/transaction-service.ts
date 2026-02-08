
import { api } from '@/shared/api/api';
import { TransactionDto } from '../dtos/transaction-dto';

export const TransactionService = {
    async getAll(): Promise<TransactionDto[]> {
        const { data } = await api.get('/transactions');
        return data;
    },

    async save(transaction: TransactionDto): Promise<TransactionDto> {
        const { data } = await api.post('/transactions', transaction);
        return data;
    },

    async delete(id: number): Promise<void> {
        await api.delete(`/transactions/${id}`);
    },

    async update(transaction: TransactionDto): Promise<TransactionDto> {
        const { data } = await api.put(
            `/transactions/${transaction.id}`,
            transaction
        );
        return data;
    },
};
