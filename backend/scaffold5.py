import os

entities = [
    {"Name": "ContactSubmission", "Fields": ["String name", "String email", "String message", "String status"]},
    {"Name": "PageSeo", "Fields": ["String pageUrl", "String title", "String description", "String keywords", "String ogImageUrl"]}
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
