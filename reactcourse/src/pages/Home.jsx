import {useEffect, useState} from "react";
import axios from "axios";
import User from "../components/User.jsx";
import {Link} from "react-router-dom";


function Home() {
    const [users, setUsers] = useState([])

    async function fetchData() {
        const {data} = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );

        setUsers(data);
    }
    useEffect(() => {
        setTimeout(() => {
            fetchData();
        }, 1000);   // 1秒钟之后再fetchData 一般为了模拟加载状态或者动画效果
    }, [])

    return (
        <>
            <h1>Home Page</h1>{
                users.map(
                    (user)=>(
                        <Link to={`/users/${user.id}`} key={user.id}>
                            <User
                                id={user.id}
                                name={user.name}
                                username={user.username}
                            />
                        </Link>
                    )
                )
            }
        </>

    )
}
export default Home