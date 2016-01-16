package com.rizki.mufrizal.belajar.springDataRest.hateos.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Index;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import org.hibernate.annotations.GenericGenerator;

/**
 *
 * @Author Rizki Mufrizal <mufrizalrizki@gmail.com>
 * @Since Jan 16, 2016
 * @Time 11:37:45 AM
 * @Encoding UTF-8
 * @Project Belajar-SpringDataRest-Hateos
 * @Package com.rizki.mufrizal.belajar.springDataRest.hateos.domain
 * 
 */
@Entity
@Table(name = "tb_user_role", indexes = {
    @Index(columnList = "id_user_role", name = "idUserRole"),
    @Index(columnList = "role", name = "role")
})
public class UserRole implements Serializable{

    @Id
    @Column(name = "id_user_role", length = 150)
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    private String idUserRole;

    @Column(name = "role", length = 10)
    private String role = "ROLE_USER";

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "email")
    private User user;

    /**
     * @return the idUserRole
     */
    public String getIdUserRole() {
        return idUserRole;
    }

    /**
     * @param idUserRole the idUserRole to set
     */
    public void setIdUserRole(String idUserRole) {
        this.idUserRole = idUserRole;
    }

    /**
     * @return the role
     */
    public String getRole() {
        return role;
    }

    /**
     * @param role the role to set
     */
    public void setRole(String role) {
        this.role = role;
    }

    /**
     * @return the user
     */
    public User getUser() {
        return user;
    }

    /**
     * @param user the user to set
     */
    public void setUser(User user) {
        this.user = user;
    }
}
