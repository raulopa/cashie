import { Button } from "@heroui/button";
import { PlusIcon } from "lucide-react";
import NewCategoryModal from "./NewCategoryModal";
import { useDisclosure } from "@heroui/modal";

interface CategoryListProps {
    className?: string;
}

export default function CategoryList({ className }: CategoryListProps) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div className={`w-full h-full bg-content1 rounded-2xl shadow-xl border border-divider overflow-hidden ${className}`}>
            <div className="flex justify-between items-center">
                <p className="p-8">Lista de categorias</p>
                <Button className="mr-6" isIconOnly color="primary" onPress={onOpen}>
                    <PlusIcon />
                </Button>
            </div>

            <NewCategoryModal isOpen={isOpen} onOpenChange={onOpenChange} />
        </div>
    )
}

