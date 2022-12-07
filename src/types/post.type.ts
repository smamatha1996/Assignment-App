export interface IPost {
    id: string;
    title: string;
}
export const dummyPostList: IPost[] = [{
    id: new Date().toJSON().toString(),
    title: "karishma"

}]

export enum PageEnum {
    list, add, edit
}