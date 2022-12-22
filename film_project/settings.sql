-- settings.sql
CREATE DATABASE film_project;
CREATE USER filmuser WITH PASSWORD 'film';
GRANT ALL PRIVILEGES ON DATABASE film_project TO filmuser;