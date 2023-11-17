
import { useContext, useState} from 'react'
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import CreateUser from "./components/createUser/CreateUser";
import DeleteUser from "./components/deleteUser/DeleteUser";
import Home from "./components/home/Home";
import UpdateUser from "./components/updateUser/UpdateUser";
import { DataContext } from './context/dataContext';


function App() {
  const {  getEditId,
    setGetEditId,
    getDeleteId,
    setGetDeleteId} = useContext(DataContext)
 
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home
           
            />}
          />
          <Route path='/createUser' element={<CreateUser />} />
          <Route path='/updateUser' element={<UpdateUser
            getEditId={getEditId}
            />}
          />
          <Route path='/deleteUser' element={<DeleteUser
            getDeleteId={getDeleteId}
            />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

