import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Index("User_FK_idx", ["userId"], {})
@Entity("CashFlowType", { schema: "s2zr9e2kghodgkgd" })
export class CashFlowType {
  @PrimaryGeneratedColumn({ type: "bigint", name: "Id" })
  id: string;

  @Column("varchar", { name: "Name", length: 255 })
  name: string;

  @Column("varchar", { name: "ColorCode", nullable: true, length: 45 })
  colorCode: string | null;

  @Column("int", { name: "UserId" })
  userId: number;

  @ManyToOne(() => User, (user) => user.cashFlowTypes, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "UserId", referencedColumnName: "id" }])
  user: User;
}
