

import { Router } from "express";
import { crearFinanciacionController } from "../controllers/financiacion.controller";

const router = Router();

router.post('/', crearFinanciacionController);


export default router;