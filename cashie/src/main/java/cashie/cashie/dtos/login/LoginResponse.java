package cashie.cashie.dtos.login;

import cashie.cashie.dtos.UserDto;

public class LoginResponse {
    private String token;
    private String message;
    private UserDto userDto;


    public LoginResponse(String token, String message) {
        this.token = token;
        this.message = message;
        this.userDto = null;
    }

    public LoginResponse(String token, String message, UserDto userDto) {
        this.token = token;
        this.message = message;
        this.userDto = userDto;
    }

    public UserDto getUserDto() {
        return userDto;
    }

    public void setUserDto(UserDto userDto) {
        this.userDto = userDto;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
