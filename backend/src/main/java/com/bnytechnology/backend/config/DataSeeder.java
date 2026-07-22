package com.bnytechnology.backend.config;

import com.bnytechnology.backend.entity.AppUser;
import com.bnytechnology.backend.repository.AppUserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Configuration
@Profile("dev")
public class DataSeeder {

    private static final Logger log = LoggerFactory.getLogger(DataSeeder.class);

    @Bean
    public CommandLineRunner seedDatabase(AppUserRepository userRepository, PasswordEncoder passwordEncoder) {
        return args -> {
            if (userRepository.findByEmail("admin@bnytechnologies.com").isEmpty()) {
                AppUser admin = new AppUser();
                admin.setEmail("admin@bnytechnologies.com");
                admin.setPasswordHash(passwordEncoder.encode("admin"));
                admin.setFullName("System Admin");
                admin.setRole(com.bnytechnology.backend.entity.Role.ADMIN);
                admin.setEnabled(true);
                userRepository.save(admin);
                log.warn("WARNING: DataSeeder is running and creating a default admin account! Do NOT use this profile in production.");
                System.out.println("Admin user seeded.");
            }
        };
    }
}
