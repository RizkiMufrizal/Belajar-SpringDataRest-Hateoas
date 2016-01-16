package com.rizki.mufrizal.belajar.springDataRest.hateos;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.hateoas.config.EnableHypermediaSupport;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;

/**
 *
 * @Author Rizki Mufrizal <mufrizalrizki@gmail.com>
 * @Since Jan 16, 2016
 * @Time 9:08:59 AM
 * @Encoding UTF-8
 * @Project Belajar-SpringDataRest-Hateos
 * @Package com.rizki.mufrizal.belajar.springDataRest.hateos
 *
 */
@SpringBootApplication
@EnableAuthorizationServer
@EnableResourceServer
@EnableHypermediaSupport(type = EnableHypermediaSupport.HypermediaType.HAL)
public class BelajarSpringDataRestHateos {

    public static void main(String[] args) {
        SpringApplication.run(BelajarSpringDataRestHateos.class, args);
    }

}
