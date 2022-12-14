import jwt from "jsonwebtoken";
import config from "../config";
import IJwt from '../interfaces/IJWT';

export function createToken(user_id: string): string {
    const token = jwt.sign({ id: user_id }, config.JWT_SECRET as string, {
        expiresIn: config.JWT_DURATION,
    });

    return token;
}

export function verifyToken(token: string): boolean {
    try {
        jwt.verify(token, config.JWT_SECRET as string); //the decoded token will be an _id of an user or an

        return true;
    } catch (error) {
        return false;
    }
}

export function getTokenContent(token: string): string {
    const {id} = jwt.decode(token) as IJwt;
    return id;
}