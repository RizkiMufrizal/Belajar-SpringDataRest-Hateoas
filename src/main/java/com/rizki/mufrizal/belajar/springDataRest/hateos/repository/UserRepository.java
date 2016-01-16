package com.rizki.mufrizal.belajar.springDataRest.hateos.repository;

import com.rizki.mufrizal.belajar.springDataRest.hateos.domain.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.Description;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.security.access.prepost.PreAuthorize;

/**
 *
 * @Author Rizki Mufrizal <mufrizalrizki@gmail.com>
 * @Since Jan 16, 2016
 * @Time 11:53:55 AM
 * @Encoding UTF-8
 * @Project Belajar-SpringDataRest-Hateos
 * @Package com.rizki.mufrizal.belajar.springDataRest.hateos.repository
 *
 */
@PreAuthorize("hasRole('ROLE_ADMIN')")
@RepositoryRestResource(collectionResourceRel = "user", path = "user", collectionResourceDescription = @Description("API untuk crud data user"))
public interface UserRepository extends PagingAndSortingRepository<User, String> {

    @PreAuthorize("permitAll")
    @Query("select u from User u left join fetch u.userRoles pd where u.email = :email")
    User LoginUser(@Param("email") String email);

    @Override
    @PreAuthorize("permitAll")
    public <S extends User> S save(S s);
}
