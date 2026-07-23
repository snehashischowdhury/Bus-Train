const express=require("express");

const router=express.Router();

const authController=require("../controllers/authController");

router.get("/login",authController.loginPage);

router.get("/signup",authController.signupPage);

router.post("/signup",authController.signupUser);

router.post("/login", authController.loginUser);

module.exports=router;