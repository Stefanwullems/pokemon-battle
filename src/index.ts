import { bootstrap } from "vesper";
import { PostController } from "./controller/PostController";
import { Post } from "./entity/Post";

bootstrap({
  port: 4000,
  controllers: [PostController],
  entities: [Post],
  schemas: ["../**/*.graphql"]
})
  .then(() => {
    console.log(
      "Your app is up and running on http://localhost:4000. " +
        "You can use playground in development mode on http://localhost:4000/playground"
    );
  })
  .catch(error => {
    console.error(error.stack ? error.stack : error);
  });
