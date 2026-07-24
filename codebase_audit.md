# Codebase Audit Report: B&Y Technology Showcase

## 1. Executive Summary

This audit assesses the current state of the B&Y Technology backend (Spring Boot) and frontend (Next.js) repositories. The application serves as a lead-generation marketing site with an internal CMS, and does not require multi-tenant SaaS complexities.

### Readiness Scores (Out of 100)
- **Security:** 30/100 (Critical risks found: Arbitrary file upload, global CORS looseness, missing backend validation, exposed actuator endpoints)
- **Performance:** 70/100 (Overlap in animation libraries, but static generation potential is good)
- **Code Quality:** 50/100 (Inconsistent API error mapping, missing entity relationships, lack of testing)
- **Accessibility:** 70/100 (Basic structure is okay, but custom components need ARIA checks)
- **SEO:** 40/100 (Critical gap: Dynamic routes are omitted from the sitemap, and dynamic metadata is missing)
- **Production Readiness:** 40/100 (Requires significant security hardening and data integrity fixes prior to launch)

---

## 2. Findings Table

| Area | File | Issue | Severity | Evidence | Fix |
|---|---|---|---|---|---|
| **Security** | `MediaController.java` & `FileSystemStorageService.java` | Arbitrary File Upload Vulnerability | Critical | `FileSystemStorageService.store()` trusts the file extension and content entirely without validation. Since `SecurityConfig.java` permits `/uploads/**`, an attacker could upload and serve malicious executables or XSS payloads (e.g. `.svg`, `.html`). | Restrict allowed content types (e.g. image/jpeg, image/png, application/pdf). Verify magic bytes. Serve uploads via a CDN or with `Content-Disposition: attachment` and a restrictive CSP. |
| **Security** | `SecurityConfig.java` | Global Actuator Exposure & Missing Clickjacking Protection | High | `permitAll()` applied to `/actuator/**`. Frame options are globally disabled via `frameOptions(frame -> frame.disable())`. | Restrict `/actuator/**` to `hasRole('ADMIN')` and only disable frameOptions specifically for the H2 console path, keeping `SAMEORIGIN` for the rest of the app. |
| **Security** | `CorsConfig.java` | Overly Permissive CORS in Production | High | `application.yml` `prod` profile does not define `CORS_ALLOWED_ORIGINS`, falling back to `http://localhost:3000`. | Define strict `CORS_ALLOWED_ORIGINS` in the production environment variables (e.g., `https://bnytechnologies.com`). |
| **Database** | `Product.java`, `PricingPlan.java` | Missing Cascade and `@OneToMany` definitions | High | Child entities map parents, but parent entities (like `Product`, `PricingPlan`) lack `@OneToMany(mappedBy = "...", cascade = CascadeType.ALL, orphanRemoval = true)`. Deleting a parent via `ProductServiceImpl` throws a constraint violation if children exist. | Add the `@OneToMany` mapping with `CascadeType.ALL` and `orphanRemoval = true` to parents to safely delete associated features/media. |
| **Backend** | `*Request.java` DTOs | Complete Lack of Backend Validation | High | `PricingPlanRequest.java` and others only declare fields without standard Jakarta Validation annotations (e.g., `@NotBlank`, `@NotNull`, `@Size`). | Add appropriate `jakarta.validation.constraints.*` annotations to all DTO properties and ensure controllers use `@Valid`. |
| **Backend** | `GlobalExceptionHandler.java` & Services | Inconsistent HTTP Status Codes | Medium | `ProductServiceImpl.findById` throws `new RuntimeException("...")` on not found, which `GlobalExceptionHandler` catches and returns as a 500 Internal Server Error instead of 404. | Services must throw a dedicated `ResourceNotFoundException` so the exception handler can correctly return a 404 Not Found. |
| **SEO** | `sitemap.ts` | Missing Dynamic Routes | High | `sitemap.ts` only fetches from `/api/v1/portfolio`. It completely omits dynamic routes for Blog Posts and Products. | Update `sitemap.ts` to fetch and include `/api/v1/blog-posts` and `/api/v1/products` slugs. |
| **SEO** | `f/src/app` | Unused PageSeo Entity Data | Medium | A `PageSeo` entity exists, but there is no `generateMetadata` function utilizing it anywhere in the Next.js `app` directory. | Implement `generateMetadata` in `layout.tsx` or `page.tsx` for dynamic routes to fetch and apply SEO metadata from the backend. |
| **Performance**| `Hero.tsx` | Animation Library Overlap | Low | Imports and utilizes both `framer-motion` (`useScroll`, `useTransform`) and `gsap` (`useGSAP`, `gsap.timeline`) on the same view. | Standardize on one animation library (either GSAP or Framer Motion) per complex component to reduce bundle size and JS execution overhead. |
| **Code Quality**| `frontend/src` | Missing Frontend Validation | Medium | Forms like `AdminBlog` use uncontrolled string state without `zod` schemas or `react-hook-form`, whereas others (like `AdminProducts`) do. | Standardize all forms using `react-hook-form` and `zod` for consistent client-side validation logic. |
| **Testing** | `frontend/src` | Lack of Frontend Testing | High | No `.test.tsx` or `.spec.tsx` files exist in the frontend repository. | Setup Jest/Vitest + React Testing Library and add basic unit and integration tests for critical flows. |

---

## 3. Phased Roadmap

### Phase 1: Critical Security & Stability (Immediate)
1. **Fix Arbitrary File Upload**: Validate file extensions and MIME types in `FileSystemStorageService`. Set strict `Content-Disposition` / CSP for the `/uploads` route.
2. **Secure Endpoints & Headers**: Restrict `/actuator/**` in `SecurityConfig.java`. Re-enable `frameOptions(SAMEORIGIN)` globally, disabling only for `/h2-console`.
3. **Database Cascades**: Add `@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)` to `Product`, `PricingPlan`, and other parent entities to fix `DELETE` operations causing constraint violations.
4. **Backend DTO Validation**: Add `@NotBlank`, `@NotNull`, etc. to all incoming DTO requests.

### Phase 2: SEO & UX Correctness (Next 1-2 Weeks)
1. **Fix Sitemap Generation**: Update `sitemap.ts` to correctly map blog posts and products alongside the portfolio.
2. **Dynamic SEO Metadata**: Connect `PageSeo` data to Next.js `generateMetadata` for dynamic pages.
3. **API Error Mapping**: Update services to throw `ResourceNotFoundException` instead of `RuntimeException` to return correct 404 status codes.

### Phase 3: Technical Debt & Performance (Long Term)
1. **Unify Form State**: Refactor remaining pure-state forms (like Blog Admin) to use `react-hook-form` and `zod`.
2. **Animation Clean-up**: Refactor `Hero.tsx` and similar components to use only one animation library (prefer GSAP since `SmoothScrollProvider.tsx` is heavily tied to it).
3. **Frontend Testing Suite**: Introduce Vitest + React Testing Library, starting with core utility functions and crucial form submissions.

---

*Note: Multi-tenant SaaS concerns such as billing, organization switching, and role-based complex permissions are out of scope unless explicitly requested for future product phases.*
