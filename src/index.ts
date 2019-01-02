import { bootstrap } from "vesper";
import * as IO from "socket.io";

import { PokemonController } from "./controller/PokemonController";
import { TypeController } from "./controller/TypeController";
import { Pokemon, Move, Stats } from "./entity/Pokemon";
import { Type } from "./entity/Type";

const port: number = Number(process.env.PORT) || 4011;

bootstrap({
  cors: true,
  port,
  controllers: [PokemonController, TypeController],
  entities: [Pokemon, Move, Stats, Type],
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
