import { MigrationInterface, QueryRunner, getConnection } from "typeorm";
import { Type, Pokemon, Move } from "../entity/Pokemon";

export class AddPokemon1540214394741 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    //
    //      Types
    //
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Type)
      .values([
        createType({
          name: "normal",
          fighting_multiplier: 2,
          ghost_multiplier: 0
        }),
        createType({
          name: "fire",
          fire_multiplier: 0.5,
          water_multiplier: 2,
          grass_multiplier: 0.5,
          ice_multiplier: 0.5,
          ground_multiplier: 2,
          bug_multiplier: 0.5,
          rock_multiplier: 2,
          steel_multiplier: 0.5,
          fairy_multiplier: 0.5
        }),
        createType({
          name: "water",
          fire_multiplier: 0.5,
          water_multiplier: 0.5,
          electric_multiplier: 2,
          grass_multiplier: 2,
          ice_multiplier: 0.5,
          steel_multiplier: 0.5
        }),
        createType({
          name: "electric",
          electric_multiplier: 0.5,
          ground_multiplier: 2,
          flying_multiplier: 0.5,
          steel_multiplier: 0.5
        }),
        createType({
          name: "grass",
          fire_multiplier: 2,
          water_multiplier: 0.5,
          electric_multiplier: 0.5,
          grass_multiplier: 0.5,
          ice_multiplier: 2,
          poison_multiplier: 2,
          ground_multiplier: 0.5,
          flying_multiplier: 2,
          bug_multiplier: 2
        }),
        createType({
          name: "ice",
          fire_multiplier: 2,
          ice_multiplier: 0.5,
          fighting_multiplier: 2,
          rock_multiplier: 2,
          steel_multiplier: 2
        }),
        createType({
          name: "fighting",
          flying_multiplier: 2,
          psychic_multiplier: 2,
          bug_multiplier: 0.5,
          rock_multiplier: 0.5,
          dark_multiplier: 0.5,
          fairy_multiplier: 2
        }),
        createType({
          name: "poison",
          grass_multiplier: 0.5,
          fighting_multiplier: 0.5,
          poison_multiplier: 0.5,
          ground_multiplier: 2,
          psychic_multiplier: 2,
          bug_multiplier: 0.5,
          fairy_multiplier: 0.5
        })
      ])
      .execute();

    //
    //    Moves
    //

    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Move)
      .values([
        {
          name: "bug bite",
          damage: 60,
          accuracy: 100,
          type: "bug",
          pp: 20,
          priority: false
        },
        {
          name: "sucker punch",
          damage: 70,
          accuracy: 100,
          type: "dark",
          pp: 5,
          priority: true
        },
        {
          name: "draco meteor",
          damage: 130,
          accuracy: 90,
          type: "dragon",
          pp: 5,
          priority: false
        },
        {
          name: "spark",
          damage: 65,
          accuracy: 100,
          type: "electric",
          pp: 20,
          priority: false
        },
        {
          name: "play rough",
          damage: 90,
          accuracy: 90,
          type: "fairy",
          pp: 10,
          priority: false
        },
        {
          name: "circle throw",
          damage: 60,
          accuracy: 90,
          type: "fighting",
          pp: 10,
          priority: false
        },
        {
          name: "lava plume",
          damage: 80,
          accuracy: 100,
          type: "fire",
          pp: 15,
          priority: false
        },
        {
          name: "peck",
          damage: 35,
          accuracy: 100,
          type: "flying",
          pp: 35,
          priority: false
        },
        {
          name: "shadow sneak",
          damage: 40,
          accuracy: 100,
          type: "ghost",
          pp: 30,
          priority: true
        },
        {
          name: "razor leaf",
          damage: 55,
          accuracy: 95,
          type: "grass",
          pp: 25,
          priority: false
        },
        {
          name: "earthquake",
          damage: 100,
          accuracy: 100,
          type: "ground",
          pp: 10,
          priority: false
        },
        {
          name: "aurora beam",
          damage: 65,
          accuracy: 100,
          type: "ice",
          pp: 20,
          priority: false
        },
        {
          name: "tackle",
          damage: 40,
          accuracy: 100,
          type: "normal",
          pp: 35,
          priority: false
        },
        {
          name: "quick attack",
          damage: 40,
          accuracy: 100,
          type: "normal",
          pp: 30,
          priority: false
        },
        {
          name: "sludge",
          damage: 65,
          accuracy: 100,
          type: "poison",
          pp: 20,
          priority: false
        },
        {
          name: "confusion",
          damage: 50,
          accuracy: 100,
          type: "psychic",
          pp: 25,
          priority: false
        },
        {
          name: "stone edge",
          damage: 100,
          accuracy: 80,
          type: "rock",
          pp: 5,
          priority: false
        },
        {
          name: "iron head",
          damage: 80,
          accuracy: 100,
          type: "steel",
          pp: 15,
          priority: false
        },
        {
          name: "surf",
          damage: 90,
          accuracy: 100,
          type: "water",
          pp: 15,
          priority: false
        }
      ])
      .execute();

    //
    //    Pokemon
    //

    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Pokemon)
      .values([
        {
          name: "bulbasaur",
          id: 1,
          types: []
        },
        {
          name: "ivysaur",
          id: 2,
          types: []
        },
        {
          name: "venusaur",
          id: 3,
          types: []
        }
      ])
      .execute();

    //
    //      Adding relations to pokemons
    //

    //      1. bulbasaur
    await this.addRelations({
      id: 1,
      typeKeys: ["grass", "poison"],
      moveKeys: ["tackle", "razor leaf", "sludge"]
    });

    //      2. ivysaur
    await this.addRelations({
      id: 2,
      typeKeys: ["grass", "poison"],
      moveKeys: ["tackle", "razor leaf", "sludge", "confusion"]
    });

    //      3. venusaur
    await this.addRelations({
      id: 3,
      typeKeys: ["grass", "poison"],
      moveKeys: ["earthquake", "razor leaf", "sludge", "confusion"]
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}

  async addRelations({ id, typeKeys, moveKeys }: IAddRelations) {
    const pokemon = await getConnection().getRepository(Pokemon);

    const types = await getConnection().getRepository(Type);
    await this.addRelation(id, "types", types, typeKeys, pokemon);

    const moves = await getConnection().getRepository(Move);
    await this.addRelation(id, "moves", moves, moveKeys, pokemon);
  }

  async addRelation(id, to, repository, keys, pokemon) {
    for (let i = 0; i < keys.length; i++) {
      await getConnection()
        .createQueryBuilder()
        .relation(Pokemon, to)
        .of(await pokemon.findOne(id))
        .add(await repository.findOne({ where: { name: keys[i] } }));
    }
  }
}

