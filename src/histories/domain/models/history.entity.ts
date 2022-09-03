import {
  Column,
  Entity,
  ManyToOne,
  BaseEntity,
  JoinColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { DriversEntity } from "./../../../drivers/domain/models/driver.entity";

@Entity({ name: "histories" })
export class HistoryEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "name_patient", type: "varchar", length: 100 })
  namePatient: string;

  @ManyToOne((type) => DriversEntity, (driver) => driver.histories)
  @JoinColumn({ name: "driver_id" })
  driver: DriversEntity;
}
