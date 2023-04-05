import { Model } from "sequelize-typescript";
import { User } from "src/users/users.model";
interface PostCreationAttrs {
    title: string;
    content: string;
    userId: number;
    image: string;
}
export declare class Post extends Model<Post, PostCreationAttrs> {
    id: number;
    title: string;
    content: string;
    image: string;
    userId: number;
    author: User;
}
export {};
