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

}
