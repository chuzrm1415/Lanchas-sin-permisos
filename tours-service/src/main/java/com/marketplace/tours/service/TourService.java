package com.marketplace.tours.service;

import com.marketplace.tours.domain.CreateTourRequest;
import com.marketplace.tours.domain.Tour;
import com.marketplace.tours.repository.TourRepository;
import jakarta.inject.Singleton;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

/**
 * Service layer encapsulating business logic for tour management.
 * Coordinates between the controller and repository layers.
 */
@Singleton
public class TourService {

    private static final Logger LOG = LoggerFactory.getLogger(TourService.class);

    private final TourRepository tourRepository;

    public TourService(TourRepository tourRepository) {
        this.tourRepository = tourRepository;
    }

    /**
     * Creates a new tour from the given request and persists it.
     *
     * @param request the tour creation request with name, location, and price
     * @return the persisted Tour with its generated ID
     */
    public Tour createTour(CreateTourRequest request) {
        LOG.debug("Creating tour: name={}, location={}, price={}",
                request.getName(), request.getLocation(), request.getPrice());

        Tour tour = new Tour(
                request.getName(),
                request.getLocation(),
                request.getPrice()
        );

        Tour saved = tourRepository.save(tour);
        LOG.info("Tour created with id={}", saved.getId());
        return saved;
    }

    /**
     * Retrieves all tours currently stored.
     *
     * @return list of all tours, potentially empty
     */
    public List<Tour> getAllTours() {
        List<Tour> tours = tourRepository.findAll();
        LOG.debug("Retrieved {} tours", tours.size());
        return tours;
    }
}
