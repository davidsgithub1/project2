DROP DATABASE IF EXISTS shared_db;
CREATE DATABASE shared_db;

USE shared_db;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    password VARCHAR(15)  UNIQUE,
    first_name VARCHAR(20),
    last_name VARCHAR(20),
    date_of_birth  DATE,
    books_read VARCHAR (100),
    created_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (id)
   );

CREATE TABLE books (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    author VARCHAR(100),
    ISBN_13 BIGINT UNIQUE,
    ISBN_10 BIGINT UNIQUE,
	publication_date  DATE,
	book_owner INT,
	location INTEGER,
    picture VARCHAR(255),
	book_status VARCHAR(50),
	created_at TIMESTAMP DEFAULT NOW(),
	PRIMARY KEY (id),
    FOREIGN KEY (book_owner) REFERENCES users(id)
   );
   

INSERT INTO users
(username, email, password, first_name, last_name, date_of_birth, books_read) 
VALUES 
    ("cjamilc", "castro.celioj@gmail.com", "test123", "Celio", "Castro", "1987-12-15", "To Kill a Mockingbird"),
    ("alex_s", "alex_shu@gmail.com", "123pass", "Alex", "Shunova", "1988-11-14", "Homer"),
	("velimir", "velimir@gmail.com", "veli123", "Velimir", "Europer", "1990-07-14", "Where the Wild Things Are"),
	("david", "david@gmail.com", "dave1235", "David", "Lee", "1989-02-23", "Man's Search for Meaning");

INSERT INTO books
(title, author, ISBN_13, ISBN_10, publication_date, book_owner, location, picture, book_status) 
VALUES 
    ("The Odyssey", "Homer", 9780140268867, 140268863, "1999-11-01", 3, 10035,"Clear","Shared"),
    ("Anne Frank: The Diary of a Young Girl", "Anne Frank", 9780553296983, 0553296981, "1993-06-01", 2, 10001,"Black","Available"),
    ("East of Eden", "John Steinbeck", 9780140186390, 0140186395, "1952-12-01", 1, 10115,"Blue","Available"),
    ("Of Mice and Men", "John Steinbeck", 9780140177398, 00140177396, "1993-09-01", 4, 11103,"Red","Shared");

