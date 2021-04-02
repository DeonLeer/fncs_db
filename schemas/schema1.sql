DROP TABLE IF EXISTS players CASCADE;
CREATE TABLE players (
  id VARCHAR(255) PRIMARY KEY NOT NULL,
  name varchar(255) NOT NULL
);
DROP TABLE IF EXISTS regions CASCADE;
CREATE TABLE regions (
  id SERIAL PRIMARY KEY NOT NULL,
  name varchar(255) NOT NULL
);
DROP TABLE IF EXISTS seasons CASCADE;
CREATE TABLE seasons (
  id INTEGER PRIMARY KEY NOT NULL,
  season INTEGER NOT NULL
);
DROP TABLE IF EXISTS types CASCADE;
CREATE TABLE types (
  id varchar(255) PRIMARY KEY NOT NULL,
  season_id INTEGER REFERENCES seasons(id) ON DELETE CASCADE,
  region_id INTEGER REFERENCES regions(id) ON DELETE CASCADE
);
DROP TABLE IF EXISTS tournaments CASCADE;
CREATE TABLE tournaments (
  id VARCHAR(255) PRIMARY KEY NOT NULL,
  name varchar(255) NOT NULL,
  type INTEGER REFERENCES types(id) ON DELETE CASCADE
);
DROP TABLE IF EXISTS duos CASCADE;
CREATE TABLE duos (
  id VARCHAR(255) PRIMARY KEY NOT NULL,
  player1_id VARCHAR(255) REFERENCES players(id) ON DELETE CASCADE,
  player2_id VARCHAR(255) REFERENCES players(id) ON DELETE CASCADE
);
DROP TABLE IF EXISTS trios CASCADE;
CREATE TABLE trios (
  id VARCHAR(255) PRIMARY KEY NOT NULL,
  player1_id VARCHAR(255) REFERENCES players(id) ON DELETE CASCADE,
  player2_id VARCHAR(255) REFERENCES players(id) ON DELETE CASCADE,
  player3_id VARCHAR(255) REFERENCES players(id) ON DELETE CASCADE 
);
DROP TABLE IF EXISTS squads CASCADE;
CREATE TABLE squads (
  id VARCHAR(255) PRIMARY KEY NOT NULL,
  player1_id VARCHAR(255) REFERENCES players(id) ON DELETE CASCADE,
  player2_id VARCHAR(255) REFERENCES players(id) ON DELETE CASCADE,
  player3_id VARCHAR(255) REFERENCES players(id) ON DELETE CASCADE,
  player4_id VARCHAR(255) REFERENCES players(id) ON DELETE CASCADE  
);
DROP TABLE IF EXISTS solo_games CASCADE;
CREATE TABLE solo_games (
  id VARCHAR(255) PRIMARY KEY NOT NULL,
  tournament_id VARCHAR(255) REFERENCES tournaments(id) ON DELETE CASCADE,
  time TIME NOT NULL
);
DROP TABLE IF EXISTS duo_games CASCADE;
CREATE TABLE duo_games (
  id VARCHAR(255) PRIMARY KEY NOT NULL,
  tournament_id VARCHAR(255) REFERENCES tournaments(id) ON DELETE CASCADE,
  time TIME NOT NULL
);
DROP TABLE IF EXISTS trio_games CASCADE;
CREATE TABLE trio_games (
  id VARCHAR(255) PRIMARY KEY NOT NULL,
  tournament_id VARCHAR(255) REFERENCES tournaments(id) ON DELETE CASCADE,
  time TIME NOT NULL
);
DROP TABLE IF EXISTS squad_games CASCADE;
CREATE TABLE squad_games (
  id VARCHAR(255) PRIMARY KEY NOT NULL,
  tournament_id VARCHAR(255) REFERENCES tournaments(id) ON DELETE CASCADE,
  time TIME NOT NULL
);
DROP TABLE IF EXISTS solo_games_played CASCADE;
CREATE TABLE solo_games_played (
  id SERIAL PRIMARY KEY NOT NULL,
  player_id VARCHAR(255) REFERENCES trios(id) ON DELETE CASCADE,
  game_id VARCHAR(255) REFERENCES games(id) ON DELETE CASCADE
);
DROP TABLE IF EXISTS duo_games_played CASCADE;
CREATE TABLE duo_games_played (
  id SERIAL PRIMARY KEY NOT NULL,
  duo_id VARCHAR(255) REFERENCES duos(id) ON DELETE CASCADE,
  game_id VARCHAR(255) REFERENCES games(id) ON DELETE CASCADE
);
DROP TABLE IF EXISTS trio_games_played CASCADE;
CREATE TABLE trio_games_played (
  id SERIAL PRIMARY KEY NOT NULL,
  trio_id VARCHAR(255) REFERENCES trios(id) ON DELETE CASCADE,
  game_id VARCHAR(255) REFERENCES games(id) ON DELETE CASCADE
);
DROP TABLE IF EXISTS squad_games_played CASCADE;
CREATE TABLE squad_games_played (
  id SERIAL PRIMARY KEY NOT NULL,
  trio_id VARCHAR(255) REFERENCES trios(id) ON DELETE CASCADE,
  game_id VARCHAR(255) REFERENCES games(id) ON DELETE CASCADE
);
DROP TABLE IF EXISTS eliminations CASCADE;
CREATE TABLE eliminations (
  id SERIAL PRIMARY KEY NOT NULL,
  player_eliminated_id VARCHAR(255) REFERENCES players(id) ON DELETE CASCADE,
  player_elimination_id VARCHAR(255) REFERENCES players(id) ON DELETE CASCADE,
  game_id VARCHAR(255) REFERENCES games(id) ON DELETE CASCADE,
  time INTEGER
);