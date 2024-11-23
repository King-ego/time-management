import prismaClient from "@shared/infra/prismaClient";
import IUserRepository from "@modules/users/repositories/IUserRepository";
import User from "@modules/users/entities/User";
import IUpdateUserDTO from "@modules/users/dto/IUpdateUserDTO";
import user from "@modules/users/entities/User";
import PrismaClient from "@shared/infra/prismaClient";

class UserRepository implements IUserRepository {
    public async create(name: string, email: string, password: string): Promise<User> {
        const user = await prismaClient.user.create({
            data: {
                name,
                email,
                password
            }
        });

        return (user as unknown) as User;
    }

    public async update({user_id, name}: IUpdateUserDTO): Promise<User> {
        const user = await prismaClient.user.update({
            where: {
                id: user_id
            },
            data: {
                name
            }
        });

        return (user as unknown) as User;
    }

    public async findById(user_id: string): Promise<User | undefined> {
        const user =  await PrismaClient.user.findFirst({
            where: {
                id: user_id,
            }
        });

        return (user as unknown) as User;
    }

    public async index(): Promise<User[]> {
        const users = await prismaClient.user.findMany();

        return (users as unknown) as User[];
    }
}

export default UserRepository;