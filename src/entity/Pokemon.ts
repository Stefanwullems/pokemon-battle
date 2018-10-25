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

  @Column()
  primaryType: string;

  @Column()
  secondaryType: string;

  @JoinColumn()
  @OneToOne(type => Stats)
  stats: Stats;

  @JoinColumn()
  @OneToOne(type => Sprites)
  sprites: Sprites;

  @ManyToMany(type => Move)
  @JoinTable()
  moves: Move[];
}

@Entity()
export class Stats extends BaseEntity {
  @PrimaryColumn("int", { nullable: false })
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
export class Sprites extends BaseEntity {
  @OneToOne(type => Pokemon)
  @PrimaryColumn("int", { nullable: false })
  id: number;

  @Column("text", { nullable: true })
  front_sprite_url: string;

  @Column("text", { nullable: true })
  back_sprite_url: string;
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
