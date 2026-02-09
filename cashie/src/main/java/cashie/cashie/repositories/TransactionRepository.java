package cashie.cashie.repositories;

import cashie.cashie.models.TransactionModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.ArrayList;

public interface TransactionRepository extends JpaRepository<TransactionModel, Long> {
    ArrayList<TransactionModel> findByUserId(long userId);
}
