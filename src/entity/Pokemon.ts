import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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

}
