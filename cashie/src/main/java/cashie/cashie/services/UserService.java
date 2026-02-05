package cashie.cashie.services;

import cashie.cashie.dtos.UserDto;
import cashie.cashie.mappers.UserMapper;
import cashie.cashie.models.UserModel;
import cashie.cashie.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository,
                       UserMapper userMapper,
                       PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
        this.passwordEncoder = passwordEncoder;
    }

    public ArrayList<UserModel> gerUsers(){
        return (ArrayList<UserModel>)userRepository.findAll();
    }

    public UserModel saveUser(UserModel userModel){
        return userRepository.save(userModel);
    }

    public UserDto register(UserDto userDto){
        if (userRepository.findByEmail(userDto.getEmail()).isPresent()) {
            throw new RuntimeException("Email already registered");
        }

        UserModel user = userMapper.toEntity(userDto);
        user.setPassword(passwordEncoder.encode(userDto.getPassword()));
        UserModel savedUser = userRepository.save(user);

        return userMapper.toDto(savedUser);
    }

}

