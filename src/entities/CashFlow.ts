import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Index("FK_CashFlow_CashFlowType_idx", ["userId"], {})
@Entity("CashFlow", { schema: "s2zr9e2kghodgkgd" })
export class CashFlow {
  @PrimaryGeneratedColumn({ type: "bigint", name: "Id" })
  id: string;

  @Column("decimal", { name: "Amount", precision: 10, scale: 2 })
  amount: string;

  @Column("bigint", { name: "CashFlowTypeId" })
  cashFlowTypeId: string;

  @Column("varchar", { name: "Notes", nullable: true, length: 4000 })
  notes: string | null;

  @Column("datetime", { name: "Date" })
  date: Date;

  @Column("int", { name: "UserId" })
  userId: number;

  @ManyToOne(() => User, (user) => user.cashFlows, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "UserId", referencedColumnName: "id" }])
  user: User;
}
