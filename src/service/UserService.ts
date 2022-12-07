import http from "../http-common";
import {IUser} from "../types/user.type";

const getAll = () => {
  return http.get<Array<IUser>>("/users");
};
const get = (id: any) => {
  return http.get<IUser>(`/users/${id}`);
};



const UsersService = {
  getAll,
  get,
 
};

export default UsersService;
