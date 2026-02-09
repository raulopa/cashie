import { TransactionType } from "@/features/transactions/enums/transaction-type";

export default interface CategoryDto {
    id: number;
    name: string;
    transactionType: TransactionType;
    color: string;
    icon: string;
}