import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CashFlowType } from "./CashFlowType";
import { CashFlow } from "./CashFlow";

@Entity("User", { schema: "s2zr9e2kghodgkgd" })
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("varchar", { name: "UserName", nullable: true, length: 255 })
  userName: string | null;

  @OneToMany(() => CashFlowType, (cashFlowType) => cashFlowType.user)
  cashFlowTypes: CashFlowType[];

  @OneToMany(() => CashFlow, (cashFlow) => cashFlow.user)
  cashFlows: CashFlow[];
}
