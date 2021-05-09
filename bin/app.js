"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const CashFlowRouter_1 = __importDefault(require("./router/CashFlowRouter"));
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Config_1 = require("./utils/Config");
const CashFlowTypeRouter_1 = __importDefault(require("./router/CashFlowTypeRouter"));
const CashFlow_1 = require("./entities/CashFlow");
const User_1 = require("./entities/User");
const CashFlowType_1 = require("./entities/CashFlowType");
var cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use("/cash-flow", CashFlowRouter_1.default);
app.use("/cash-flow-type", CashFlowTypeRouter_1.default);
const dbOptions = {
    type: "mysql",
    host: Config_1.HOST,
    port: Config_1.DB_PORT,
    username: Config_1.DB_USERNAME,
    password: Config_1.PASSWORD,
    database: Config_1.DATABASE,
    ssl: true,
    entities: [
        CashFlow_1.CashFlow,
        CashFlowType_1.CashFlowType,
        User_1.User
    ],
    synchronize: false,
    logging: false
};
app.listen(Config_1.APPLICATION_PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    const connectionManager = typeorm_1.getConnectionManager();
    const connection = connectionManager.create(dbOptions);
    yield connection.connect();
    console.log("Running on port", Config_1.APPLICATION_PORT);
}));
//# sourceMappingURL=app.js.map