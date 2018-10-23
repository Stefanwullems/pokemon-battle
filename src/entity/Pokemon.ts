import {
  Entity,
  PrimaryColumn,
  Column,
  OneToOne,
  JoinColumn,
  BaseEntity,
  ManyToMany,
  JoinTable
} from "typeorm";

@Entity()
export class Pokemon extends BaseEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @JoinTable()
  @ManyToMany(type => Type)
  types: Type[];

  @JoinColumn()
  @OneToOne(type => Stats)
  stats: Stats;

  @ManyToMany(type => Move)
  @JoinTable()
  moves: Move[];
}

@Entity()
export class Type extends BaseEntity {
  @PrimaryColumn("text", { nullable: false })
  name: string;

  @Column("float", { nullable: true })
  normal_multiplier: number;

  @Column("float", { nullable: true })
  fire_multiplier: number;

  @Column("float", { nullable: true })
  water_multiplier: number;

  @Column("float", { nullable: true })
  electric_multiplier: number;

  @Column("float", { nullable: true })
  grass_multiplier: number;

  @Column("float", { nullable: true })
  ice_multiplier: number;

  @Column("float", { nullable: true })
  fighting_multiplier: number;

  @Column("float", { nullable: true })
  poison_multiplier: number;

  @Column("float", { nullable: true })
  ground_multiplier: number;

  @Column("float", { nullable: true })
  flying_multiplier: number;

  @Column("float", { nullable: true })
  psychic_multiplier: number;

  @Column("float", { nullable: true })
  bug_multiplier: number;

  @Column("float", { nullable: true })
  rock_multiplier: number;

  @Column("float", { nullable: true })
  ghost_multiplier: number;

  @Column("float", { nullable: true })
  dragon_multiplier: number;

  @Column("float", { nullable: true })
  dark_multiplier: number;

  @Column("float", { nullable: true })
  steel_multiplier: number;

  @Column("float", { nullable: true })
  fairy_multiplier: number;
}

@Entity()
export class Stats extends BaseEntity {
  @PrimaryColumn()
  @OneToOne(type => Pokemon)
  id: number;

  @Column("int", { nullable: true })
  hp: number;

  @Column("int", { nullable: true })
  attack: number;

  @Column("int", { nullable: true })
  defense: number;

  @Column("int", { nullable: true })
  speed: number;
}

@Entity()
export class Move extends BaseEntity {
  @PrimaryColumn({ unique: true })
  name: string;

  @Column()
  damage: number;

  @Column("text", { nullable: false })
  type: string;

  @Column()
  accuracy: number;

  @Column("int", { nullable: false })
  pp: number;

  @Column()
  priority: boolean;
}
