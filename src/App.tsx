import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link,useParams } from "react-router-dom";
import "./App.css";
import UsersService from "./service/UserService";
import PostsService from "./service/PostsService";
import PostsList from "./component/PostsList";
import UserList from "./component/UserList";
import { IUser, dummyUserList} from './types/user.type';
import { IPost, dummyPostList } from "./types/post.type";


const App: React.FC = () => {
  const [userList, setUserList] = useState(dummyUserList as IUser[])
  const [postList, setPostList] = useState(dummyPostList as IPost[])

  const {id} =useParams();
  console.log('id',id)

  useEffect(() => {

    retrieveUsers();
    retrievePosts();
  }, []);

  const retrieveUsers = () => {
    UsersService.getAll()
      .then((response: any) => {
        setUserList(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };


  const retrievePosts = () => {
    PostsService.getAll()
      .then((response: any) => {
        setPostList(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };


  return (
    <div>
      <Router>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/users"} className="nav-link">
                Users
              </Link>
            </li>

          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/posts" element={<PostsList listData={postList} />} />

            <Route path="/users" element={<UserList list={userList}
            />} />

          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
