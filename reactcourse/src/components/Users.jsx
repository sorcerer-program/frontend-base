import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
function Users() {
    const {id} = useParams();
    const [detailInfo, setDetailInfo] = useState({})
    // get dynamic parameter(placeholder) from current URL
    async function getDetails() {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)

        setDetailInfo(response.data)
    }
    useEffect(() => {
        getDetails();
    }, []);

    return (
        <>
            <Link to={"/"}>Back To Home</Link>
            <h1>{detailInfo.name}</h1>
            <h2>{detailInfo.id}</h2>
            <h3>{detailInfo.username}</h3>
            <h3>{detailInfo.email}</h3>
            <h3>{detailInfo.phone}</h3>
        </>
    )
}
export default Users;
