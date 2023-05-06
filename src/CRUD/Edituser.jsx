import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import style from "./homecrud.module.css";
import axios from "axios";

const Edituser = () => {
  let [name, setName] = useState("");
  let [salary, setData1] = useState("");
  let [company, setData2] = useState("");

  let { abc } = useParams();
  console.log(abc);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/employees/${abc}`)
      .then((responce) => {
        setName(responce.data.name);
        setData1(responce.data.salary);
        setData2(responce.data.company);
      })
      .catch(() => {
        console.log("Something went wrong");
      });
  }, []);

  let nameData = (e) => {
    setName(e.target.value);
  };
  let salData = (e) => {
    setData1(e.target.value);
  };
  let comData = (e) => {
    setData2(e.target.value);
  };

  let nav = useNavigate();


  let formHandle = () => {
    let payload ={
      name,salary,company
    }
    axios
      .put(`http://localhost:3000/employees/${abc}`,payload)
      .then(() => {
        console.log("DATA UPDATED");
      })
      .catch(() => {
        console.log("SOMETHING WRONG");
      });
      
      nav("/users")
  };
  return (
    <div id={style.tableform}>
      <table border={0}>
        <tr>
          <th className={style.up} colSpan={2}>
            Updte Data
          </th>
        </tr>
        <tr>
          <td>
            <label>Name</label>
          </td>
          <td>
            <input type="text" value={name} onChange={nameData} />
          </td>
        </tr>
        <tr>
          <td>
            <label>Salary</label>
          </td>
          <td>
            <input type="number" value={salary} onChange={salData} />
          </td>
        </tr>
        <tr>
          <td>
            <label>Company</label>
          </td>
          <td>
            <input type="text" value={company} onChange={comData} />
          </td>
        </tr>
        <tr>
          <td colSpan={2} className={style.btn}>
            <button onClick={formHandle}>Submit</button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Edituser;
