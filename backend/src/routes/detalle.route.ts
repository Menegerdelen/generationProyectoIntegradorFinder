

import { Router } from "express"
import { actualizarDetalleController, crearDetallleController, eliminarDetalleController, obtenerTodosDetallesController } from "../controllers/detalles.controller";


const router = Router();

router.post( '/', crearDetallleController)

router.get("/", obtenerTodosDetallesController);

router.put("/:id_detalle", actualizarDetalleController);

router.delete("/:id_detalle", eliminarDetalleController);


export default router;