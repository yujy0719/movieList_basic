import React, {useEffect,useState} from "react";
import axios from 'axios';
import UserList from '../Component/UserList'
import Spinner from "../Component/Spinner"

const Users = () => {
    const [users,setUsers] = useState([]);
    const [spinner , setSpinner] = useState(true);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response=>{
                setUsers(response.data)
                setSpinner(false);
                console.log(response)
            });
    },[])
    return (
        <>
            <h1>Users</h1>
            {spinner ? <Spinner/> : <UserList users = {users}/> }
        </>
    )
}
export default Users; 