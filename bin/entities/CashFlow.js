"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashFlow = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
let CashFlow = class CashFlow {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "bigint", name: "Id" }),
    __metadata("design:type", String)
], CashFlow.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("decimal", { name: "Amount", precision: 10, scale: 2 }),
    __metadata("design:type", String)
], CashFlow.prototype, "amount", void 0);
__decorate([
    typeorm_1.Column("bigint", { name: "CashFlowTypeId" }),
    __metadata("design:type", String)
], CashFlow.prototype, "cashFlowTypeId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "Notes", nullable: true, length: 4000 }),
    __metadata("design:type", String)
], CashFlow.prototype, "notes", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "Date" }),
    __metadata("design:type", Date)
], CashFlow.prototype, "date", void 0);
__decorate([
    typeorm_1.Column("int", { name: "UserId" }),
    __metadata("design:type", Number)
], CashFlow.prototype, "userId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => User_1.User, (user) => user.cashFlows, {
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
    }),
    typeorm_1.JoinColumn([{ name: "UserId", referencedColumnName: "id" }]),
    __metadata("design:type", User_1.User)
], CashFlow.prototype, "user", void 0);
CashFlow = __decorate([
    typeorm_1.Index("FK_CashFlow_CashFlowType_idx", ["userId"], {}),
    typeorm_1.Entity("CashFlow", { schema: "s2zr9e2kghodgkgd" })
], CashFlow);
exports.CashFlow = CashFlow;
//# sourceMappingURL=CashFlow.js.map