CREATE TABLE "photos" (
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR (250) NOT NULL,
	"description" VARCHAR (250) NOT NULL,
	"likes" INT DEFAULT 0
);

INSERT INTO "photos" 
	("path", "description") 
VALUES
('/images/weekend1.jpg', 'cute dog'),
('/images/weekend2.jpg', 'peace'),
('/images/weekend3.jpg', 'basketball stuff');

SELECT * FROM "photos";