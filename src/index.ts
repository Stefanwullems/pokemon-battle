import { bootstrap } from "vesper";
import { PokemonController } from "./controller/PokemonController";
import {
  Pokemon,
  Move,
  Pokemon_Moves,
  Stats,
  Pokemon_Types,
  Type
} from "./entity/Pokemon";

const port: number = Number(process.env.PORT) || 4011;

bootstrap({
  cors: true,
  port,
  controllers: [PokemonController],
  entities: [Pokemon, Move, Pokemon_Moves, Stats, Pokemon_Types, Type],
  schemas: ["../**/*.graphql"]
})
  .then(() => {
    console.log(
      `Your app is up and running on http://localhost:${port}. 
    You can use playground in development mode on http://localhost:${port}/playground`
    );
  })
  .catch(error => {
    console.error(error.stack ? error.stack : error);
  });
