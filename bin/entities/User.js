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
exports.User = void 0;
const typeorm_1 = require("typeorm");
const CashFlowType_1 = require("./CashFlowType");
const CashFlow_1 = require("./CashFlow");
let User = class User {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "Id" }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "UserName", nullable: true, length: 255 }),
    __metadata("design:type", String)
], User.prototype, "userName", void 0);
__decorate([
    typeorm_1.OneToMany(() => CashFlowType_1.CashFlowType, (cashFlowType) => cashFlowType.user),
    __metadata("design:type", Array)
], User.prototype, "cashFlowTypes", void 0);
__decorate([
    typeorm_1.OneToMany(() => CashFlow_1.CashFlow, (cashFlow) => cashFlow.user),
    __metadata("design:type", Array)
], User.prototype, "cashFlows", void 0);
User = __decorate([
    typeorm_1.Entity("User", { schema: "s2zr9e2kghodgkgd" })
], User);
exports.User = User;
//# sourceMappingURL=User.js.map