 = @(
    @{Name="PortfolioItem"; Fields=@("String title", "String slug", "String summary", "String description", "java.util.List<String> techStack", "String imageUrl", "String liveUrl", "String repoUrl", "Boolean featured")},
    @{Name="ServiceItem"; Fields=@("String name", "String description")},
    @{Name="Industry"; Fields=@("String title", "String description", "String iconKey", "Integer displayOrder")},
    @{Name="DemoRequest"; Fields=@("String fullName", "String workEmail", "String companyName", "String phone", "String companySize", "Long preferredProductId", "String message", "String status")},
    @{Name="NewsletterSubscriber"; Fields=@("String email", "Boolean active")},
    @{Name="CompanyInfo"; Fields=@("String legalName", "String tagline", "String aboutText", "Integer foundedYear", "String headquarters", "String email", "String phone", "String logoUrl")},
    @{Name="JobListing"; Fields=@("String title", "String slug", "String department", "String location", "String employmentType", "String description", "Boolean isOpen")},
    @{Name="Testimonial"; Fields=@("String authorName", "String authorRole", "String authorCompany", "String quote", "String avatarUrl", "Boolean isFeatured", "Integer displayOrder")},
    @{Name="Faq"; Fields=@("String question", "String answer", "String category", "Integer displayOrder")},
    @{Name="BlogPost"; Fields=@("String title", "String slug", "String excerpt", "String content", "String coverImageUrl", "String status", "String authorName")}
)

foreach ($e in $entities) {
    $name = $e.Name
    $reqClass = "src\main\java\com\bnytechnology\backend\dto\request\$name" + "Request.java"
    $resClass = "src\main\java\com\bnytechnology\backend\dto\response\$name" + "Response.java"
    $mapperClass = "src\main\java\com\bnytechnology\backend\mapper\$name" + "Mapper.java"

    # Request DTO
    $reqContent = "package com.bnytechnology.backend.dto.request;

public class $name" + "Request {
"
    foreach ($f in $e.Fields) {
        $parts = $f.Split(' ')
        $type = $parts[0]
        $field = $parts[1]
        $reqContent += "    private $type $field;
"
        $reqContent += "    public $type get" + $field.Substring(0,1).ToUpper() + $field.Substring(1) + "() { return $field; }
"
        $reqContent += "    public void set" + $field.Substring(0,1).ToUpper() + $field.Substring(1) + "($type $field) { this.$field = $field; }
"
    }
    $reqContent += "}
"
    Set-Content -Path $reqClass -Value $reqContent

    # Response DTO
    $resContent = "package com.bnytechnology.backend.dto.response;

public class $name" + "Response {
    private Long id;
"
    $resContent += "    public Long getId() { return id; }
"
    $resContent += "    public void setId(Long id) { this.id = id; }
"
    foreach ($f in $e.Fields) {
        $parts = $f.Split(' ')
        $type = $parts[0]
        $field = $parts[1]
        $resContent += "    private $type $field;
"
        $resContent += "    public $type get" + $field.Substring(0,1).ToUpper() + $field.Substring(1) + "() { return $field; }
"
        $resContent += "    public void set" + $field.Substring(0,1).ToUpper() + $field.Substring(1) + "($type $field) { this.$field = $field; }
"
    }
    $resContent += "}
"
    Set-Content -Path $resClass -Value $resContent

    # Mapper
    $mapContent = "package com.bnytechnology.backend.mapper;

import com.bnytechnology.backend.dto.request.$name" + "Request;
import com.bnytechnology.backend.dto.response.$name" + "Response;
import com.bnytechnology.backend.entity.$name;
import org.mapstruct.Mapper;

@Mapper(componentModel = ""spring"")
public interface $name" + "Mapper {
    $name" + "Response toResponse($name entity);
    $name toEntity($name" + "Request request);
}
"
    Set-Content -Path $mapperClass -Value $mapContent
}
