import { useState } from "react"
import style from "./homecrud.module.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Createusers = ()=>{
  let [name, setData] = useState("")
  let [salary, setData1] = useState("")
  let [company, setData2] = useState("")
  let name1=(e)=>{
    setData(e.target.value)
  }
  let number=(e)=>{
    setData1(e.target.value)
  }
  let company1=(e)=>{
    setData2(e.target.value)
  }

  let nav = useNavigate()

  let formhandle=()=>{
    let payload = {name,salary,company}
    axios.post("http://localhost:3000/employees",payload)
    .then(()=>{
      console.log("Data stored");
    }).catch(()=>{
      console.log("something went wrong");
    })

    nav("/users")
  }
  return(
    <div id={style.tableform}>
      <table border={0}>
        <tr>
          <td><label>Name</label></td>
          <td><input type="text" value={name} onChange={name1}/></td>
        </tr>
        <tr>
          <td><label>Salary</label></td>
          <td><input type="number" value={salary} onChange={number}/></td>
        </tr>
        <tr>
          <td><label>Company</label></td>
          <td><input type="text" value={company} onChange={company1}/></td>
        </tr> 
        <tr>
          <td colSpan={2} className={style.btn} onClick={formhandle}><button>Submit</button></td>
        </tr>
      </table>
    </div>
  )
}

export default Createusers
