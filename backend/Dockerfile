# Build stage
FROM maven:3.9.6-eclipse-temurin-17 AS build
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src ./src
RUN mvn package -DskipTests

# Run stage
FROM eclipse-temurin:17-jre-jammy
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar

# Expose port
EXPOSE 8080

# Environment variables that should be overridden at runtime
ENV SPRING_PROFILES_ACTIVE=prod
ENV DB_HOST=localhost
ENV DB_PORT=5432
ENV DB_NAME=bny_tech
ENV DB_USER=postgres
ENV DB_PASS=postgres
ENV JWT_SECRET=your_super_secret_jwt_key_that_is_long_enough

# Run the jar
ENTRYPOINT ["java", "-jar", "app.jar"]
