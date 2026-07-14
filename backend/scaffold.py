import os

entities = [
    {"Name": "PortfolioItem", "Fields": ["String title", "String slug", "String summary", "String description", "java.util.List<String> techStack", "String imageUrl", "String liveUrl", "String repoUrl", "Boolean featured"]},
    {"Name": "ServiceItem", "Fields": ["String name", "String description"]},
    {"Name": "Industry", "Fields": ["String title", "String description", "String iconKey", "Integer displayOrder"]},
    {"Name": "DemoRequest", "Fields": ["String fullName", "String workEmail", "String companyName", "String phone", "String companySize", "Long preferredProductId", "String message", "String status"]},
    {"Name": "NewsletterSubscriber", "Fields": ["String email", "Boolean active"]},
    {"Name": "CompanyInfo", "Fields": ["String legalName", "String tagline", "String aboutText", "Integer foundedYear", "String headquarters", "String email", "String phone", "String logoUrl"]},
    {"Name": "JobListing", "Fields": ["String title", "String slug", "String department", "String location", "String employmentType", "String description", "Boolean isOpen"]},
    {"Name": "Testimonial", "Fields": ["String authorName", "String authorRole", "String authorCompany", "String quote", "String avatarUrl", "Boolean isFeatured", "Integer displayOrder"]},
    {"Name": "Faq", "Fields": ["String question", "String answer", "String category", "Integer displayOrder"]},
    {"Name": "BlogPost", "Fields": ["String title", "String slug", "String excerpt", "String content", "String coverImageUrl", "String status", "String authorName"]}
]

for e in entities:
    name = e["Name"]
    req_file = f"src/main/java/com/bnytechnology/backend/dto/request/{name}Request.java"
    res_file = f"src/main/java/com/bnytechnology/backend/dto/response/{name}Response.java"
    map_file = f"src/main/java/com/bnytechnology/backend/mapper/{name}Mapper.java"

    # Req
    req_content = f"package com.bnytechnology.backend.dto.request;\n\npublic class {name}Request {{\n"
    for f in e["Fields"]:
        parts = f.split(" ")
        typ = parts[0]
        fld = parts[1]
        req_content += f"    private {typ} {fld};\n"
        req_content += f"    public {typ} get{fld[0].upper() + fld[1:]}() {{ return {fld}; }}\n"
        req_content += f"    public void set{fld[0].upper() + fld[1:]}({typ} {fld}) {{ this.{fld} = {fld}; }}\n"
    req_content += "}\n"
    
    with open(req_file, "w") as f:
        f.write(req_content)

    # Res
    res_content = f"package com.bnytechnology.backend.dto.response;\n\npublic class {name}Response {{\n    private Long id;\n    public Long getId() {{ return id; }}\n    public void setId(Long id) {{ this.id = id; }}\n"
    for f in e["Fields"]:
        parts = f.split(" ")
        typ = parts[0]
        fld = parts[1]
        res_content += f"    private {typ} {fld};\n"
        res_content += f"    public {typ} get{fld[0].upper() + fld[1:]}() {{ return {fld}; }}\n"
        res_content += f"    public void set{fld[0].upper() + fld[1:]}({typ} {fld}) {{ this.{fld} = {fld}; }}\n"
    res_content += "}\n"
    
    with open(res_file, "w") as f:
        f.write(res_content)

    # Map
    map_content = f"""package com.bnytechnology.backend.mapper;

import com.bnytechnology.backend.dto.request.{name}Request;
import com.bnytechnology.backend.dto.response.{name}Response;
import com.bnytechnology.backend.entity.{name};
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface {name}Mapper {{
    {name}Response toResponse({name} entity);
    {name} toEntity({name}Request request);
}}
"""
    with open(map_file, "w") as f:
        f.write(map_content)
