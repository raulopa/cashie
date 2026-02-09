import CategoryList from "@/features/categories/components/CategoryList";
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
        <div className="w-10/12 m-auto py-10 min-h-screen">
            <h1 className="text-4xl font-bold mb-8">Cashie</h1>

            <div className="flex flex-col md:flex-row items-stretch justify-center gap-6">
                <div className="w-full md:w-4/5 flex flex-col gap-6">
                    {/* Balances Section */}
                    <div className="w-full bg-content1 rounded-2xl shadow-xl border border-divider overflow-hidden">
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

                    {/* Action Button */}
                    <div className="flex items-center justify-end w-full">
                        <Button onPress={onOpen} color="primary" size="lg">
                            Nuevo Movimiento
                        </Button>
                    </div>

                    {/* Transactions Section */}
                    <div className="flex-1 w-full bg-content1 rounded-2xl shadow-xl border border-divider overflow-hidden p-8">
                        <div className="text-sm font-medium text-default-500 uppercase tracking-wider">
                            Transacciones
                        </div>
                        <div className="mt-4">
                            <TransactionTable />
                        </div>
                    </div>
                </div>

                {/* Categories Section */}
                <div className="w-full md:w-1/5 flex">
                    <CategoryList />
                </div>
            </div>

            <NewTransactionModal isOpen={isOpen} onOpenChange={onOpenChange} />
        </div>
    );
}
