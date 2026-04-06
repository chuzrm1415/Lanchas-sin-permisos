package com.marketplace.tours.domain;

import io.micronaut.data.annotation.GeneratedValue;
import io.micronaut.data.annotation.Id;
import io.micronaut.data.annotation.MappedEntity;
import io.micronaut.serde.annotation.Serdeable;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.math.BigDecimal;

@Serdeable
@MappedEntity("tours")
public class Tour {

    @Id
    @GeneratedValue(GeneratedValue.Type.AUTO)
    private Long id;

    @NotBlank
    private String name;

    @NotBlank
    private String location;

    @NotNull
    @DecimalMin("0.0")
    private BigDecimal price;

    // Default constructor required by Micronaut Data
    public Tour() {}

    public Tour(String name, String location, BigDecimal price) {
        this.name = name;
        this.location = location;
        this.price = price;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    @Override
    public String toString() {
        return "Tour{id=" + id + ", name='" + name + "', location='" + location + "', price=" + price + "}";
    }
}
