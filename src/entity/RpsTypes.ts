import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class RpsTypes {
  @PrimaryGeneratedColumn() id: number;

  @Column({ nullable: false })
  primaryType: string;

  @Column({ nullable: true })
  secondaryType: string;
}
