import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../lib/prisma.js';

export const register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const hashedPass = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPass
            },
        });

        res.status(201).json({
            message: "User created successfully!"
        })
    }

    catch (error) {
        console.log(error);
        res.status(500).json({message:"Failed to create user!"})
    }

};
 
export const login = async (req, res) => {
    const {username, password} = req.body;

    try {
        const user = await prisma.user.findUnique({
            where: {username}
        });

        if(!user){
            return res.status(401).json({message:"Invalid Credentials!"})
        }

        const isPassValid = await bcrypt.compare(password, user.password);

        if(!isPassValid){
            return res.status(401).json({message:"Invalid Credentials!"})
        }
        const cookieExp = 1000 * 60 * 60 * 24 *7;

        const token = jwt.sign({
            id:user.id,

        }, process.env.JWT_SECRET_KEY, {expiresIn:cookieExp})

        res.cookie('token', token, {
            httpOnly:true,
            // secure:true,
            maxAge: cookieExp,
        }).json({message: "Login Successfull!"})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Failed to login!"})
    }
};

export const logout = (req, res) => {
    res.clearCookie('token').status(200).json({message:"Logout Successfull!"})
};
