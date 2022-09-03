import {
  Entity,
  Column,
  BaseEntity,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "users" })
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 50 })
  name: string;

  @Column({ type: "varchar", length: 50 })
  lastname: string;

  @Column({ type: "int" })
  age: number;

  @Column({ type: "varchar", length: 150 })
  password: string;

  @Column({ type: "varchar", length: 50 })
  refreshToken: string;

  @Column({ type: "boolean", default: true, name: "is_active" })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
