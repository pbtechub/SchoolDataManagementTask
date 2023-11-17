import { React, useState, useContext, useEffect } from "react";
import { DataContext } from "../../context/dataContext";
import "./DeleteUser.scss";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const DeleteUser = () => {
  const { users, getDeleteId } = useContext(DataContext);
  let navigate = useNavigate();
  const deleteUser = users.find((user) => user._id === getDeleteId);

  const [err, setErr] = useState(null);



  const handleDeleteUser = async (e) => {
    e.preventDefault();

    try {
      await axios.delete(`http://localhost:5500/users/user/${getDeleteId}`);
      navigate("/");
    } catch (err) {
      setErr(err.response.data);
    }
  };

  return (
    <div className="deleteUser">
      <h4>Do you want to delete following record?</h4>
      <div className="deleteRecord">
        <h4>Student Id: {deleteUser.studentId}</h4>
        <h4>Student Name: {deleteUser.name}</h4>
      </div>
      <div className="deleteBtns">
        <NavLink to="/">
          <button>Cancel</button>
        </NavLink>
        <button onClick={handleDeleteUser}>Delete</button>
      </div>
    </div>
  );
};

export default DeleteUser;
