import { PaymentMethod } from "../enums/payment-method";
import { TransactionType } from "../enums/transaction-type";

export interface TransactionDto {
    id: number;

    amount: number;
    description: string;
    date: Date;

    type: TransactionType;
    paymentMethod: PaymentMethod;

    categoryId: number;
    categoryName: string;
}