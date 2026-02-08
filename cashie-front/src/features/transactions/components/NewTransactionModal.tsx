import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "@heroui/modal";

import { Select, SelectItem } from "@heroui/select";

import { Input } from "@heroui/input";
import { DatePicker } from "@heroui/date-picker";
import { NumberInput } from "@heroui/number-input";
import { useState } from "react";
import { Button } from "@heroui/button";
import { PaymentMethod } from "../enums/payment-method";
import { TransactionDto } from "../dtos/transaction-dto";
import { TransactionType } from "../enums/transaction-type";
import { TransactionService } from "../services/transaction-service";

export const paymentMethods = [
    { key: 'cash', label: 'Efectivo', value: PaymentMethod.CASH },
    { key: 'card', label: 'Tarjeta', value: PaymentMethod.CARD },
    { key: 'transfer', label: 'Transferencia', value: PaymentMethod.TRANSFER },
    { key: 'paypal', label: 'PayPal', value: PaymentMethod.PAYPAL },
    { key: 'bizum', label: 'Bizum', value: PaymentMethod.BIZUM },
    { key: 'other', label: 'Otro', value: PaymentMethod.OTHER },
]


export default function NewTransactionModal({ isOpen, onOpenChange }: { isOpen: boolean; onOpenChange: () => void }) {

    const [isIncome, setIsIncome] = useState(true);
    const [isExpense, setIsExpense] = useState(false);

    const [transactionDto, setTransactionDto] = useState<TransactionDto>({
        id: 0,
        amount: 0,
        date: new Date(),
        description: '',
        paymentMethod: PaymentMethod.CASH,
        categoryId: 0,
        type: TransactionType.INCOME,
        categoryName: '',
    });

    const handleIncome = () => {
        setIsIncome(true);
        setIsExpense(false);
    }

    const handleExpense = () => {
        setIsIncome(false);
        setIsExpense(true);
    }

    const handleNewTransaction = (onClose: any) => {
        const { save } = TransactionService;
        save(transactionDto);
        onClose
    }

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                {(onClose: any) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            Nuevo movimiento
                        </ModalHeader>

                        <ModalBody>
                            <div className="flex justify-evenly">
                                <Button color="primary" variant={isIncome ? "solid" : "bordered"} onPress={handleIncome}>
                                    Ingreso
                                </Button>
                                <Button color="danger" variant={isExpense ? "solid" : "bordered"} onPress={handleExpense}>
                                    Gasto
                                </Button>
                            </div>
                            <div className="mt-2 flex items-center gap-3 flex-col justify-center">
                                <NumberInput
                                    isRequired
                                    className="max-w-xs"
                                    defaultValue={0}
                                    label="Cantidad"
                                    value={transactionDto.amount}
                                    onValueChange={(value) =>
                                        setTransactionDto(prev => ({
                                            ...prev,
                                            amount: value ?? 0,
                                        }))
                                    }
                                    placeholder="Introduce la cantidad"
                                />
                                <DatePicker className="max-w-xs" label="Fecha" isRequired />
                                <Input label="Descripción" placeholder="Describe el movimiento" type="text" className="max-w-xs" isRequired />
                                <Select label="Método de pago" className="max-w-xs">
                                    {paymentMethods.map((paymentMethod: any) => (
                                        <SelectItem key={paymentMethod.key}>
                                            {paymentMethod.label}
                                        </SelectItem>
                                    ))}
                                </Select>
                            </div>
                        </ModalBody>

                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                                Cancelar
                            </Button>
                            <Button color="primary" onPress={() => handleNewTransaction(onClose)}>
                                Guardar
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}