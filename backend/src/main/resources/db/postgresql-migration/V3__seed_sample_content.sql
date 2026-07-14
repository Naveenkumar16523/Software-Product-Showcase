-- V3__seed_sample_content.sql

-- Products
INSERT INTO product (id, name, slug, short_description, description, category_id, status, icon_key, display_order, created_by) VALUES
(1, 'RetailOS', 'retail-os', 'Complete point of sale and inventory management.', 'RetailOS is our flagship enterprise solution.', 1, 'PUBLISHED', 'ScanLine', 1, 'system'),
(2, 'OmniCommerce', 'omnicommerce', 'Unified digital storefronts.', 'Seamlessly connect your physical and digital stores.', 3, 'PUBLISHED', 'Globe', 2, 'system'),
(3, 'StoreAnalytics', 'store-analytics', 'AI-powered business intelligence.', 'Actionable insights to drive growth.', 4, 'PUBLISHED', 'BarChart3', 3, 'system');
ALTER SEQUENCE product_id_seq RESTART WITH 4;

-- Pricing Plans
INSERT INTO pricing_plan (id, name, slug, price_monthly, price_yearly, currency, is_featured, display_order, created_by) VALUES
(1, 'Starter', 'starter', 49.00, 490.00, 'USD', FALSE, 1, 'system'),
(2, 'Professional', 'professional', 149.00, 1490.00, 'USD', TRUE, 2, 'system'),
(3, 'Enterprise', 'enterprise', NULL, NULL, 'USD', FALSE, 3, 'system');
ALTER SEQUENCE pricing_plan_id_seq RESTART WITH 4;

-- Pricing Plan Features
INSERT INTO pricing_plan_feature (pricing_plan_id, feature_text, included, display_order, created_by) VALUES
(1, 'Up to 2 Store Locations', TRUE, 1, 'system'),
(1, 'Basic Inventory', TRUE, 2, 'system'),
(1, 'API Access', FALSE, 3, 'system'),
(2, 'Up to 10 Store Locations', TRUE, 1, 'system'),
(2, 'Advanced Inventory & Routing', TRUE, 2, 'system'),
(2, 'API Access', TRUE, 3, 'system');

-- Testimonials
INSERT INTO testimonial (author_name, author_role, author_company, quote, avatar_url, is_featured, display_order, created_by) VALUES
('Sarah Jenkins', 'Operations Director', 'StyleHub', 'B&Y completely transformed our retail operations. Our checkout times are down 40%.', NULL, TRUE, 1, 'system'),
('Michael Chen', 'CEO', 'FreshMart', 'The analytics suite alone paid for the system in three months.', NULL, TRUE, 2, 'system');

-- FAQs
INSERT INTO faq (question, answer, category, display_order, created_by) VALUES
('How long does implementation take?', 'For most mid-sized retailers, we can be fully deployed in 4-6 weeks.', 'Onboarding', 1, 'system'),
('Do you offer 24/7 support?', 'Yes, all Professional and Enterprise tiers include 24/7 global support.', 'Support', 2, 'system');

-- Portfolio
INSERT INTO portfolio_item (id, title, slug, summary, description, tech_stack, image_url, live_url, repo_url, featured, created_by) VALUES
(1, 'Global Fashion Retailer Upgrade', 'global-fashion', 'Unified commerce for 200+ stores', 'Deployed RetailOS across a global footprint.', ARRAY['Java', 'React', 'PostgreSQL'], NULL, NULL, NULL, TRUE, 'system');
ALTER SEQUENCE portfolio_item_id_seq RESTART WITH 2;

-- Services
INSERT INTO service_item (id, name, description, created_by) VALUES
(1, 'Custom Software Development', 'Tailored solutions for your unique enterprise challenges.', 'system'),
(2, 'Cloud Migration', 'Seamlessly transition your legacy systems to modern cloud infrastructure.', 'system');
ALTER SEQUENCE service_item_id_seq RESTART WITH 3;

-- Job Listings
INSERT INTO job_listing (id, title, slug, department, location, employment_type, description, is_open, created_by) VALUES
(1, 'Senior Backend Engineer', 'senior-backend-engineer', 'Engineering', 'Remote (US)', 'Full-time', 'Join our core platform team to build scalable microservices in Java.', TRUE, 'system'),
(2, 'Product Marketing Manager', 'product-marketing-manager', 'Marketing', 'New York, NY', 'Full-time', 'Drive the go-to-market strategy for our enterprise retail solutions.', TRUE, 'system');
ALTER SEQUENCE job_listing_id_seq RESTART WITH 3;

-- Company Info (Singleton)
INSERT INTO company_info (id, legal_name, tagline, about_text, founded_year, headquarters, email, phone, logo_url, created_by) VALUES
(1, 'B & Y Technology', 'Modern Corporate Solutions', 'We build software that helps retailers scale.', 2015, 'San Francisco, CA', 'hello@bnytechnologies.com', '+1 (555) 123-4567', '/logo.svg', 'system');
