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

  @Column("float", { nullable: false })
  normal_multiplier: number;

  @Column("float", { nullable: false })
  fire_multiplier: number;

  @Column("float", { nullable: false })
  water_multiplier: number;

  @Column("float", { nullable: false })
  electric_multiplier: number;

  @Column("float", { nullable: false })
  grass_multiplier: number;

  @Column("float", { nullable: false })
  ice_multiplier: number;

  @Column("float", { nullable: false })
  fighting_multiplier: number;

  @Column("float", { nullable: false })
  poison_multiplier: number;

  @Column("float", { nullable: false })
  ground_multiplier: number;

  @Column("float", { nullable: false })
  flying_multiplier: number;

  @Column("float", { nullable: false })
  psychic_multiplier: number;

  @Column("float", { nullable: false })
  bug_multiplier: number;

  @Column("float", { nullable: false })
  rock_multiplier: number;

  @Column("float", { nullable: false })
  ghost_multiplier: number;

  @Column("float", { nullable: false })
  dragon_multiplier: number;

  @Column("float", { nullable: false })
  dark_multiplier: number;

  @Column("float", { nullable: false })
  steel_multiplier: number;

  @Column("float", { nullable: false })
  fairy_multiplier: number;
}

@Entity()
export class Stats extends BaseEntity {
  @PrimaryColumn()
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
