package com.rizki.mufrizal.belajar.springDataRest.hateos.configuration;

import com.rizki.mufrizal.belajar.springDataRest.hateos.BelajarSpringDataRestHateos;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.web.SpringBootServletInitializer;

/**
 *
 * @Author Rizki Mufrizal <mufrizalrizki@gmail.com>
 * @Since Jan 24, 2016
 * @Time 9:40:00 AM
 * @Encoding UTF-8
 * @Project Belajar-SpringDataRest-Hateos
 * @Package com.rizki.mufrizal.belajar.springDataRest.hateos.configuration
 *
 */
public class ServletInitializerConfiguration extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(BelajarSpringDataRestHateos.class);
    }

}