interface IAddRelations {
  /**
   * id of the owning entity
   */
  id: number;
  /**
   * primary keys of the moves to add
   */
  typeKeys: string[];
  /**
   * primary keys of the moves to add
   */
  moveKeys: string[];
}

interface IType {
  name: string;
  normal_multiplier?: number;
  fire_multiplier?: number;
  water_multiplier?: number;
  electric_multiplier?: number;
  grass_multiplier?: number;
  ice_multiplier?: number;
  fighting_multiplier?: number;
  poison_multiplier?: number;
  ground_multiplier?: number;
  flying_multiplier?: number;
  psychic_multiplier?: number;
  bug_multiplier?: number;
  rock_multiplier?: number;
  ghost_multiplier?: number;
  dragon_multiplier?: number;
  dark_multiplier?: number;
  steel_multiplier?: number;
  fairy_multiplier?: number;
}

function createType({
  name,
  normal_multiplier = 1,
  fire_multiplier = 1,
  water_multiplier = 1,
  electric_multiplier = 1,
  grass_multiplier = 1,
  ice_multiplier = 1,
  fighting_multiplier = 1,
  poison_multiplier = 1,
  ground_multiplier = 1,
  flying_multiplier = 1,
  psychic_multiplier = 1,
  bug_multiplier = 1,
  rock_multiplier = 1,
  ghost_multiplier = 1,
  dragon_multiplier = 1,
  dark_multiplier = 1,
  steel_multiplier = 1,
  fairy_multiplier = 1
}: IType) {
  return {
    name,
    normal_multiplier,
    fire_multiplier,
    water_multiplier,
    electric_multiplier,
    grass_multiplier,
    ice_multiplier,
    fighting_multiplier,
    poison_multiplier,
    ground_multiplier,
    flying_multiplier,
    psychic_multiplier,
    bug_multiplier,
    rock_multiplier,
    ghost_multiplier,
    dragon_multiplier,
    dark_multiplier,
    steel_multiplier,
    fairy_multiplier
  };
}
