package com.marketplace.tours.repository;

import com.marketplace.tours.domain.Tour;
import io.micronaut.data.jdbc.annotation.JdbcRepository;
import io.micronaut.data.model.query.builder.sql.Dialect;
import io.micronaut.data.repository.CrudRepository;

import java.util.List;

/**
 * Repository layer for Tour persistence.
 * Uses Micronaut Data JDBC with H2 in-memory database.
 * This service owns its own database — no cross-service DB access.
 */
@JdbcRepository(dialect = Dialect.H2)
public interface TourRepository extends CrudRepository<Tour, Long> {

    @Override
    List<Tour> findAll();
}
