package com.bnytechnology.backend.repository;

import com.bnytechnology.backend.entity.AppUser;
import com.bnytechnology.backend.entity.Role;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ActiveProfiles;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@ActiveProfiles("dev")
class AppUserRepositoryTest {

    @Autowired
    private AppUserRepository userRepository;

    @Test
    void shouldSaveAndFindUserByEmail() {
        AppUser user = new AppUser();
        user.setEmail("testadmin@example.com");
        user.setPasswordHash("hashed_pw");
        user.setRole(Role.ADMIN);
        user.setEnabled(true);

        userRepository.save(user);

        Optional<AppUser> found = userRepository.findByEmail("testadmin@example.com");
        assertTrue(found.isPresent());
        assertEquals(Role.ADMIN, found.get().getRole());
    }
}
