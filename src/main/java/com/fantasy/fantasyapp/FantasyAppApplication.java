package com.fantasy.fantasyapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories
public class FantasyAppApplication {

    public static void main(String[] args) {
        SpringApplication.run(FantasyAppApplication.class, args);
    }

}
