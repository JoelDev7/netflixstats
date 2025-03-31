USE netflix;

CREATE TABLE IF NOT EXISTS movies (
    show_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    director TEXT,
    cast TEXT,
    country TEXT,
    date_added DATE,
    release_year YEAR,
    rating FLOAT(4,2),
    genres TEXT,
    language VARCHAR(10),
    description TEXT,
    vote_count MEDIUMINT UNSIGNED,
    budget INT UNSIGNED,
    revenue INT UNSIGNED
);

LOAD DATA INFILE "/var/lib/mysql-files/movies.csv"
INTO TABLE movies
FIELDS TERMINATED BY ',' 
OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;