package com.travelorg.travel;

import org.springframework.boot.SpringApplication;

public class TestTravelbackendApplication {

    public static void main(String[] args) {
        SpringApplication.from(TravelbackendApplication::main).with(TestcontainersConfiguration.class).run(args);
    }

}
