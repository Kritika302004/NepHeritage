import express from "express";
import {addToCart, getCartProducts,removeAllFromCart,updateQuantity} from "../controllers/cartcontroller.js";
import { protectRoute } from "../middleware/authmiddleware.js";

const router = express.Router();

router.post("/",protectRoute, getCartProducts);
router.post("/",protectRoute, addToCart);
router.delete("/",protectRoute, removeAllFromCart);
router.put("/:id",protectRoute, updateQuantity);


export default router