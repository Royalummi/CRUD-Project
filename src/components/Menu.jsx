import { Link } from "react-router-dom"
import style from "./findcode.module.css"

const Menu = ()=>{
  return(
    <div id={style.menublock}>
      <div><Link to="/comp1">Explore Work</Link></div>
      <div><Link to="/comp2">Hire Talents</Link></div>
      <div><Link to="/comp3">Dev board</Link></div>
      <div><Link to="/comp4">Challenges</Link></div>
    </div>
  )
}

export default Menu