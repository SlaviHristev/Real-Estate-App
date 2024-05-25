import prisma from "../lib/prisma.js";
import bcrypt from 'bcrypt';

export const getUsers = async(req,res) =>{

    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users)
    } catch (error) {
        console.log(err);
        res.status(500).json({message:"Failed to get user!"})
    }
}

export const getUser = async(req,res) =>{
    const id = req.params.id;
    try {
        const user = await prisma.user.findUnique({
            where:{
                id
            }
        });
        res.status(200).json(user)
    } catch (error) {
        console.log(err);
        res.status(500).json({message:"Failed to get users!"})
    }
}

export const updateUser = async(req,res) =>{
    const id = req.params.id;
    const tokenUserId = req.userId;
    const {password, avatar, ...inputs} = req.body;
    let updatedPassword = null;


    if(id !== tokenUserId){
        return res.status(403).json({message: 'Not Authorized!'});
    }
    try {

        if(password){
            updatedPassword = await bcrypt.hash(password, 10);
        }
        const updateUser = await prisma.user.update({
            where:{id},
            data:{
                ...inputs,
                ...(updatedPassword && {password: updatedPassword}),
                ...(avatar && {avatar}),

            }
        });
        const {password: userPassword, ...rest} = updateUser;
        res.status(200).json(rest)
    } catch (error) {
        console.log(err);
        res.status(500).json({message:"Failed to update user!"})
    }
}

export const deleteUser = async(req,res) =>{
    const id = req.params.id;
    const tokenUserId = req.userId;

    if(id !== tokenUserId){
        return res.status(403).json({message: 'Not Authorized!'});
    }
    try {
        await prisma.user.delete({
            where:{id}
        })
        res.status(200).json({message:"User deleted!"})
    } catch (error) {
        console.log(err);
        res.status(500).json({message:"Failed to delete user!"})
    }
}