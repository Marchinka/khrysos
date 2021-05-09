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
exports.CashFlowType = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
let CashFlowType = class CashFlowType {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "bigint", name: "Id" }),
    __metadata("design:type", String)
], CashFlowType.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "Name", length: 255 }),
    __metadata("design:type", String)
], CashFlowType.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "ColorCode", nullable: true, length: 45 }),
    __metadata("design:type", String)
], CashFlowType.prototype, "colorCode", void 0);
__decorate([
    typeorm_1.Column("int", { name: "UserId" }),
    __metadata("design:type", Number)
], CashFlowType.prototype, "userId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => User_1.User, (user) => user.cashFlowTypes, {
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
    }),
    typeorm_1.JoinColumn([{ name: "UserId", referencedColumnName: "id" }]),
    __metadata("design:type", User_1.User)
], CashFlowType.prototype, "user", void 0);
CashFlowType = __decorate([
    typeorm_1.Index("User_FK_idx", ["userId"], {}),
    typeorm_1.Entity("CashFlowType", { schema: "s2zr9e2kghodgkgd" })
], CashFlowType);
exports.CashFlowType = CashFlowType;
//# sourceMappingURL=CashFlowType.js.map