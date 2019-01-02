import { MigrationInterface, QueryRunner, getConnection } from "typeorm";
import { Pokemon, Move, Stats, Sprites } from "../entity/Pokemon";
import { Type } from "../entity/Type";

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
        }),
        createType({
          name: "ground",
          water_multiplier: 2,
          electric_multiplier: 0,
          grass_multiplier: 2,
          ice_multiplier: 2,
          poison_multiplier: 0.5,
          rock_multiplier: 0.5
        }),
        createType({
          name: "flying",
          electric_multiplier: 2,
          grass_multiplier: 0.5,
          ice_multiplier: 2,
          fighting_multiplier: 0.5,
          ground_multiplier: 0,
          bug_multiplier: 0.5,
          rock_multiplier: 2
        }),
        createType({
          name: "psychic",
          fighting_multiplier: 0.5,
          psychic_multiplier: 0.5,
          bug_multiplier: 2,
          ghost_multiplier: 2,
          dark_multiplier: 2
        }),
        createType({
          name: "bug",
          fire_multiplier: 2,
          grass_multiplier: 0.5,
          fighting_multiplier: 0.5,
          ground_multiplier: 0.5,
          flying_multiplier: 2,
          rock_multiplier: 2
        }),
        createType({
          name: "rock",
          normal_multiplier: 0.5,
          fire_multiplier: 0.5,
          water_multiplier: 2,
          grass_multiplier: 2,
          fighting_multiplier: 2,
          poison_multiplier: 0.5,
          ground_multiplier: 2,
          flying_multiplier: 0.5,
          steel_multiplier: 2
        }),
        createType({
          name: "ghost",
          normal_multiplier: 0,
          fighting_multiplier: 0,
          poison_multiplier: 0.5,
          bug_multiplier: 0.5,
          ghost_multiplier: 2,
          dark_multiplier: 2
        }),
        createType({
          name: "dragon",
          fire_multiplier: 0.5,
          water_multiplier: 0.5,
          electric_multiplier: 0.5,
          grass_multiplier: 0.5,
          ice_multiplier: 2,
          dragon_multiplier: 2,
          fairy_multiplier: 2
        }),
        createType({
          name: "dark",
          fighting_multiplier: 2,
          psychic_multiplier: 0,
          bug_multiplier: 2,
          ghost_multiplier: 0.5,
          dark_multiplier: 0.5,
          fairy_multiplier: 2
        }),
        createType({
          name: "steel",
          normal_multiplier: 0.5,
          fire_multiplier: 2,
          grass_multiplier: 0.5,
          ice_multiplier: 0.5,
          fighting_multiplier: 2,
          poison_multiplier: 0,
          ground_multiplier: 2,
          flying_multiplier: 0.5,
          psychic_multiplier: 0.5,
          bug_multiplier: 0.5,
          rock_multiplier: 0.5,
          dragon_multiplier: 0.5,
          steel_multiplier: 0.5,
          fairy_multiplier: 0.5
        }),
        createType({
          name: "fairy",
          fighting_multiplier: 0.5,
          poison_multiplier: 2,
          bug_multiplier: 0.5,
          dragon_multiplier: 0,
          dark_multiplier: 0.5,
          steel_multiplier: 2
        }),
        createType({
          name: "null"
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
        //Bug moves
        {
          name: "bug bite",
          damage: 60,
          accuracy: 100,
          type: "bug",
          pp: 20,
          priority: false
        },
        {
          name: "bug buzz",
          damage: 90,
          accuracy: 100,
          type: "bug",
          pp: 20,
          priority: false
        },
        // dark moves
        {
          name: "crunch",
          damage: 90,
          accuracy: 100,
          type: "dark",
          pp: 15,
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
        // dragon moves
        {
          name: "dragon tail",
          damage: 60,
          accuracy: 90,
          type: "dragon",
          pp: 10,
          priority: false
        },
        {
          name: "draco meteor",
          damage: 130,
          accuracy: 90,
          type: "dragon",
          pp: 5,
          priority: false
        },
        // electric moves
        {
          name: "spark",
          damage: 65,
          accuracy: 100,
          type: "electric",
          pp: 20,
          priority: false
        },
        {
          name: "shock wave",
          damage: 60,
          accuracy: 100,
          type: "electric",
          pp: 20,
          priority: false
        },
        {
          name: "discharge",
          damage: 80,
          accuracy: 100,
          type: "electric",
          pp: 15,
          priority: false
        },
        // fairy moves
        {
          name: "fairy wind",
          damage: 40,
          accuracy: 100,
          type: "fairy",
          pp: 30,
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
        // fighting moves
        {
          name: "karate chop",
          damage: 50,
          accuracy: 100,
          type: "fighting",
          pp: 25,
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
        // fire moves
        {
          name: "ember",
          damage: 40,
          accuracy: 100,
          type: "fire",
          pp: 25,
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
        // flying moves
        {
          name: "peck",
          damage: 35,
          accuracy: 100,
          type: "flying",
          pp: 35,
          priority: false
        },
        {
          name: "wing attack",
          damage: 60,
          accuracy: 100,
          type: "flying",
          pp: 35,
          priority: false
        },
        // ghost moves
        {
          name: "shadow sneak",
          damage: 40,
          accuracy: 100,
          type: "ghost",
          pp: 30,
          priority: true
        },
        {
          name: "shadow ball",
          damage: 80,
          accuracy: 100,
          type: "ghost",
          pp: 15,
          priority: false
        },
        // grass moves
        {
          name: "razor leaf",
          damage: 55,
          accuracy: 95,
          type: "grass",
          pp: 25,
          priority: false
        },
        {
          name: "seed bomb",
          damage: 80,
          accuracy: 100,
          type: "grass",
          pp: 15,
          priority: false
        },
        // ground moves
        {
          name: "mud shot",
          damage: 55,
          accuracy: 95,
          type: "ground",
          pp: 15,
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
        // ice moves
        {
          name: "ice shard",
          damage: 40,
          accuracy: 100,
          type: "ice",
          pp: 30,
          priority: true
        },
        {
          name: "aurora beam",
          damage: 65,
          accuracy: 100,
          type: "ice",
          pp: 20,
          priority: false
        },
        //  normal moves
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
        // poison moves
        {
          name: "sludge",
          damage: 65,
          accuracy: 100,
          type: "poison",
          pp: 20,
          priority: false
        },
        {
          name: "sludge bomb",
          damage: 90,
          accuracy: 100,
          type: "poison",
          pp: 10,
          priority: false
        },
        // psychic moves
        {
          name: "confusion",
          damage: 50,
          accuracy: 100,
          type: "psychic",
          pp: 25,
          priority: false
        },
        {
          name: "psybeam",
          damage: 65,
          accuracy: 100,
          type: "psychic",
          pp: 20,
          priority: false
        },
        //  rock moves
        {
          name: "rock throw",
          damage: 50,
          accuracy: 90,
          type: "rock",
          pp: 15,
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
        // steel moves
        {
          name: "metal claw",
          damage: 50,
          accuracy: 95,
          type: "steel",
          pp: 35,
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
        // water moves
        {
          name: "bubble",
          damage: 40,
          accuracy: 100,
          type: "water",
          pp: 30,
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

    //
    //      Adding relations to pokemons
    //

    await this.createPokemon({
      id: 2,
      name: "ivysaur",
      primaryType: "grass",
      secondaryType: "poison",
      moves: ["tackle", "razor leaf", "sludge", "seed bomb"],
      stats: {
        attack: 80,
        defense: 80,
        hp: 60,
        speed: 60
      }
    });

    await this.createPokemon({
      id: 5,
      name: "charizard",
      primaryType: "fire",
      secondaryType: "null",
      moves: ["crunch", "ember", "metal claw", "sucker punch"],
      stats: {
        attack: 80,
        defense: 62,
        hp: 58,
        speed: 80
      }
    });

    await this.createPokemon({
      id: 8,
      name: "wartortle",
      primaryType: "water",
      secondaryType: "null",
      moves: ["peck", "surf", "dragon tail", "ice shard"],
      stats: {
        attack: 63,
        defense: 80,
        hp: 80,
        speed: 57
      }
    });

    await this.createPokemon({
      id: 25,
      name: "pikachu",
      primaryType: "electric",
      secondaryType: "null",
      moves: ["quick attack", "discharge", "iron head", "play rough"],
      stats: {
        attack: 65,
        defense: 55,
        hp: 55,
        speed: 95
      }
    });

    await this.createPokemon({
      id: 75,
      name: "graveler",
      primaryType: "rock",
      secondaryType: "ground",
      moves: ["stone edge", "earthquake", "tackle", "rock throw"],
      stats: {
        attack: 75,
        defense: 115,
        hp: 55,
        speed: 35
      }
    });

    await this.createPokemon({
      id: 123,
      name: "scyther",
      primaryType: "bug",
      secondaryType: "flying",
      moves: ["bug buzz", "wing attack", "sucker punch", "quick attack"],
      stats: {
        attack: 90,
        defense: 40,
        hp: 55,
        speed: 95
      }
    });

    await this.createPokemon({
      id: 64,
      name: "kadabra",
      primaryType: "psychic",
      secondaryType: "null",
      moves: ["psybeam", "shadow ball", "shock wave", "confusion"],
      stats: {
        attack: 90,
        defense: 40,
        hp: 55,
        speed: 95
      }
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}

  async createPokemon({
    id,
    name,
    primaryType,
    secondaryType,
    moves,
    stats
  }: IPokemon) {
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Pokemon)
      .values([
        {
          name,
          id: id,
          primaryType,
          secondaryType,
          moves: []
        }
      ])
      .execute();

    await this.addRelations({
      id,
      moves,
      stats,
      sprites: {
        front_sprite_url: `https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`,
        back_sprite_url: `https://img.pokemondb.net/sprites/black-white/anim/back-normal/${name}.gif`
      }
    });
  }

  async addRelations({ id, moves, stats, sprites }: IAddRelations) {
    const pokemon = await getConnection()
      .getRepository(Pokemon)
      .findOne(id);

    const movesRepo = await getConnection().getRepository(Move);
    await this.addManyToMany(pokemon, "moves", movesRepo, moves);

    await this.addOneToOne(
      pokemon,
      Stats,
      {
        id: pokemon.id,
        hp: stats.hp,
        attack: stats.attack,
        defense: stats.defense,
        speed: stats.speed
      },
      "stats"
    );

    await this.addOneToOne(
      pokemon,
      Sprites,
      {
        id: pokemon.id,
        front_sprite_url: sprites.front_sprite_url,
        back_sprite_url: sprites.back_sprite_url
      },
      "sprites"
    );
  }

  async addManyToMany(pokemon, to, repository, keys) {
    for (let i = 0; i < keys.length; i++) {
      await getConnection()
        .createQueryBuilder()
        .relation(Pokemon, to)
        .of(pokemon)
        .add(await repository.findOne({ where: { name: keys[i] } }));
    }
  }

  async addOneToOne(pokemon, into, values, to) {
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(into)
      .values([values])
      .execute();

    const repo = await getConnection().getRepository(into);

    await getConnection()
      .createQueryBuilder()
      .relation(Pokemon, to)
      .of(pokemon)
      .set(await repo.findOne(pokemon.id));
  }
}

interface IAddRelations {
  id: number;
  moves: string[];
  stats: IStats;
  sprites: ISprites;
}

interface ISprites {
  front_sprite_url: string;
  back_sprite_url: string;
}

interface IPokemon {
  id: number;
  name: string;
  primaryType: string;
  secondaryType: string;
  moves: string[];
  stats?: IStats;
}

interface IStats {
  id?: number;
  attack: number;
  defense: number;
  speed: number;
  hp: number;
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
