import { Button } from "@heroui/button";
import { PlusIcon } from "lucide-react";
import NewCategoryModal from "./NewCategoryModal";
import { useDisclosure } from "@heroui/modal";
import { CategoryService } from "../services/category-service";
import { useEffect, useState } from "react";
import CategoryDto from "../dtos/category-dto";

interface CategoryListProps {
    className?: string;
}

export default function CategoryList({ className }: CategoryListProps) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [categories, setCategories] = useState<CategoryDto[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categories = await CategoryService.getAll();
                setCategories(categories);
            } catch (error) {
                console.error("Error cargando categorías:", error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <div className={`w-full h-full bg-content1 rounded-2xl shadow-xl border border-divider overflow-hidden ${className}`}>
            <div className="flex justify-between items-center">
                <p className="p-8">Lista de categorias</p>
                <Button className="mr-6" isIconOnly color="primary" onPress={onOpen}>
                    <PlusIcon />
                </Button>
            </div>
            <div>
                {categories.map((category: any) => (
                    <p key={category.id}>{category.name}</p>
                ))}
            </div>
            <NewCategoryModal isOpen={isOpen} onOpenChange={onOpenChange} />
        </div>
    )
}

