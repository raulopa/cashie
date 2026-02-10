import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "@heroui/modal";

import { Input } from "@heroui/input";
import { useState } from "react";
import { Button } from "@heroui/button";
import CategoryDto from "../dtos/category-dto";
import { TransactionType } from "@/features/transactions/enums/transaction-type";
import { CategoryService } from "../services/category-service";

export default function NewCategoryModal({ isOpen, onOpenChange, onSuccess }: { isOpen: boolean; onOpenChange: () => void; onSuccess?: () => void }) {

    const [categoryDto, setCategoryDto] = useState<CategoryDto>({
        id: 0,
        name: '',
        type: TransactionType.INCOME,
        color: '#3b82f6',
        icon: '',
    });

    const isIncome = categoryDto.type === TransactionType.INCOME;
    const isExpense = categoryDto.type === TransactionType.EXPENSE;

    const handleTypeChange = (type: TransactionType) => {
        setCategoryDto(prev => ({
            ...prev,
            type: type
        }));
    }

    const handleSave = async (onClose: () => void) => {
        try {
            await CategoryService.save(categoryDto);
            onSuccess?.();
            onClose();
            setCategoryDto({
                id: 0,
                name: '',
                type: TransactionType.INCOME,
                color: '#3b82f6',
                icon: '',
            });
        } catch (error) {
            console.error("Error saving category:", error);
        }
    }

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                {(onClose: any) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            Nueva Categoría
                        </ModalHeader>

                        <ModalBody>
                            <div className="flex justify-evenly gap-3">
                                <Button
                                    className="flex-1"
                                    color="primary"
                                    variant={isIncome ? "solid" : "bordered"}
                                    onPress={() => handleTypeChange(TransactionType.INCOME)}
                                >
                                    Ingreso
                                </Button>
                                <Button
                                    className="flex-1"
                                    color="danger"
                                    variant={isExpense ? "solid" : "bordered"}
                                    onPress={() => handleTypeChange(TransactionType.EXPENSE)}
                                >
                                    Gasto
                                </Button>
                            </div>
                            <div className="mt-4 flex flex-col gap-4">
                                <Input
                                    isRequired
                                    label="Nombre"
                                    placeholder="Ej: Alimentación, Salario..."
                                    value={categoryDto.name}
                                    onValueChange={(value) =>
                                        setCategoryDto(prev => ({ ...prev, name: value }))
                                    }
                                />

                                <div className="flex gap-4">
                                    <Input
                                        className="flex-1"
                                        label="Icono"
                                        placeholder="Ej: shopping-cart"
                                        value={categoryDto.icon}
                                        onValueChange={(value) =>
                                            setCategoryDto(prev => ({ ...prev, icon: value }))
                                        }
                                    />
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-medium px-1">Color</label>
                                        <input
                                            type="color"
                                            className="h-10 w-16 p-1 rounded-lg bg-content2 border border-divider cursor-pointer"
                                            value={categoryDto.color}
                                            onChange={(e) => setCategoryDto(prev => ({ ...prev, color: e.target.value }))}
                                        />
                                    </div>
                                </div>
                            </div>
                        </ModalBody>

                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                                Cancelar
                            </Button>
                            <Button color="primary" onPress={() => handleSave(onClose)}>
                                Guardar
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}
