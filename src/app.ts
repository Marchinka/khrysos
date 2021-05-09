import express = require('express');
import CashFlowRouter from './router/CashFlowRouter';
import "reflect-metadata";
import { ConnectionOptions, getConnectionManager } from "typeorm";
import { APPLICATION_PORT, DATABASE, DB_PORT, DB_USERNAME, HOST, PASSWORD } from './utils/Config';
import CashFlowTypeRouter from './router/CashFlowTypeRouter';
import { CashFlow } from './entities/CashFlow';
import { User } from './entities/User';
import { CashFlowType } from './entities/CashFlowType';

var cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json());
app.use(express.static('src/ui/public'));

const API_BASE = "/api"

app.use(API_BASE + "/cash-flow", CashFlowRouter);
app.use(API_BASE + "/cash-flow-type", CashFlowTypeRouter);

const dbOptions : ConnectionOptions = {
    type: "mysql",
    host: HOST,
    port: DB_PORT,
    username: DB_USERNAME,
    password: PASSWORD,
    database: DATABASE,
    ssl: true,
    entities: [
        CashFlow,
        CashFlowType,
        User
    ],
    synchronize: false,
    logging: false
};

app.listen(APPLICATION_PORT, async () => {

    const connectionManager = getConnectionManager();
    const connection = connectionManager.create(dbOptions);
    await connection.connect(); 

    console.log("Running on port", APPLICATION_PORT);
});