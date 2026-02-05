package cashie.cashie.mappers;

import cashie.cashie.dtos.UserDto;
import cashie.cashie.models.UserModel;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {

    public UserModel toEntity(UserDto dto) {
        UserModel user = new UserModel();
        user.setName(dto.getName());
        user.setEmail(dto.getEmail());
        user.setPassword(dto.getPassword());
        return user;
    }

    public void updateEntity(UserModel user, UserDto dto) {
        if (dto.getName() != null) {
            user.setName(dto.getName());
        }
        if (dto.getEmail() != null) {
            user.setEmail(dto.getEmail());
        }
        if (dto.getPassword() != null) {
            user.setPassword(dto.getPassword());
        }
    }

    public UserDto toDto(UserModel user) {
        UserDto dto = new UserDto();
        dto.setId(user.getId());
        dto.setName(user.getName());
        dto.setEmail(user.getEmail());
        return dto;
    }
}
