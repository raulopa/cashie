import { Button } from "@heroui/button";
import { PlusIcon } from "lucide-react";
import NewCategoryModal from "./NewCategoryModal";
import { useDisclosure } from "@heroui/modal";
import { CategoryService } from "../services/category-service";
import { useEffect, useState } from "react";
import CategoryDto from "../dtos/category-dto";
import { Checkbox } from "@heroui/checkbox";
import { cn } from "@heroui/theme";

interface CategoryListProps {
    className?: string;
}

export default function CategoryList({ className }: CategoryListProps) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [categories, setCategories] = useState<CategoryDto[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

    const fetchCategories = async () => {
        try {
            const categories = await CategoryService.getAll();
            setCategories(categories);
        } catch (error) {
            console.error("Error cargando categorías:", error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const handleCheckboxChange = (categoryId: number) => {
        setSelectedCategories(prev =>
            prev.includes(categoryId)
                ? prev.filter(id => id !== categoryId)
                : [...prev, categoryId]
        );
    };


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
                    <Checkbox classNames={{
                        base: cn(
                            "inline-flex w-full max-w-md bg-content1",
                            "hover:bg-content2 items-center justify-start",
                            "cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
                            "data-[selected=true]:border-primary",
                        ),
                        label: "w-full",
                    }}
                        key={category.id}
                        checked={selectedCategories.includes(category.id)}
                        onChange={() => handleCheckboxChange(category.id)}
                    >
                        {category.name}
                    </Checkbox>
                ))}
            </div>
            <NewCategoryModal isOpen={isOpen} onOpenChange={onOpenChange} onSuccess={fetchCategories} />
        </div>
    )
}

