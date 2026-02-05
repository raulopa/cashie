package cashie.cashie.mappers;

import cashie.cashie.dtos.TransactionDto;
import cashie.cashie.models.CategoryModel;
import cashie.cashie.models.TransactionModel;
import cashie.cashie.models.UserModel;
import org.springframework.stereotype.Component;

@Component
public class TransactionMapper {

    public TransactionModel toEntity(TransactionDto dto, CategoryModel category, UserModel user) {
        TransactionModel transaction = new TransactionModel();

        transaction.setAmount(dto.getAmount());
        transaction.setDescription(dto.getDescription());
        transaction.setDate(dto.getDate());
        transaction.setType(dto.getType());
        transaction.setPaymentMethod(dto.getPaymentMethod());
        transaction.setCategory(category);
        transaction.setUser(user);

        return transaction;
    }

    public void updateEntity(TransactionModel transaction, TransactionDto dto, CategoryModel category) {
        if (dto.getAmount() != null) transaction.setAmount(dto.getAmount());
        if (dto.getDescription() != null) transaction.setDescription(dto.getDescription());
        if (dto.getDate() != null) transaction.setDate(dto.getDate());
        if (dto.getType() != null) transaction.setType(dto.getType());
        if (dto.getPaymentMethod() != null) transaction.setPaymentMethod(dto.getPaymentMethod());
        if (category != null) transaction.setCategory(category);
    }

    public TransactionDto toDto(TransactionModel transaction) {
        TransactionDto dto = new TransactionDto();

        dto.setId(transaction.getId());
        dto.setAmount(transaction.getAmount());
        dto.setDescription(transaction.getDescription());
        dto.setDate(transaction.getDate());
        dto.setType(transaction.getType());
        dto.setPaymentMethod(transaction.getPaymentMethod());
        dto.setCreatedAt(transaction.getCreatedAt());

        dto.setCategoryId(transaction.getCategory().getId());
        dto.setCategoryName(transaction.getCategory().getName());

        return dto;
    }
}

