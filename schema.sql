DROP DATABASE IF EXISTS movies;
CREATE DATABASE IF NOT EXISTS movies;
USE movies;


CREATE TABLE IF NOT EXISTS movielist(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title  VARCHAR(100) NOT NULL,
    description VARCHAR(1024)  NULL,
    release_date DATE,
    vote_average DECIMAL(7, 2),
    vote_count INT(7),
    watched TINYINT(1)
);

-- mysql -u student -p < schema.sql