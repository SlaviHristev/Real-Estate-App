import prisma from "../lib/prisma";


export const getPosts =  async (req,res) =>{

    res.status(200).json();
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Failed to get post"})
    }
}

export const getPost =  async (req,res) =>{

    res.status(200).json();
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Failed to get post"})
    }
}

export const addPost =  async (req,res) =>{

    res.status(200).json();
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Failed to create post"})
    }
}

export const updatePost =  async (req,res) =>{

    res.status(200).json();
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Failed to update post"})
    }
}

export const deletePost =  async (req,res) =>{

    res.status(200).json();
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Failed to delete post"})
    }
}