import Router from "express"
import DisparoController from "../controllers/disparo.controller.js";

const router = Router()

router.post('/', DisparoController.mensagem);

export default router;