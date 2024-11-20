import PrismaClient from "../../../shared/infra/prismaClient";
import AppError from "@shared/error";

import User from "@modules/users/entities/User";

interface IRequestUpdateUser {
    name: string;
    user_id: string;
}

class UpdateUserService {
    public async execute({user_id, name}: IRequestUpdateUser): Promise<User> {
        const existUser = await PrismaClient.user.findFirst({
            where: {
                id: user_id,
            }
        });

        if (!existUser) {
            throw new AppError("User not found", 404);
        }

       const user =  await PrismaClient.user.update({
            where: {
                id: user_id
            },
            data: {
                name
            }
        });

       return ( user as unknown ) as User;
    }
}

export default UpdateUserService;