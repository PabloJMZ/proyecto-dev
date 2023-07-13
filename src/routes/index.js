import { Router } from "express";
import viewsRoutes from "./views/index.js";

const router = Router();

router.get("/", (req, res) => res.redirect("/learn-random"));
router.use(viewsRoutes);

export default router;