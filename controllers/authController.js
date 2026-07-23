const path = require("path");
const User = require("../models/User");

exports.loginPage = (req,res)=>{

    res.sendFile(path.join(__dirname,"../views/login.html"));

}

exports.signupPage = (req,res)=>{

    res.sendFile(path.join(__dirname,"../views/signup.html"));

}

exports.signupUser = async(req,res)=>{

    try{

        const{

            fullName,
            email,
            phone,
            password

        } = req.body;

        const existingUser = await User.findOne({

            email

        });

        if(existingUser){

            return res.json({

                success:false,

                message:"Email already registered."

            });

        }

        await User.create({

            fullName,
            email,
            phone,
            password

        });

        res.json({

            success:true,

            message:"Account Created Successfully."

        });

    }

    catch(err){

        console.log(err);

        res.json({

            success:false,

            message:"Server Error"

        });

    }

}

exports.loginUser = async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {

            return res.json({

                success: false,
                message: "Email not found."

            });

        }

        if (user.password !== password) {

            return res.json({

                success: false,
                message: "Incorrect password."

            });

        }

        res.json({

            success: true,
            message: "Login Successful!",
            user: user.fullName

        });

    }
    catch (err) {

        console.log(err);

        res.json({

            success: false,
            message: "Server Error"

        });

    }

};