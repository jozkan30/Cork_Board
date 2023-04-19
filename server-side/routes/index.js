import { Router } from "express";
import wineRoutes from "./wine_routes.js"

const router = Router();



router.get("/", (req,res) => {
    res.send("Are you looking for wine reviews?")
});
router.use("/wines", wineRoutes);


export default router