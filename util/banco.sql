CREATE DATABASE bus_api;
USE bus_api;

CREATE TABLE line (
	id_line INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name_line VARCHAR(125) NOT NULL,
    number_line INT NOT NULL,
    origin_line VARCHAR(45) NOT NULL,
    destination_line VARCHAR(45) NOT NULL,
    sense_line VARCHAR(45),
    number_vehicle INT NOT NULL
);