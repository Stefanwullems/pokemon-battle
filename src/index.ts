import { bootstrap } from "vesper"
import * as IO from "socket.io"

import { PokemonController } from "./controller/PokemonController"
import { Pokemon, Move, Stats, Type } from "./entity/Pokemon"

// import { Server } from "socket.io"

const port: number = Number(process.env.PORT) || 4011

// const app: VesperFramework = new VesperFramework({
//   cors: true,
//   port,
//   controllers: [PokemonController],
//   entities: [Pokemon, Move, Stats, Type],
//   schemas: ["../**/*.graphql"]
// });
//
// export const io: Server = IO(app.server);
//
// app.start()
// // bootstrap(app.options)
// .then(() => {
//
//   io.on('connect', socket => {
//     const color = socket.request._query.color;
//     console.log(`Trainer ${color} just connected`);
//
//     socket.on('disconnect', () => {
//       console.log(`Trainer ${color} just disconnected`)
//     })
//   });
//
//   console.log(
//     `Your app is up and running on http://localhost:${port}.
//       You can use playground in development mode on http://localhost:${port}/playground`
//   );
// })
// .catch(error => {
//   console.error(error.stack ? error.stack : error);
// });


bootstrap({
  cors: true,
  port,
  controllers: [PokemonController],
  entities: [Pokemon, Move, Stats, Type],
  schemas: ["../**/*.graphql"]
})
.then(({ server }) => {

  const io = IO(server)

  const trainer = {
    red: null,
    blue: null
  }

  io.on("connect", socket => {
    const player = socket.request._query.color
    const t = socket.request._query.t
    console.log(`Trainer ${player} just connected`)

    trainer[player] = t;

    const opponent = player === "blue" ? "red" : "blue"

    io.emit("action", ({
      type: `${player.toUpperCase()}_LOGIN`,
      payload: trainer[player]
    }))

    if (trainer[opponent]) {
      socket.emit("action", ({
        type: `${opponent.toUpperCase()}_LOGIN`,
        payload: trainer[opponent]
      }))
    }

    socket.on("attack", (move, fn) => {
      socket.broadcast.emit("action", ({
        type: 'OPPONENT_SELECTED_MOVE',
        payload: move
      }))
    })

    socket.on("disconnect", () => {

      io.emit("action", ({
        type: `${player.toUpperCase()}_LOGOUT`
      }))

      trainer[player] = null;

      console.log(`Trainer ${player} just disconnected`)
    })
  })

  console.log(
    `Your app is up and running on http://localhost:${port}.
      You can use playground in development mode on http://localhost:${port}/playground`
  )
})
.catch(error => {
  console.error(error.stack ? error.stack : error)
})
