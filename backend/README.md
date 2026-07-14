# B&Y Technology Backend

This is the fully layered Spring Boot 3 + Java 21 backend for the B&Y Technology showcase site.

## Architecture
- **Controllers** map to `/api/v1/*` (public read/write) and `/api/v1/admin/*` (protected CRUD operations).
- **Services** enforce business logic.
- **Repositories** interface with PostgreSQL using Spring Data JPA.
- **Mappers** (MapStruct) automatically translate between JPA Entities and DTOs.
- **Security** is implemented using short-lived HttpOnly JWT cookies.

## Prerequisites
You must have either:
1. **Docker & Docker Compose** installed (recommended).
2. OR **Java 21** and **Maven** installed locally, along with a PostgreSQL instance.

## Running via Docker Compose (Recommended)
This will spin up both the PostgreSQL database and the Spring Boot API.
```bash
docker-compose up -d --build
```
The API will be available at `http://localhost:8080`.

## Running Locally (Without Docker)
1. Ensure Java 21 is installed and `JAVA_HOME` is set.
2. Start a local PostgreSQL server and create a database named `bnytech`.
3. Update `.env` with your DB credentials.
4. Run:
```bash
mvn clean install
mvn spring-boot:run -Dspring-boot.run.profiles=dev
```
*(The `dev` profile uses an in-memory H2 database. To use Postgres, omit the profile argument).*

## API Documentation
Once the server is running, navigate to:
`http://localhost:8080/swagger-ui.html`

## Default Admin Credentials
The database seeds itself using Flyway migrations on startup (`V1`, `V2`, `V3`).
- **Email:** `admin@bnytechnologies.com`
- **Password:** `admin`

## Frontend Follow-up
Now that the backend is complete and enforces strict DTO shapes, you must update the frontend's API models (`frontend/src/lib/api.ts` or component fetch calls) to match the new endpoints:
- Admin routes are prefixed with `/api/v1/admin/` (except leads, portfolio, and services, which are standard `/api/v1/*`).
- Pagination/sorting query params may need adjustment.
