import os

entities = [
    {"Name": "ProductCategory", "Fields": ["String name", "String slug", "String description"]},
    {"Name": "PricingPlan", "Fields": ["String name", "String slug", "java.math.BigDecimal priceMonthly", "java.math.BigDecimal priceYearly", "String currency", "Boolean isFeatured", "Integer displayOrder"]},
    {"Name": "PricingPlanFeature", "Fields": ["Long pricingPlanId", "String featureText", "Boolean included", "Integer displayOrder"]},
    {"Name": "ProductMedia", "Fields": ["Long productId", "String mediaType", "String url", "String altText", "Integer displayOrder"]},
    {"Name": "ProductFeature", "Fields": ["Long productId", "String title", "String description", "Integer displayOrder"]}
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
    # Special logic for Mappers with nested IDs
    if "Feature" in name or "Media" in name:
        parent_id_field = name.replace("Feature", "").replace("Media", "")
        parent_id_field_lower = parent_id_field[0].lower() + parent_id_field[1:] + "Id"
        parent_field = parent_id_field[0].lower() + parent_id_field[1:]
        
        map_content = f"""package com.bnytechnology.backend.mapper;

import com.bnytechnology.backend.dto.request.{name}Request;
import com.bnytechnology.backend.dto.response.{name}Response;
import com.bnytechnology.backend.entity.{name};
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface {name}Mapper {{
    @Mapping(source = "{parent_field}.id", target = "{parent_id_field_lower}")
    {name}Response toResponse({name} entity);
    
    @Mapping(target = "{parent_field}", ignore = true)
    {name} toEntity({name}Request request);
}}
"""
    else:
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
