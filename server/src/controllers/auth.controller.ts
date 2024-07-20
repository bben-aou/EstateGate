import { Response, Request } from "express";
import { hashPassword } from "@utils/hashPassword";
import prisma from '@lib/prisma';

export const register = async (req: Request, res: Response) => {
    console.log('register endpoint', req.body);
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    const hashedPassword = await hashPassword(password);
    console.log('hashed Password', hashedPassword);

    try {
        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword
            }
        });
        console.log('newUser', newUser);
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const login = (req: Request, res: Response) => {
    console.log('login endpoint');
    res.status(200).send('Login endpoint hit');
};

export const logout = (req: Request, res: Response) => {
    console.log('logout endpoint');
    res.status(200).send('Logout endpoint hit');
};
