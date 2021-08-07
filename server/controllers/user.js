import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

export const signIn = async (req, res) => {
    const { mobileNumber, password } = req.body;

    try{
        const existingUser = await User.findOne({ mobileNumber });
        if(!existingUser) return res.status(404).json({ message: "User doesn't exist."});
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if(!isPasswordCorrect) return res.status(400).json({ message: "Incorrect Password" });
        const token = jwt.sign({ mobileNumber: existingUser.mobileNumber, id: existingUser._id }, 'test', { expiresIn: "1h" });
        res.status(200).json({ result: existingUser, token });
    }catch(error) {
        res.status(500).json({ message: "Something went Wrong."});
    }
}

export const signUp = async (req, res) => {
    const { mobileNumber, password } = req.body;

    try{
        const existingUser = await User.findOne({ mobileNumber });
        if(existingUser) return res.status(400).json({ message: "User already exists." });

        const hashedPassword = await bcrypt.hash(password, 12);
        const result = await User.create({ mobileNumber, password: hashedPassword });
        const token = jwt.sign({ mobileNumber: result.mobileNumber, id: result._id }, 'test', { expiresIn: "1h" });

        res.status(200).json({ result, token });
    }catch(error) {
        res.status(500).json({ message: "Something went Wrong." });
    }
}