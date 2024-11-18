import { Request, Response } from "express";

export default class UserController {
    public async create(request: Request, response: Response): Promise<void> {
        const numbers = [1, 2, 3, 4, 5];
        response.json(numbers);
    }

}