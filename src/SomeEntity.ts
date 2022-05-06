import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { SomeEnum } from './SomeEnum';
import 'reflect-metadata';
@Entity()
export class SomeEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name?: string;

  @Column({ nullable: false, enum: SomeEnum })
  problemField!: SomeEnum;
}
