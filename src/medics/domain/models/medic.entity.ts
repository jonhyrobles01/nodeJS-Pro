import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "medics" })
export class MedicEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 50 })
  name: string;

  @Column({ type: "varchar", length: 50 })
  lastname: string;

  @Column({ type: "varchar", length: 5 })
  cmp: string;

  @Column({ type: "boolean", default: true, name: "is_active" })
  isActive: boolean;
}
