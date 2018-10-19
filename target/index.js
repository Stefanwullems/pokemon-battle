"use strict";
exports.__esModule = true;
var vesper_1 = require("vesper");
var PostController_1 = require("./controller/PostController");
var Post_1 = require("./entity/Post");
vesper_1.bootstrap({
    port: 4000,
    controllers: [PostController_1.PostController],
    entities: [Post_1.Post],
    schemas: ["../**/*.graphql"]
})
    .then(function () {
    console.log("Your app is up and running on http://localhost:4000. " +
        "You can use playground in development mode on http://localhost:4000/playground");
})["catch"](function (error) {
    console.error(error.stack ? error.stack : error);
});
//# sourceMappingURL=index.js.map