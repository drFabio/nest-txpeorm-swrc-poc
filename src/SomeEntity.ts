import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { SomeEnum } from './SomeEnum';

@Entity()
export class SomeEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name?: string;

  @Column({ nullable: false, enum: SomeEnum })
  strategy!: SomeEnum;
}
