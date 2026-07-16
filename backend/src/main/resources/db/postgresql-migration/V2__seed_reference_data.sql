-- V2__seed_reference_data.sql

-- Admin User (password: admin)
INSERT INTO app_user (email, password_hash, full_name, role, enabled, created_by)
VALUES ('admin@bnytechnologies.com', '$2a$12$KkQ1bI59P.k63iO44vX9rOy8/1H1F.1vR.I4L/L.2q6Q.O0G8D2uS', 'System Admin', 'ADMIN', true, 'system');

-- Categories
INSERT INTO product_category (id, name, slug, description, created_by) VALUES
(1, 'Point of Sale', 'pos', 'Modern retail point of sale systems', 'system'),
(2, 'Inventory Management', 'inventory', 'Enterprise inventory tracking', 'system'),
(3, 'E-Commerce', 'ecommerce', 'Digital storefronts and integrations', 'system'),
(4, 'Analytics', 'analytics', 'Retail data analytics and reporting', 'system');
ALTER SEQUENCE product_category_id_seq RESTART WITH 5;

-- Industries
INSERT INTO industry (id, title, description, icon_key, display_order, created_by) VALUES
(1, 'Fashion & Apparel', 'Size matrix, seasonal variants, and multi-store inventory routing built specifically for clothing retailers.', 'Shirt', 1, 'system'),
(2, 'Grocery & Supermarkets', 'High-volume scanning, fresh item weighing integrations, and expiration date tracking for grocery operations.', 'ShoppingCart', 2, 'system'),
(3, 'Electronics', 'Serial number tracking, warranty management, and bundled product support for electronics retailers.', 'Laptop', 3, 'system'),
(4, 'Health & Beauty', 'Appointment scheduling integrated with POS, practitioner commissions, and product expiry alerts.', 'Stethoscope', 4, 'system');
ALTER SEQUENCE industry_id_seq RESTART WITH 5;
