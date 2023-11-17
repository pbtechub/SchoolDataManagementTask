import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/dataContext";
import { NavLink, useNavigate } from "react-router-dom";
import "./Home.scss";
import axios from "axios";

const Home = () => {
  // const { users, err, isLoading } = useContext(DataContext);

  const [users, setUsers] = useState([]);
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const { getEditId, setGetEditId, getDeleteId, setGetDeleteId } =
    useContext(DataContext);

  useEffect(() => {
    const fetchUser = async () => {
      await axios
        .get("http://localhost:5500/users")
        .then((response) => setUsers(response.data))
        .catch((err) => setErr(err.message))
        .finally(setIsLoading(false));
    };

    setTimeout(() => {
      fetchUser();
    }, 2000);
  }, []);

  const handleEdit = (id) => {
    setGetEditId(id);
  };
  const handleDelete = (id) => {
    setGetDeleteId(id);
  };

  return (
    <div className="home">
      <div>
        <div><h3>Student Data</h3></div>
        <NavLink to="./createUser">
          <button>Add</button>
        </NavLink>
      </div>
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>S.N</th>
              <th>Student Id</th>
              <th>Name</th>
              <th>Teacher Name</th>
              <th>Subject</th>
              <th>Marks</th>
              <th>Active</th>
            </tr>
          </thead>

          {isLoading ? (
            "Loading..."
          ) : err ? (
            err
          ) : users.length ? (
            <tbody>
              {users.map((user, idx) => (
                <tr key={user._id}>
                  <td>{idx + 1}</td>
                  <td>{user.studentId}</td>
                  <td>{user.name}</td>
                  <td>{user.teacherName}</td>
                  <td>{user.subject}</td>
                  <td>{user.marks}</td>
                  <td>
                    <NavLink to={getEditId !== '' ? "./updateUser" : "/"}>
                      <button
                        onClick={() => handleEdit(user._id)}
                        className="edit"
                      >
                        Edit
                      </button>
                    </NavLink>
                    <span>/</span>
                    <NavLink to={getDeleteId !== '' ? "/deleteUser" : "/"}>
                      <button
                        onClick={() => handleDelete(user._id)}
                        className="delete"
                      >
                        Delete
                      </button>
                    </NavLink>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <p>No users data is to be display...</p>
          )}
        </table>
      </div>
    </div>
  );
};

export default Home;
