import { Router } from "express";
import learn_random from "../../controllers/learn-random.js";

const router = Router();

router.get("/learn-random", learn_random);

export default router;