import axios from "axios";
import { useEffect, useState } from "react";
import style from "./homecrud.module.css";
import {Link} from "react-router-dom";

const Users = () => {
 
  let [content, setContent] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/employees")
      .then((responce) => {
        setContent(responce.data);
      })
      .catch(() => {
        "Something went wrong";
      });
  }, []);

  let deleteData =(pass)=>{
    axios.delete(`http://localhost:3000/employees/${pass}`)
    window.location.assign("/users")
  }
  return (
    <div id={style.userpage}>
      {content.map((x) => {
        return (
          <div id={style.userblock}>
            <table border={0}>
              <tr>
                <th colSpan={2}>EMPLOYEE {x.id}</th>
              </tr>
              <tr>
                <td>NAME :</td>
                <td>{x.name}</td>
              </tr>
              <tr>
                <td>SALARY :</td>
                <td>{x.salary}</td>
              </tr>
              <tr>
                <td>COMPANY :</td>
                <td>{x.company}</td>
              </tr>
              <tr>
                <td>
                  <button><Link to={`/edit/${x.id}`}>EDIT</Link></button>
                </td>
                <td>
                  <button onClick={()=>{deleteData(x.id)}}>DELETE</button>
                </td>
              </tr>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
