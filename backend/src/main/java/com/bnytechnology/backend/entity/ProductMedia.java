package com.bnytechnology.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "product_media")
public class ProductMedia extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @Enumerated(EnumType.STRING)
    @Column(name = "media_type", nullable = false)
    private MediaType mediaType;

    @Column(nullable = false)
    private String url;

    @Column(name = "alt_text")
    private String altText;

    @Column(name = "display_order")
    private Integer displayOrder;

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Product getProduct() { return product; }
    public void setProduct(Product product) { this.product = product; }

    public MediaType getMediaType() { return mediaType; }
    public void setMediaType(MediaType mediaType) { this.mediaType = mediaType; }

    public String getUrl() { return url; }
    public void setUrl(String url) { this.url = url; }

    public String getAltText() { return altText; }
    public void setAltText(String altText) { this.altText = altText; }

    public Integer getDisplayOrder() { return displayOrder; }
    public void setDisplayOrder(Integer displayOrder) { this.displayOrder = displayOrder; }
}
