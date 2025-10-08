
import { Router } from "express";
import { actualizarUniversidadController, buscarUniversidadesPorRegionController, crearUniversidadController, eliminarUniversidadController, obtenerTodasUniversidadesController } from "../controllers/universidad.controller";



const router = Router();

router.post('/', crearUniversidadController)

router.get('/', obtenerTodasUniversidadesController)

router.get( '/region/:id_region', buscarUniversidadesPorRegionController )

router.put('/:id_universidad', actualizarUniversidadController)

router.delete('/:id_universidad', eliminarUniversidadController)

export default router;