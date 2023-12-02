import { Router } from "express";
import { Autos_Crtl } from "./Autos_Ctrl.js";
export const router = Router();
// import { isAuth } from "../../middlewares/session.js";

router.get("/", Autos_Crtl.getAll);

router.get("/:id", Autos_Crtl.getById);

//insert auth_middleware between request and controller
router.delete("/:id", Autos_Crtl.deleteOne);

router.post("/", Autos_Crtl.addOne);

// router.patch("/:id", isAuth, Autos_Crtl.updateOne);

router.patch("/:id", Autos_Crtl.updateOne);

// router.get("/html")
