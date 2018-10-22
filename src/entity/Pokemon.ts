import {
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  BaseEntity
} from "typeorm";

@Entity()
export class Pokemon extends BaseEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @JoinColumn()
  @OneToOne(type => Pokemon_Types)
  types: Pokemon_Types;

  @JoinColumn()
  @OneToOne(type => Stats)
  stats: Stats;

  @OneToOne(type => Pokemon_Moves)
  @JoinColumn()
  moves: Pokemon_Moves;
}

@Entity()
export class Pokemon_Types extends BaseEntity {
  @OneToOne(type => Pokemon)
  @PrimaryGeneratedColumn()
  id: number;

  @JoinColumn()
  @OneToOne(type => Type)
  primaryType: Type;

  @JoinColumn()
  @OneToOne(type => Type)
  secondaryType: Type;
}

@Entity()
export class Type extends BaseEntity {
  @OneToOne(type => Pokemon_Types)
  @PrimaryColumn("text", { nullable: false })
  name: string;

  @Column("integer", { nullable: false })
  normalMultiplier: string;

  @Column("integer", { nullable: false })
  fireMultiplier: number;

  @Column("integer", { nullable: false })
  waterMultiplier: number;

  @Column("integer", { nullable: false })
  electricMultiplier: number;

  @Column("integer", { nullable: false })
  grassMultiplier: number;

  @Column("integer", { nullable: false })
  iceMultiplier: number;

  @Column("integer", { nullable: false })
  fightingMultiplier: number;

  @Column("integer", { nullable: false })
  poisonMultiplier: number;

  @Column("integer", { nullable: false })
  goundMultiplier: number;

  @Column("integer", { nullable: false })
  flyingMultiplier: number;

  @Column("integer", { nullable: false })
  psychicMultiplier: number;

  @Column("integer", { nullable: false })
  bugMultiplier: number;

  @Column("integer", { nullable: false })
  rockMultiplier: number;

  @Column("integer", { nullable: false })
  ghostMultiplier: number;

  @Column("integer", { nullable: false })
  dragonMultiplier: number;

  @Column("integer", { nullable: false })
  darkMultiplier: number;

  @Column("integer", { nullable: false })
  steelMultiplier: number;

  @Column("integer", { nullable: false })
  fairyMultiplier: number;
}

@Entity()
export class Stats extends BaseEntity {
  @PrimaryGeneratedColumn()
  @OneToOne(type => Pokemon)
  id: number;

  @Column()
  hp: number;

  @Column()
  attack: number;

  @Column()
  defense: number;

  @Column()
  speed: number;
}

@Entity()
export class Pokemon_Moves extends BaseEntity {
  @OneToOne(type => Pokemon)
  @PrimaryGeneratedColumn()
  id: number;

  @JoinColumn()
  @OneToOne(type => Move)
  firstMove: Move;

  @JoinColumn()
  @OneToOne(type => Move)
  secondMove: Move;

  @JoinColumn()
  @OneToOne(type => Move)
  thirdMove: Move;

  @JoinColumn()
  @OneToOne(type => Move)
  fourthMove: Move;
}

@Entity()
export class Move extends BaseEntity {
  @OneToOne(type => Pokemon_Moves)
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  dmg: number;
}
