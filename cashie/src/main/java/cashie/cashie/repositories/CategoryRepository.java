package cashie.cashie.repositories;

import cashie.cashie.models.CategoryModel;
import cashie.cashie.models.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.ArrayList;

public interface CategoryRepository extends JpaRepository<CategoryModel, Long> {
    ArrayList<CategoryModel> findByUserId(long userId);
}
