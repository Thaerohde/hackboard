package io.refugeescode.hackboard.security;

import io.refugeescode.hackboard.domain.Project;
import io.refugeescode.hackboard.domain.User;
import io.refugeescode.hackboard.repository.UserRepository;
import io.refugeescode.hackboard.service.dto.ProjectDto;
import org.springframework.security.access.PermissionEvaluator;
import org.springframework.security.core.Authentication;

import java.io.Serializable;
import java.util.Optional;


public class HasPermissionEvaluator implements PermissionEvaluator {


    UserRepository userRepository;

    public HasPermissionEvaluator(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public boolean hasPermission(Authentication authentication, Object o, Object o1) {


        if (o instanceof ProjectDto) {
            if (((ProjectDto) o).getId() == null) {
                return false;
            }
            if (!o1.toString().equalsIgnoreCase("projectOwner")) {

                return false;
            }
            Long ownerId = ((ProjectDto) o).getOwnerId();
            System.out.println(ownerId);
            System.out.println(SecurityUtils.getCurrentUserLogin().get());

            if (SecurityUtils.getCurrentUserLogin().isPresent()) {
                String userlogin = SecurityUtils.getCurrentUserLogin().get();
                Optional<User> oneByLogin = userRepository.findOneByLogin(userlogin);
                if (oneByLogin.isPresent() && (oneByLogin.get().getId() == ownerId)) {
                    return true;

                } else

                    return false;
            }
        }
        return true;
    }

    @Override
    public boolean hasPermission(Authentication authentication, Serializable serializable, String s, Object o) {
        return true;
    }
}
