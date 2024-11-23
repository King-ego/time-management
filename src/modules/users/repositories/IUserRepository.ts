import IUser from "@modules/users/entities/User";
import IUpdateUserDTO from "@modules/users/dto/IUpdateUserDTO";

export default interface IUserRepository {
    create(name: string, email:string, password: string): Promise<IUser>;
    update(userUpdate: IUpdateUserDTO): Promise<IUser>;
    findById(user_id: string): Promise <IUser | undefined>;
    index(): Promise<IUser[]>;
}