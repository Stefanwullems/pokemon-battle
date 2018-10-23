import { Controller, Query } from "vesper";
import { EntityManager } from "typeorm";
import { Pokemon } from "../entity/Pokemon";

@Controller()
export class PokemonController {
  constructor(private entityManager: EntityManager) {}

  @Query()
  allPokemon() {
    return this.entityManager.find(Pokemon);
  }

  // serves "post(id: Int): Post" requests
  @Query()
  pokemon({ id }) {
    return this.entityManager.findOne(Pokemon, id);
  }

  //   // serves "postSave(id: Int, title: String, text: String): Post" requests
  //   @Mutation()
  //   postSave(args) {
  //     const post = this.entityManager.create(Post, args);
  //     return this.entityManager.save(Post, post);
  //   }
  //
  //   // serves "postDelete(id: Int): Boolean" requests
  //   @Mutation()
  //   async postDelete({ id }) {
  //     await this.entityManager.remove(Post, { id: id });
  //     return true;
  //   }
}
