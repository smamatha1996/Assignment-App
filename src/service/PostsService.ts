import http from "../http-common";
import {IPost} from "../types/post.type";


const getAll = () => {
  return http.get<Array<IPost>>(`/posts`);
};
const get = (id: any) => {
  return http.get<IPost>(`/posts/${id}`);
};

const PostsService = {
  getAll,
  get,
  
};

export default PostsService;