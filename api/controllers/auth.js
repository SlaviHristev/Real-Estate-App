import bcrypt from 'bcrypt'
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
        })

        if(!user){
            return res.status(401).json({message:"Invalid Credentials!"})
        }

        const isPassValid = await bcrypt.compare(password, user.password);

        if(!isPassValid){
            return res.status(401).json({message:"Invalid Credentials!"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Failed to login!"})
    }
};

export const logout = (req, res) => {

};
