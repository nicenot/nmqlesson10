
import './App.css';
import NqmListUsers from './components/NqmListUsers';
import axios from './api/nqmApi'
import { useEffect, useState } from 'react';
import NqmFormAddOrEdit from './components/NqmFormAddOrEdit';
function NqmApp() {
  
  const [nqmListUsers,setNqmListUsers] = useState([]);

  // đọc dữ liệu từ api
  const nqmGetAllUsers = async  ()=>{
    const nqmResponse = await axios.get("nqmUsers");
    console.log("Api Data:",nqmResponse.data);
    setNqmListUsers(nqmResponse.data)
  }

  
  useEffect(()=>{
    nqmGetAllUsers();
    console.log("State Data:",nqmListUsers);
  },[])

  const [nqmAddOrEdit, setNqmAddOrEdit] = useState(false);
  const nqmInitUser = {
      UserName: "..........",
      Password: "..........",
      Email: "...........",
      Phone: "............",
      id: "............"
  }
  const [nqmUser, setNqmUser] = useState(nqmInitUser);

  // Hàm xử lý nút thêm mới
  const nqmHandleAddNew = ()=>{
    setNqmAddOrEdit(true);
  }
  const nqmHandleClose=(param)=>{
    setNqmAddOrEdit(param);
  }
  const nqmHandleSubmit =(param)=>{
    nqmGetAllUsers();
    setNqmAddOrEdit(param);
  }
  const nqmHandleDelete=()=>{
    nqmGetAllUsers();
  }
  let nqmElementForm = nqmAddOrEdit===true?
      <NqmFormAddOrEdit renderUsers={nqmUser} 
                        onNqmClose={nqmHandleClose}
                        onNqmSubmitForm={nqmHandleSubmit}/>:"";
  return (
    <div className="container border my-3">
        <h1>Làm việc với MockApi</h1>
        <hr/>
        <NqmListUsers  renderNqmListUsers={nqmListUsers} onNqmDelete={nqmHandleDelete}/>
        <button className='btn btn-primary' name='btnNqmThemMoi' onClick={nqmHandleAddNew}>Thêm mới</button>
        <hr/>
        {nqmElementForm}
    </div>
  );
}

export default NqmApp;
