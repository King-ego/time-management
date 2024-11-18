import {Prisma} from "@prisma/client";

import PrimaClient from "../../../shared/infra/primaClient";

interface IRequestCreateUser {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    public async execute({password, email, name}: IRequestCreateUser): Promise<Prisma> {
        const user =  await PrimaClient.user.create({
            data: {
                name,
                email,
                password
            }
        })

        return user;
    }
}

export default CreateUserService;