-- V4__add_deleted_columns.sql
ALTER TABLE product ADD COLUMN deleted BOOLEAN NOT NULL DEFAULT FALSE;
