import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell
} from "@heroui/table";

export const transactionColMap: Record<string, string> = {
    id: "ID",
    amount: "Monto",
    description: "Descripción",
    date: "Fecha",
    type: "Tipo",
    paymentMethod: "Método de pago",
    categoryId: "ID Categoría",
    categoryName: "Categoría",
};

export const transactionCols = Object.entries(transactionColMap).map(
    ([key, name]) => ({
        key,
        name,
    })
);

const transactionsMock = [
    {
        id: 1,
        amount: 1500,
        description: "Pago de alquiler",
        date: new Date("2024-01-05"),
        type: "EXPENSE",
        paymentMethod: "TRANSFER",
        categoryId: 1,
        categoryName: "Vivienda",
    },
    {
        id: 2,
        amount: 3200,
        description: "Salario enero",
        date: new Date("2024-01-01"),
        type: "INCOME",
        paymentMethod: "BANK",
        categoryId: 2,
        categoryName: "Ingresos",
    },
    {
        id: 3,
        amount: 250,
        description: "Supermercado",
        date: new Date("2024-01-10"),
        type: "EXPENSE",
        paymentMethod: "CARD",
        categoryId: 3,
        categoryName: "Comida",
    },
];



export default function TransactionTable() {

    return (
        <div>
            <Table aria-label="Example static collection table">
                <TableHeader>
                    <TableHeader>
                        {transactionCols.map((col) => (
                            <TableColumn key={col.key}>
                                {col.name}
                            </TableColumn>
                        ))}
                    </TableHeader>
                </TableHeader>
                <TableBody>
                    {transactionsMock.map((transaction) => (
                        <TableRow key={transaction.id}>
                            {transactionCols.map((col) => (
                                <TableCell key={col.key}>
                                    {String(transaction[col.key as keyof typeof transaction])}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}