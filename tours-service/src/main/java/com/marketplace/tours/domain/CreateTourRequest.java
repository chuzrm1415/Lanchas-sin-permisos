package com.marketplace.tours.domain;

import io.micronaut.serde.annotation.Serdeable;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.math.BigDecimal;

@Serdeable
public class CreateTourRequest {

    @NotBlank(message = "Tour name must not be blank")
    private String name;

    @NotBlank(message = "Location must not be blank")
    private String location;

    @NotNull(message = "Price must not be null")
    @DecimalMin(value = "0.0", message = "Price must be non-negative")
    private BigDecimal price;

    public CreateTourRequest() {}

    public CreateTourRequest(String name, String location, BigDecimal price) {
        this.name = name;
        this.location = location;
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }
}
