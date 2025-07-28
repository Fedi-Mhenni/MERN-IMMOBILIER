import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signup = async(req, res,next) => {
    const{ username, email, password } = req.body;
    const hashedPassword = await bcryptjs.hashSync(password, 10);   
    const newUser = new User({username,email,password: hashedPassword}); 
    try{
    await newUser.save();
    res.status(201).json("User created successfully")
    }catch(err){
        next(err);
    }  
};

export const signin = async(req, res,next) => {
    const { email, password } = req.body;
    try{
        const validuser = await User.findOne({ email });
        if(!validuser) return next(errorhandler(404, "User not found"));
        const validpassword =  bcryptjs.compareSync(password, validuser.password);
        if(!validpassword) return next(errorhandler(401, "Wrong credential !"));
        const token = jwt.sign({ id: validuser._id }, process.env.JWT_SECRET);
        const{ password: pass, ...rest} = validuser._doc;
        res
        .cookie('acess_token',token,{httpOnly : true})
        .status(200)
        .json(rest);
    }
    catch(err){
        next(err);
    }  
}
