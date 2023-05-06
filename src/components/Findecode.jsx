import Btn from "./Btn"
import Logo from "./Logo"
import Menu from "./Menu"
import style from "./findcode.module.css"

const Findecode = ()=>{
  return(
    <div>
      <section id={style.nav}>
        <article>
          <div className={style.logo}><Logo/></div>
          <div className={style.menu}><Menu/></div>
          <div className={style.btn}><Btn/></div>
        </article>
      </section>
    </div>
  )
}

export default Findecode