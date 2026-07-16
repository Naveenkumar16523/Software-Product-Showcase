package com.bnytechnology.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "page_seo")
public class PageSeo extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "page_path", unique = true, nullable = false)
    private String pagePath;

    @Column(name = "meta_title")
    private String metaTitle;

    @Column(name = "meta_description", columnDefinition = "TEXT")
    private String metaDescription;

    @Column(name = "og_image_url")
    private String ogImageUrl;

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getPagePath() { return pagePath; }
    public void setPagePath(String pagePath) { this.pagePath = pagePath; }

    public String getMetaTitle() { return metaTitle; }
    public void setMetaTitle(String metaTitle) { this.metaTitle = metaTitle; }

    public String getMetaDescription() { return metaDescription; }
    public void setMetaDescription(String metaDescription) { this.metaDescription = metaDescription; }

    public String getOgImageUrl() { return ogImageUrl; }
    public void setOgImageUrl(String ogImageUrl) { this.ogImageUrl = ogImageUrl; }
}
