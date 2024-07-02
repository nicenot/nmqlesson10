import React from 'react'
import axios from '../api/nqmApi'
export default function NqmListUsers({renderNqmListUsers, onNqmDelete}) {
    console.log("NqmListUsers:",renderNqmListUsers);
    // hiener thi đữ liệu
    let nqmElementUser = renderNqmListUsers.map((nqmUser,index)=>{
        return(
                <tr key={index}>
                    <td>{nqmUser.id}</td>
                    <td>{nqmUser.UserName}</td>
                    <td>{nqmUser.Password}</td>
                    <td>{nqmUser.Email}</td>
                    <td>{nqmUser.Phone}</td>
                    <td>
                        <button className='btn btn-danger' onClick={()=>nqmHandleDelete(nqmUser)}> Delete </button>
                    </td>
                </tr>
        )
    })
 
    const nqmHandleDelete =  async (param)=>{
        if(window.confirm('Bạn có muốn xóa thật không?')){
            const nqmRes = await axios.delete("nqmUsers/"+param.id);
        }
        onNqmDelete();
    }
  return (
    <div className='row'>
        <div className='col-md-12'>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>UserName</th>
                        <th>Password</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                {nqmElementUser}
                </tbody>

            </table>
        </div>
    </div>
  )
}
