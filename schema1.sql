DROP TABLE IF EXISTS players CASCADE;
CREATE TABLE players (
  id SERIAL PRIMARY KEY NOT NULL,
  name varchar(255) NOT NULL
);