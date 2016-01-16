package com.rizki.mufrizal.belajar.springDataRest.hateos.repository.eventHandler;

import com.rizki.mufrizal.belajar.springDataRest.hateos.domain.User;
import com.rizki.mufrizal.belajar.springDataRest.hateos.domain.UserRole;
import java.util.HashSet;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.HandleBeforeCreate;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

/**
 *
 * @Author Rizki Mufrizal <mufrizalrizki@gmail.com>
 * @Since Jan 16, 2016
 * @Time 6:05:52 PM
 * @Encoding UTF-8
 * @Project Belajar-SpringDataRest-Hateos
 * @Package
 * com.rizki.mufrizal.belajar.springDataRest.hateos.repository.eventHandler
 *
 */
@Component
@RepositoryEventHandler(User.class)
public class UserRepositoryEventHandler {

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @HandleBeforeCreate
    public void handleUserCreate(User user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));

        UserRole userRole = new UserRole();
        userRole.setUser(user);

        Set<UserRole> userRoles = new HashSet<>();
        userRoles.add(userRole);
        user.setUserRoles(userRoles);
    }

}
