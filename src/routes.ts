import { Router } from "express";
import multer from "multer";

import uploadConfig from "./config/upload"; 
import OrphanagesController from "./controllers/OrphanagesController";

const routes = Router();
const uplodad = multer(uploadConfig);

routes.get("/orphanages", OrphanagesController.index);
routes.get("/orphanages/:id", OrphanagesController.show);
routes.post("/orphanages", uplodad.array("images"), OrphanagesController.create);

export default routes;