import './UserList.style.css'
import {  Link } from "react-router-dom";
import { IPost} from '../types/post.type';

type Props = {
    listData: IPost[],
}
const PostsList = (props: Props) => {
    const { listData} = props;

    return (
        <div className='table'>
            <table>
                <tr>
                    <th>id</th>
                    <th>Title</th>
                </tr>
                {
                    listData.map((post:any) => {
                        return (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <Link to={"/posts"} className="nav-link">
                                <td>{post.title}</td>
                                </Link> 
                               
                            </tr>
                        )
                    })
                }


            </table>


        </div>
    )
}
export default PostsList