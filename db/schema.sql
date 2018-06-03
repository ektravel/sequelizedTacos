CREATE DATABASE tacos_db;
USE tacos_db;

CREATE TABLE tacos 
(
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    taco_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false
);

USE tacos_db;
INSERT INTO tacos (taco_name, devoured) VALUES ("Baja Shrimp", false);
INSERT INTO tacos (taco_name, devoured) VALUES ("Fried Avocado", true);
INSERT INTO tacos (taco_name, devoured) VALUES ("Dirty Sanchez", true);
INSERT INTO tacos (taco_name, devoured) VALUES ("Migas", false);
INSERT INTO tacos (taco_name, devoured) VALUES ("Alabama Shake", false);
INSERT INTO tacos (taco_name, devoured) VALUES ("Mr. Pink", true);
INSERT INTO tacos (taco_name, devoured) VALUES ("Independent", false);

USE tacos_db;
UPDATE tacos SET taco_name = "Jack of Clubs" WHERE id = 2;
USE tacos_db;
UPDATE tacos SET taco_name = "Potato and Egg" WHERE id = 9;