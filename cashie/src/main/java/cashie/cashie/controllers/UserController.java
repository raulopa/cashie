package cashie.cashie.controllers;

import cashie.cashie.dtos.UserDto;
import cashie.cashie.models.UserModel;
import cashie.cashie.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    UserService userService;

    @GetMapping()
    public ArrayList<UserModel> getUsers(){
        return userService.gerUsers();
    }

    @PostMapping()
    public UserModel saveUser(@RequestBody UserModel userModel){
        return this.userService.saveUser(userModel);
    }

    @PostMapping("/register")
    public UserDto register(@RequestBody UserDto userDto){
        return this.userService.register(userDto);
    }
}
