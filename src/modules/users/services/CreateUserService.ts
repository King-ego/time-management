import PrimaClient from "../../../shared/infra/prismaClient";
import User from "@modules/users/entities/User";

interface IRequestCreateUser {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    public async execute({password, email, name}: IRequestCreateUser): Promise<User> {
        const user =  await PrimaClient.user.create({
            data: {
                name,
                email,
                password
            }
        })

        return (user as unknown) as User;
    }
}

export default CreateUserService;