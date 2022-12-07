import { IUser } from '../types/user.type'
import './UserList.style.css'
import {Link} from "react-router-dom";

type Props = {
    list: IUser[],

}
const UserList = (props: Props) => {
    const { list} = props;

    return (
        <div className='table'>
            <table>
                <tr>
                    <th>id</th>
                    <th>User Name</th>
                    <th>Email</th>
                </tr>
                {
                    list.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                {/* <Link to={`/users/:${user.id}/posts`} className="nav-link">
                                <td>{user.name}</td>
                                </Link>  */}
                                <Link to={"/posts"} className="nav-link">
                                <td>{user.name}</td>
                                </Link> 
                                <td>{user.email}</td>
                                
                            </tr>
                        )
                    })
                }


            </table>
       

        </div>
    )
}
export default UserList