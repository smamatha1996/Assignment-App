export interface IUser {
    id: string;
    name: string;
    email: string
}
export const dummyUserList: IUser[] = [{
    id: new Date().toJSON().toString(),
    name: "mamatha",
    email: "mamatha@gmail.com",

}]

export enum PageEnum {
    list, add, edit
}