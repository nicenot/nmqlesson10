import axios from '../api/nqmApi'
import React, { useEffect, useState } from 'react'

export default function NqmFormAddOrEdit({onNqmClose, onNqmSubmitForm, renderUsers}) {

    console.log(renderUsers);
    const [nqmId, setNqmId] = useState(0);
    const [nqmUserName, setNqmUserName] = useState("");
    const [nqmPassword, setNqmPassword] = useState("");
    const [nqmEmail, setNqmEmail] = useState("");
    const [nqmPhone, setNqmPhone] = useState("");

    useEffect(()=>{
        setNqmId(renderUsers.id)
        setNqmUserName(renderUsers.UserName)
        setNqmPassword(renderUsers.Password)
        setNqmEmail(renderUsers.Email)
        setNqmPhone(renderUsers.Phone)
    },[renderUsers])


    const nqmHandleClose = ()=>{
        onNqmClose(false);
    }

    const nqmHandleSubmit= async (event)=>{
        event.preventDefault();
        console.log(nqmId,nqmUserName,nqmPassword,nqmEmail,nqmPhone);
        // post -> api
        let nqmObjUser = {
            UserName: nqmUserName,
            Password: nqmPassword,
            Email: nqmEmail,
            Phone: nqmPhone,
            id: nqmId
        }
        const nqmRes = await axios.post("nqmUsers",nqmObjUser);

        onNqmSubmitForm(false)

    }
  return (
    <div className=''>
      <form>
        <div className="input-group mb-3">
            <span className="input-group-text" id="id">Id</span>
            <input type="text" class="form-control" 
                name='id' value={nqmId} onChange={(ev)=>setNqmId(ev.target.value)}
                placeholder="id" aria-label="id" aria-describedby="id"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="UserName">UserName</span>
            <input type="text" class="form-control" 
                name='UserName' value={nqmUserName} onChange={(ev)=>setNqmUserName(ev.target.value)}
                placeholder="UserName" aria-label="UserName" aria-describedby="UserName"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="Password">Password</span>
            <input type="password" class="form-control" 
                name='Password' value={nqmPassword} onChange={(ev)=>setNqmPassword(ev.target.value)}
                placeholder="Password" aria-label="Password" aria-describedby="Password"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="Email">Email</span>
            <input type="email" class="form-control" 
                name='Email' value={nqmEmail} onChange={(ev)=>setNqmEmail(ev.target.value)}
                placeholder="Email" aria-label="Email" aria-describedby="Email"/>
        </div>
        
        <div className="input-group mb-3">
            <span className="input-group-text" id="Phone">Phone</span>
            <input type="number" class="form-control" 
                name='Phone' value={nqmPhone} onChange={(ev)=>setNqmPhone(ev.target.value)}
                placeholder="Phone" aria-label="Phone" aria-describedby="Phone"/>
        </div>
        <button className='btn btn-primary' name='btnNqmSave' onClick={(ev)=>nqmHandleSubmit(ev)}>Ghi lại</button>
        <button className='btn btn-danger' onClick={nqmHandleClose}>Đóng</button>
      </form>
    </div>
  )
}
