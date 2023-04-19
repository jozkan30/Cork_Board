import { Router } from "express";
import * as controllers from "../controllers/wines.js"

const router = Router();
router.get("/", controllers.getReviews);
export default router