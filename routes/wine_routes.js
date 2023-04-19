import { Router } from "express";
import * as controllers from "../controllers/wines.js"

const router = Router();
router.get("/", controllers.getReviews);
router.get("/:id", controllers.getSingleReview);
router.post("/", controllers.createReview)
router.post("/:id/comments", controllers.createComment)
export default router
