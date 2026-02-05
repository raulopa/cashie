package cashie.cashie.mappers;

import cashie.cashie.dtos.CategoryDto;
import cashie.cashie.models.CategoryModel;
import cashie.cashie.models.UserModel;
import org.springframework.stereotype.Component;

@Component
public class CategoryMapper {

    public CategoryModel toEntity(CategoryDto dto, UserModel user) {
        CategoryModel category = new CategoryModel();
        category.setName(dto.getName());
        category.setType(dto.getType());
        category.setColor(dto.getColor());
        category.setUser(user);
        return category;
    }

    public CategoryDto toDto(CategoryModel category) {
        CategoryDto dto = new CategoryDto();
        dto.setId(category.getId());
        dto.setName(category.getName());
        dto.setType(category.getType());
        dto.setColor(category.getColor());
        return dto;
    }
}