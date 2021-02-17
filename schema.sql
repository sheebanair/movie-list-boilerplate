CREATE DATABASE movies;

USE movies;

CREATE TABLE movieList (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title TEXT NOT NULL
);

-- mysql -u student -p < schema.sql