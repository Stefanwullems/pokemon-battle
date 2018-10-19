import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Moves } from "./Moves";

@Entity()
export class Pokemon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  hp: number;

  @Column()
  moveDmg: number;

  @ManyToMany(() => Moves, moves => moves.pokemon)
  @JoinTable()
  moves: Moves[];
}