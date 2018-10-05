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
	publication_date  INT,
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
        ("david", "david@gmail.com", "dave1235", "David", "Lee", "1989-02-23", "Man's Search for Meaning"),
		("mariag", "mariag@gmail.com", "maria1987", "Maria", "Glendale", "1972-05-12", "The Outsider: A Novel"),
		("erikM", "erikb@gmail.com", "erik1215", "Erik", "Brown", "1990-05-21", "The Stand"),
		("gioD", "giod@gmail.com", "gio35", "Gio", "Daniels", "1984-04-12", "Misery"),
		("gareth3", "gareth3@gmail.com", "gareth2018", "Gareth","Marshal", "1984-04-12", "The Sun Also Rises"),
		("chrisg", "chrisg@gmail.com", "cgarreth92", "Chris", "Garreth", "1992-11-12", "For Whom the Bell Tolls"),
        ("michaelc", "michaelchim@gmail.com", "michaelc88", "Michael", "Chim", "1986-01-12", "In our Time"),
        ("adrianliu", "adrianliu@gmail.com", "adrianl92", "Adrian", "Liu", "1982-11-25", "Shanghai Girls"),
        ("noahf", "noahf@gmail.com", "noah125", "Noah", "Falconer", "1993-09-25", "The Devil Wears Prada");

INSERT INTO books
(title, author, ISBN_13, ISBN_10, publication_date, book_owner, location, picture, book_status) 
VALUES 
    ("The Odyssey", "Homer", 9780140268867, 140268863, 1999, 3, 10035,"Clear","Shared"),
    ("Anne Frank: The Diary of a Young Girl", "Anne Frank", 9780553296983, 0553296981, 1993, 2, 10001,"Black","Available"),
    ("East of Eden", "John Steinbeck", 9780140186390, 0140186395, 1952, 1, 10115,"Blue","Available"),
    ("Of Mice and Men", "John Steinbeck", 9780140177398, 00140177396, 1993, 4, 11103,"Red","Shared"),
	("Elevation", "Stephen King", 9781982102319, 1982102314, 2018, 5, 10105,"Blue","Available"),
    ("Fantastic Beasts: The Crimes of Grindelwald - The Original Screenplay (Harry Potter)", "J.K. Rowling", 9781338263893, 1338263897, 2018, 6, 11101,"Blue","Available"),  
    ("Fantastic Beasts and Where to Find Them", "J.K. Rowling", 9781338132311, 1338132318, 2017, 8, 10017,"Yellow","Available"),
	("To the Lighthouse", "Virginia Woolf", 9780156907392, 0156907399, 1989, 10, 10016,"Yellow","Available"),
	("Moments of Being", "Virginia Woolf", 9780156619189, 0156619180, 1985, 10, 10016,"Blue","Shared"),
    ("The Great Gatsby", "F. Scott Fitzgerald", 9780743273565, 0743273567, 2004, 11, 10016,"Brown","Available"),
    ("I'd Die For You: And Other Lost Stories", "F. Scott Fitzgerald", 9781501144356, 1501144359, 2018, 12,06605,"Bue","Shared"),
    ("Oh, the Places You'll Go!", "Dr. Seuss", 9780679805274, 0679805273, 1990, 12,06605,"Clear","Shared"),
    ("Green Eggs and Ham", "Dr. Seuss", 9780394800165, 0394800168, 1960, 12,11385,"Red","Shared"),
    ("Life of Pi", "Yann Martel", 9780156027328, 0156027321, 2003, 11,11384,"Blue","Available"),
	("Never Let Me Go", "Kazuo Ishiguro", 9781400078776, 1400078776, 2006, 7,11381,"Yello","Available");

