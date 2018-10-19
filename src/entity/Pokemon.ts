import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Moves } from "./Moves";

@Entity()
export class Pokemon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  moveDmg: number;


  @Column()

  spd: number;


  @Column()
  attack: number;


  @Column()
  def: number;

  @Column()
  hp: number;

  @ManyToMany(() => Moves, moves => moves.pokemon)
  @JoinTable()
  moves: Moves[];
}

