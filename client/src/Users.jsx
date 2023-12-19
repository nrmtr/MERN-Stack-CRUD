import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

function Users() {
    const [users, setUsers] = useState([])
        useEffect(()=>{
            axios.get('http://localhost:3000')
            .then(result => setUsers(result.data))
            .catch(err => console.log(err))
        },[])
    const handleDel = (id) =>{
        axios.delete('http://localhost:3000/delUsr/'+id)
        .then(res => {
            console.log(res) 
            window.location.reload()
        })
        .catch(err => console.log(err))
    }
    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <Link to="/new" className='btn btn-success'>Add +</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Tel</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => {
                             return   <tr>
                                {/* user dot and then typing variable to match server side in model */}
                                    <td>{user.name}</td>
                                    <td>{user.address}</td>
                                    <td>{user.tel}</td>
                                    <td>
                                    <Link to={`/update/${user._id}`} className='btn btn-success'>Update</Link>
                                        <button className="btn btn-danger ml-10" onClick={(e)=> handleDel(user._id) }>Del</button>
                                    </td>
                                    <td>
                                        
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
            
        </div>
    )
}
export default Users;