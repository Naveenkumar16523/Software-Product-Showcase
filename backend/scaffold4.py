import os

entities = [
    "ProductCategory", "Product", "ProductFeature", "ProductMedia", 
    "PricingPlan", "PricingPlanFeature", "Testimonial", "Faq", "BlogPost", 
    "ContactSubmission", "DemoRequest", "NewsletterSubscriber", "CompanyInfo", 
    "JobListing", "PageSeo", "PortfolioItem", "ServiceItem", "Industry"
]

public_write = ["ContactSubmission", "DemoRequest", "NewsletterSubscriber"]
public_read = ["ProductCategory", "Product", "PricingPlan", "Testimonial", "Faq", "BlogPost", "CompanyInfo", "JobListing", "Industry", "PortfolioItem", "ServiceItem"]
root_crud = ["ContactSubmission", "PortfolioItem", "ServiceItem"] # The frontend expects leads, portfolio, services at /api/v1/leads, /api/v1/portfolio, /api/v1/services

def get_path(name):
    if name == "ContactSubmission": return "leads"
    if name == "PortfolioItem": return "portfolio"
    if name == "ServiceItem": return "services"
    
    # Simple camelCase to kebab-case
    import re
    s1 = re.sub('(.)([A-Z][a-z]+)', r'\1-\2', name)
    return re.sub('([a-z0-9])([A-Z])', r'\1-\2', s1).lower() + "s"

# Generate Controllers
for name in entities:
    path = get_path(name)
    var_name = name[0].lower() + name[1:]
    
    # Determine base mapping
    base_mapping = f"/api/v1/{path}" if name in root_crud else f"/api/v1/admin/{path}"
    
    ctrl_file = f"src/main/java/com/bnytechnology/backend/controller/{name}Controller.java"
    
    ctrl_content = f"""package com.bnytechnology.backend.controller;

import com.bnytechnology.backend.dto.request.{name}Request;
import com.bnytechnology.backend.dto.response.{name}Response;
import com.bnytechnology.backend.service.{name}Service;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("{base_mapping}")
public class {name}Controller {{

    private final {name}Service service;

    public {name}Controller({name}Service service) {{
        this.service = service;
    }}

    @GetMapping
    public ResponseEntity<List<{name}Response>> getAll() {{
        return ResponseEntity.ok(service.findAll());
    }}

    @GetMapping("/{{id}}")
    public ResponseEntity<{name}Response> getById(@PathVariable Long id) {{
        return ResponseEntity.ok(service.findById(id));
    }}

    @PostMapping
    public ResponseEntity<{name}Response> create(@Valid @RequestBody {name}Request request) {{
        return new ResponseEntity<>(service.create(request), HttpStatus.CREATED);
    }}

    @PutMapping("/{{id}}")
    public ResponseEntity<{name}Response> update(@PathVariable Long id, @Valid @RequestBody {name}Request request) {{
        return ResponseEntity.ok(service.update(id, request));
    }}

    @DeleteMapping("/{{id}}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {{
        service.delete(id);
        return ResponseEntity.noContent().build();
    }}
}}
"""
    if name == "CompanyInfo":
        ctrl_content = f"""package com.bnytechnology.backend.controller;
import com.bnytechnology.backend.dto.request.CompanyInfoRequest;
import com.bnytechnology.backend.dto.response.CompanyInfoResponse;
import com.bnytechnology.backend.service.CompanyInfoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/admin/company-info")
public class CompanyInfoController {{
    private final CompanyInfoService service;
    public CompanyInfoController(CompanyInfoService service) {{
        this.service = service;
    }}
    @GetMapping
    public ResponseEntity<CompanyInfoResponse> get() {{
        return ResponseEntity.ok(service.get());
    }}
    @PutMapping
    public ResponseEntity<CompanyInfoResponse> update(@Valid @RequestBody CompanyInfoRequest request) {{
        return ResponseEntity.ok(service.update(request));
    }}
}}
"""
    with open(ctrl_file, "w") as f:
        f.write(ctrl_content)

    # Public Read Controllers
    if name in public_read and name not in root_crud:
        pub_ctrl_file = f"src/main/java/com/bnytechnology/backend/controller/Public{name}Controller.java"
        pub_ctrl_content = f"""package com.bnytechnology.backend.controller;

import com.bnytechnology.backend.dto.response.{name}Response;
import com.bnytechnology.backend.service.{name}Service;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/v1/{path}")
public class Public{name}Controller {{

    private final {name}Service service;

    public Public{name}Controller({name}Service service) {{
        this.service = service;
    }}

    @GetMapping
    public ResponseEntity<List<{name}Response>> getAll() {{
        return ResponseEntity.ok(service.findAll());
    }}

    @GetMapping("/{{id}}")
    public ResponseEntity<{name}Response> getById(@PathVariable Long id) {{
        return ResponseEntity.ok(service.findById(id));
    }}
}}
"""
        if name == "CompanyInfo":
            pub_ctrl_content = f"""package com.bnytechnology.backend.controller;
import com.bnytechnology.backend.dto.response.CompanyInfoResponse;
import com.bnytechnology.backend.service.CompanyInfoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/company-info")
public class PublicCompanyInfoController {{
    private final CompanyInfoService service;
    public PublicCompanyInfoController(CompanyInfoService service) {{
        this.service = service;
    }}
    @GetMapping
    public ResponseEntity<CompanyInfoResponse> get() {{
        return ResponseEntity.ok(service.get());
    }}
}}
"""
        with open(pub_ctrl_file, "w") as f:
            f.write(pub_ctrl_content)

    # Public Write Controllers
    if name in public_write and name not in root_crud:
        pub_write_file = f"src/main/java/com/bnytechnology/backend/controller/Public{name}Controller.java"
        pub_write_content = f"""package com.bnytechnology.backend.controller;

import com.bnytechnology.backend.dto.request.{name}Request;
import com.bnytechnology.backend.dto.response.{name}Response;
import com.bnytechnology.backend.service.{name}Service;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/{path}")
public class Public{name}Controller {{

    private final {name}Service service;

    public Public{name}Controller({name}Service service) {{
        this.service = service;
    }}

    @PostMapping
    public ResponseEntity<{name}Response> create(@Valid @RequestBody {name}Request request) {{
        return new ResponseEntity<>(service.create(request), HttpStatus.CREATED);
    }}
}}
"""
        with open(pub_write_file, "w") as f:
            f.write(pub_write_content)

# Global Exception Handler
err_file = "src/main/java/com/bnytechnology/backend/exception/GlobalExceptionHandler.java"
err_content = """package com.bnytechnology.backend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, Object>> handleValidationExceptions(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });

        Map<String, Object> response = new HashMap<>();
        response.put("status", HttpStatus.BAD_REQUEST.value());
        response.put("error", "Bad Request");
        response.put("details", errors);

        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<Map<String, Object>> handleRuntimeException(RuntimeException ex) {
        Map<String, Object> response = new HashMap<>();
        response.put("status", HttpStatus.INTERNAL_SERVER_ERROR.value());
        response.put("error", "Internal Server Error");
        response.put("message", ex.getMessage());
        
        if (ex.getMessage().contains("not found")) {
            response.put("status", HttpStatus.NOT_FOUND.value());
            response.put("error", "Not Found");
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
"""
with open(err_file, "w") as f:
    f.write(err_content)
