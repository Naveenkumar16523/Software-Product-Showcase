-- V6__fix_admin_password.sql
-- Fix the incorrect bcrypt hash for the default admin user

UPDATE app_user
SET password_hash = '$2a$12$b1fwdQehFEfDIAg8aNFTEuDPBa1/IUf3xBvB4TfK2oh73jybMPYs6'
WHERE email = 'admin@bnytechnologies.com';
