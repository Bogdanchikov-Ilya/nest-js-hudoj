import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;
  // nullable column
  @Column({ nullable: true })
  fullName?: string;

  @Column()
  email: string;

  @Column()
  password: string;


}
