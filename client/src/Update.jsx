import React, {useState, useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom"
import axios from "axios";
function UpdateUsers() {
    const {id} = useParams()
    const [name, setName] = useState()
    const [address, setAddress] = useState()
    const [tel, setTel] = useState()
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:3000/getUsr/'+id)
        .then(result =>{
            console.log(result)
            setName(result.data.name)
            setAddress(result.data.address)
            setTel(result.data.tel)
        })
        .catch(err => console.log(err))
    },[])

    const Update = (e) =>{
        e.preventDefault()
        axios.put('http://localhost:3000/updateUsr/'+id,{name,address,tel})
        .then(result => {
            console.log(result)
            navigate('/')
            
        })
        .catch(err => console.log(err))
    }

    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-itmes-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={Update}>
                    <h2>Update User</h2>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Enter Name" className="form-control" value={name} onChange={(e)=> setName(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Address</label>
                        <input type="text" placeholder="Enter Address" className="form-control " value={address} onChange={(e)=> setAddress(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Tel.</label>
                        <input type="text" placeholder="Enter Tel." className="form-control"value={tel} onChange={(e)=> setTel(e.target.value)}/>
                    </div>
                    <button className="btn btn-success">Update</button>
                </form>
            </div>
        </div>
    )
}
export default UpdateUsers;