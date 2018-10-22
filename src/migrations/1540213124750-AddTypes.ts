import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTypes1540213124750 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `INSERT INTO "type" 
            (name, 
              normalMultiplier,
              fireMultiplier,
              waterMultiplier,
              electricMultiplier,
              grassMultiplier,
              iceMultiplier,
              fightingMultiplier,
              poisonMultiplier,
              goundMultiplier,
              flyingMultiplier,
              psychicMultiplier,
              bugMultiplier,
              rockMultiplier,
              ghostMultiplier,
              dragonMultiplier,
              darkMultiplier,
              steelMultiplier,
              fairyMultiplier
              )
              values
              ('normal',1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1)`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
