import { bootstrap } from "vesper";
import * as IO from 'socket.io'
import * as Koa from 'koa'
import {Server} from 'http'
import { PokemonController } from "./controller/PokemonController";
import { Pokemon, Move, Stats } from "./entity/Pokemon";

import { TypeController } from "./controller/TypeController";
import { Type } from "./entity/Type";
import { GameController } from "./controller/GameController";

const port: number = Number(process.env.PORT) || 4011;

const app = new Koa()
const server = new Server(app.callback())
export const io = IO(server)

bootstrap({
  cors: true,
  port,
  controllers: [PokemonController, TypeController, GameController],
  entities: [Pokemon, Move, Stats, Type],
  schemas: ["../**/*.graphql"]
})
  .then(framework => {
    const io = IO(framework.server);

    io.on("connect", socket => {
      const color = socket.request._query.color;
      console.log(`Trainer ${color} just connected`);

      socket.on("disconnect", () => {
        console.log(`Trainer ${color} just disconnected`);
      });
    });

    console.log(
      `Your app is up and running on http://localhost:${port}. 
      You can use playground in development mode on http://localhost:${port}/playground`
    );
  })
  
  .catch(error => {
    console.error(error.stack ? error.stack : error);
  
  });
