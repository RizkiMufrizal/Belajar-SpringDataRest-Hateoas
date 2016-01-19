package com.rizki.mufrizal.belajar.springDataRest.hateos.repository;

import com.rizki.mufrizal.belajar.springDataRest.hateos.domain.Barang;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.Description;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.security.access.prepost.PreAuthorize;

/**
 *
 * @Author Rizki Mufrizal <mufrizalrizki@gmail.com>
 * @Since Jan 16, 2016
 * @Time 9:28:24 AM
 * @Encoding UTF-8
 * @Project Belajar-SpringDataRest-Hateos
 * @Package com.rizki.mufrizal.belajar.springDataRest.hateos.repository
 *
 */
@PreAuthorize("hasRole('ROLE_USER')")
@RepositoryRestResource(collectionResourceRel = "barang", path = "barang", collectionResourceDescription = @Description("API untuk crud data barang"))
public interface BarangRepositoryRest extends PagingAndSortingRepository<Barang, String> {

}
