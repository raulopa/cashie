import { TransactionDto } from "./dtos/transaction-dto";

const API_URL = process.env.REACT_APP_API_URL;

const TRANSACTION_URL = `${API_URL}/transactions`;

export const TransactionService = {
    async getAll() {
        const response = await fetch(TRANSACTION_URL);
        return response.json();
    },
    async save(transaction: TransactionDto) {
        const response = await fetch(TRANSACTION_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(transaction),
        });
        return response.json();
    },
    async delete(id: number) {
        const response = await fetch(`${TRANSACTION_URL}/${id}`, {
            method: 'DELETE',
        });
        return response.json();
    },
    async update(transaction: TransactionDto) {
        const response = await fetch(`${TRANSACTION_URL}/${transaction.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(transaction),
        });
        return response.json();
    }
}
