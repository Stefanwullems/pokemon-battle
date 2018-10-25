import { Controller, Query } from "vesper";
import { EntityManager } from "typeorm";
import { Type } from "../entity/Type";

@Controller()
export class TypeController {
  constructor(private entityManager: EntityManager) {}

  @Query()
  types() {
    return this.entityManager.find(Type);
  }
}
