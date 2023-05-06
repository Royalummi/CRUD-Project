// import Findecode from "./components/Findecode"
// import Explore from "./components/menucomp/Explore"
// import Hire from "./components/menucomp/Hire"
// import Dev from "./components/menucomp/Dev"
// import Challenges from "./components/menucomp/Challenges"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Homecrud from "./CRUD/Homecrud"
import Createusers from "./CRUD/Createusers"
import Users from "./CRUD/Users"
import Edituser from "./CRUD/Edituser"
const App=()=>{
  return(
    <div>
      <BrowserRouter>
      <Homecrud/>
      <Routes>
        <Route element={<Createusers/>} path="/"></Route>
        <Route element={<Users/>} path="/users"></Route>
        <Route element={<Edituser/>} path="/edit/:abc"></Route>
      </Routes>
      </BrowserRouter>
      












      {/* <Findecode/> */}
      {/* <Route element={<Explore/>} path="/comp1"></Route>
      <Route element={<Hire/>} path="/comp2"></Route>
      <Route element={<Dev/>} path="/comp3"></Route>
      <Route element={<Challenges/>} path="/comp4"></Route> */}
    </div>
  )
}
export default App
