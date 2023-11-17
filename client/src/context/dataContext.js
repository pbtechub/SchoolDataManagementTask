import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [getEditId, setGetEditId] = useState('');
  const [getDeleteId, setGetDeleteId] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      await axios
        .get("http://localhost:5500/users")
        .then((response) => setUsers(response.data))
        .catch((err) => setErr(err.message))
        .finally(setIsLoading(false));
    };

    fetchUser();
    // setTimeout(() => {
    // }, 2000);
  }, []);

  return (
    <DataContext.Provider
      value={{
        users,
        err,
        isLoading,
        getEditId,
        setGetEditId,
        getDeleteId,
        setGetDeleteId,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
