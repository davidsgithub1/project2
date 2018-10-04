CREATE DATABASE chat;

USE chat;

CREATE TABLE IF NOT EXISTS rooms (
  `room_id` int(11)  NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  `updated_at` DATETIME ON UPDATE NOW() DEFAULT NOW(),
  `created_at` DATETIME DEFAULT NOW(),
  PRIMARY KEY (`room_id`)
);