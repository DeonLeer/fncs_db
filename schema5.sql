DROP TABLE IF EXISTS games_played CASCADE;
CREATE TABLE games_played (
  id SERIAL PRIMARY KEY NOT NULL,
  trio_id INTEGER REFERENCES trios(id) ON DELETE CASCADE,
  game_id INTEGER REFERENCES games(id) ON DELETE CASCADE,
  placement INTEGER,
  time_eliminated TIME
);