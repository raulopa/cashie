import NewTransactionModal from "@/features/transactions/components/NewTransactionModal";
import { Button } from "@heroui/button";
import { useDisclosure } from "@heroui/modal";
import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell
} from "@heroui/table";

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
                    <Table aria-label="Example static collection table">
                        <TableHeader>
                            <TableColumn>NAME</TableColumn>
                            <TableColumn>ROLE</TableColumn>
                            <TableColumn>STATUS</TableColumn>
                        </TableHeader>
                        <TableBody>
                            <TableRow key="1">
                                <TableCell>Tony Reichert</TableCell>
                                <TableCell>CEO</TableCell>
                                <TableCell>Active</TableCell>
                            </TableRow>
                            <TableRow key="2">
                                <TableCell>Zoey Lang</TableCell>
                                <TableCell>Technical Lead</TableCell>
                                <TableCell>Paused</TableCell>
                            </TableRow>
                            <TableRow key="3">
                                <TableCell>Jane Fisher</TableCell>
                                <TableCell>Senior Developer</TableCell>
                                <TableCell>Active</TableCell>
                            </TableRow>
                            <TableRow key="4">
                                <TableCell>William Howard</TableCell>
                                <TableCell>Community Manager</TableCell>
                                <TableCell>Vacation</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>

            <NewTransactionModal isOpen={isOpen} onOpenChange={onOpenChange} />
        </div>
    );
}
