import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Pokemon } from "./Pokemon";

@Entity()
export class Moves {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  dmg: number;

  @ManyToMany(() => Pokemon, pokemon => pokemon.moves)
  pokemon: Pokemon[];
}
