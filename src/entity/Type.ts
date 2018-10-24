import { Entity, PrimaryColumn, Column, BaseEntity } from "typeorm";

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
