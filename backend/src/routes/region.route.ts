

import { Router } from "express";
import { actualizarRegionController, crearRegionController, eliminarRegionController, obtenerTodasRegionesController } from "../controllers/region.controller";


const router = Router();

router.post('/', crearRegionController);

router.get('/', obtenerTodasRegionesController)

router.put('/:id', actualizarRegionController)

router.delete('/:id', eliminarRegionController)

export default router;