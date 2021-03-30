DROP TABLE IF EXISTS eliminations CASCADE;
CREATE TABLE eliminations (
  id SERIAL PRIMARY KEY NOT NULL,
  player_eliminated_id INTEGER REFERENCES players(id) ON DELETE CASCADE,
  player_elimination_id INTEGER REFERENCES players(id) ON DELETE CASCADE,
  game_id INTEGER REFERENCES games(id) ON DELETE CASCADE,
  time TIME NOT NULL
);