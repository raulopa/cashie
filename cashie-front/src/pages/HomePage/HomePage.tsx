import NewTransactionModal from "@/features/transactions/components/NewTransactionModal";
import TransactionTable from "@/features/transactions/components/TransactionTable";
import { Button } from "@heroui/button";
import { useDisclosure } from "@heroui/modal";

export const categories = [
    { key: "food", label: "Comida" },
    { key: "transport", label: "Transporte" },
    { key: "housing", label: "Vivienda" },
    { key: "entertainment", label: "Entretenimiento" },
    { key: "other", label: "Otro" },
];

export function HomePage() {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div className="flex flex-col items-center justify-center h-screen w-full bg-background text-foreground">
            <h1 className="text-4xl font-bold mb-8">Cashie</h1>
            <div className="w-4/5 max-w-4xl bg-content1 rounded-2xl shadow-xl border border-divider overflow-hidden ">
                <div className="w-full flex flex-col md:flex-row items-stretch justify-around gap-6 p-8">
                    <div className="flex-1 flex flex-col items-start justify-center p-6 bg-content2 rounded-xl border border-divider">
                        <p className="text-sm font-medium text-default-500 uppercase tracking-wider">Balance total</p>
                        <p className="text-4xl font-bold mt-2">1234€</p>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-center p-6 bg-content2 rounded-xl border border-divider">
                        <p className="text-sm font-medium text-default-500 uppercase tracking-wider">Ingresos</p>
                        <p className="text-4xl font-bold mt-2 text-success">1234€</p>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-center p-6 bg-content2 rounded-xl border border-divider">
                        <p className="text-sm font-medium text-default-500 uppercase tracking-wider">Gastos</p>
                        <p className="text-4xl font-bold mt-2 text-danger">1234€</p>
                    </div>
                </div>
            </div>
            <div className="mb-5 flex items-center justify-end w-4/5">
                <Button onPress={onOpen} color="primary" size="lg">
                    Nuevo Movimiento
                </Button>
            </div>
            <div className="w-4/5 bg-content1 rounded-2xl shadow-xl border border-divider overflow-hidden p-8">
                <div className="text-sm font-medium text-default-500 uppercase tracking-wider">
                    Transacciones
                </div>
                <div className="mt-4">
                    <TransactionTable></TransactionTable>
                </div>
            </div>

            <NewTransactionModal isOpen={isOpen} onOpenChange={onOpenChange} />
        </div>
    );
}
