"use strict";
exports.__esModule = true;
var vesper_1 = require("vesper");
var PokemonController_1 = require("./controller/PokemonController");
var Pokemon_1 = require("./entity/Pokemon");
var Moves_1 = require("./entity/Moves");
// @ts-ignore
var port = process.env.PORT || 4011;
vesper_1.bootstrap({
    cors: true,
    port: port,
    controllers: [PokemonController_1.PokemonController],
    entities: [Pokemon_1.Pokemon, Moves_1.Moves],
    schemas: ["../**/*.graphql"]
})
    .then(function () {
    console.log("Your app is up and running on http://localhost:" + port + ". \n    You can use playground in development mode on http://localhost:" + port + "/playground");
})["catch"](function (error) {
    console.error(error.stack ? error.stack : error);
});
//# sourceMappingURL=index.js.map