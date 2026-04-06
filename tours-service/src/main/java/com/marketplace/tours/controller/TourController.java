package com.marketplace.tours.controller;

import com.marketplace.tours.domain.CreateTourRequest;
import com.marketplace.tours.domain.Tour;
import com.marketplace.tours.service.TourService;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.MediaType;
import io.micronaut.http.annotation.*;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

/**
 * REST controller for the Tours Service.
 * Exposes endpoints for tour creation and retrieval.
 *
 * Base URL: http://localhost:8081
 */
@Controller("/tours")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class TourController {

    private static final Logger LOG = LoggerFactory.getLogger(TourController.class);

    private final TourService tourService;

    public TourController(TourService tourService) {
        this.tourService = tourService;
    }

    /**
     * POST /tours
     * Creates a new boat tour listing.
     *
     * @param request the tour data (name, location, price)
     * @return HTTP 201 Created with the persisted tour object
     */
    @Post
    public HttpResponse<Tour> createTour(@Body @Valid CreateTourRequest request) {
        LOG.info("POST /tours — creating tour: {}", request.getName());
        Tour created = tourService.createTour(request);
        return HttpResponse.created(created);
    }

    /**
     * GET /tours
     * Returns all available boat tours.
     *
     * @return HTTP 200 OK with list of tours (may be empty)
     */
    @Get
    public HttpResponse<List<Tour>> getAllTours() {
        LOG.info("GET /tours — fetching all tours");
        List<Tour> tours = tourService.getAllTours();
        return HttpResponse.ok(tours);
    }
}
