import {
  Column,
  Entity,
  OneToMany,
  BaseEntity,
  PrimaryGeneratedColumn,
} from "typeorm";
import { HistoryEntity } from "../../../histories/domain/models/history.entity";

@Entity({ name: "drivers" })
export class DriversEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 50 })
  name: string;

  @Column({ type: "varchar", length: 50 })
  lastname: string;

  @Column({ type: "varchar", length: 50 })
  licenseDriver: string;

  @Column({ type: "boolean", default: true, name: "is_active" })
  isActive: boolean;

  @OneToMany((type) => HistoryEntity, (history) => history.driver)
  histories: HistoryEntity[];
}
