import {
    Entity,
    PrimaryColumn,
    BaseEntity,
  } from "typeorm";
  
  @Entity()
  export class Game extends BaseEntity {
    @PrimaryColumn()
    id: number;
  }