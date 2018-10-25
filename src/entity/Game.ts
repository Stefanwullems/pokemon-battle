import {
    Entity,
    PrimaryColumn,
    Column,
    BaseEntity,
  } from "typeorm";
  
  type Status = 'Pending' | 'Started' | 'Finished'

  @Entity()
  export class Game extends BaseEntity {
    @PrimaryColumn()
    id: number
   
    @Column()
    status: Status

    @Column()
    playerone: String

    @Column()
    playertwo: string
  }