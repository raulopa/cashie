package cashie.cashie.services;

import cashie.cashie.dtos.TransactionDto;
import cashie.cashie.exceptions.CategoryNotFoundException;
import cashie.cashie.exceptions.UserNotFoundException;
import cashie.cashie.mappers.TransactionMapper;
import cashie.cashie.models.CategoryModel;
import cashie.cashie.models.TransactionModel;
import cashie.cashie.models.UserModel;
import cashie.cashie.repositories.CategoryRepository;
import cashie.cashie.repositories.TransactionRepository;
import cashie.cashie.repositories.UserRepository;

import java.util.Optional;

public class TransactionService {
    private final TransactionRepository transactionRepository;
    private final UserRepository userRepository;
    private final CategoryRepository categoryRepository;
    private final TransactionMapper transactionMapper;

    public TransactionService(TransactionRepository transactionRepository, UserRepository userRepository, CategoryRepository categoryRepository, TransactionMapper transactionMapper) {
        this.transactionRepository = transactionRepository;
        this.userRepository = userRepository;
        this.categoryRepository = categoryRepository;
        this.transactionMapper = transactionMapper;
    }

    public TransactionDto saveTransaction(TransactionDto transactionDto){
        Optional<UserModel> user = userRepository.findById(transactionDto.getUserId());
        Optional<CategoryModel> categoryModel = categoryRepository.findById(transactionDto.getCategoryId());

        if(!user.isPresent())
            throw new UserNotFoundException();

        if(!categoryModel.isPresent()){
            throw new CategoryNotFoundException();
        }

        TransactionModel transactionModel = transactionMapper.toEntity(transactionDto, categoryModel.get(), user.get());

        transactionRepository.save(transactionModel);

        return transactionMapper.toDto(transactionModel);
    }
}
