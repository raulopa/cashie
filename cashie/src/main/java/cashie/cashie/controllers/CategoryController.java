package cashie.cashie.controllers;

import cashie.cashie.dtos.CategoryDto;
import cashie.cashie.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @PostMapping()
    public CategoryDto save(@RequestBody CategoryDto categoryDto) {
        return categoryService.saveCategory(categoryDto);
    }
}
