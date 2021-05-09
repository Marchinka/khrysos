import express from 'express';
import { getConnection } from 'typeorm';
import { CashFlowType } from '../entities/CashFlowType';
import CurrentUser from '../utils/CurrentUser';

let router = express.Router();

router.get("/", async (req: any, res: any) => {
    let results = await getConnection().manager.find(CashFlowType, { userId: CurrentUser(req).id});
    res.send(results);
});

export default router;