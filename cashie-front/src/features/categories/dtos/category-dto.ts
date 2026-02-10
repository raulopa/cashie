import { TransactionType } from "@/features/transactions/enums/transaction-type";

export default interface CategoryDto {
    id: number;
    name: string;
    type: TransactionType;
    color: string;
    icon: string;
}