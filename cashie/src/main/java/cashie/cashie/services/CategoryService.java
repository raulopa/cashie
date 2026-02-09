package cashie.cashie.services;

import cashie.cashie.dtos.CategoryDto;
import cashie.cashie.exceptions.UserNotFoundException;
import cashie.cashie.mappers.CategoryMapper;
import cashie.cashie.models.CategoryModel;
import cashie.cashie.models.UserModel;
import cashie.cashie.repositories.CategoryRepository;
import cashie.cashie.repositories.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {

    private final UserRepository userRepository;
    private final CategoryRepository categoryRepository;
    private final CategoryMapper categoryMapper;

    public CategoryService(UserRepository userRepository, CategoryRepository categoryRepository, CategoryMapper categoryMapper) {
        this.userRepository = userRepository;
        this.categoryRepository = categoryRepository;
        this.categoryMapper = categoryMapper;
    }

    public List<CategoryDto> getCategoriesByUserId(long userId){
        return categoryRepository.findByUserId(userId)
                .stream()
                .map(categoryMapper::toDto)
                .toList();
    }

    public CategoryDto saveCategory(CategoryDto categoryDto){
        Optional<UserModel> user = userRepository.findById(categoryDto.getUserId());
        if(!user.isPresent())
            throw new UserNotFoundException();
        CategoryModel categoryModel = categoryMapper.toEntity(categoryDto, user.get());
        categoryRepository.save(categoryModel);

        return categoryMapper.toDto(categoryModel);
    }

}
